import React, { useState, useEffect } from "react";
import { Modal, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FAB } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { BarCodeScanner } from "expo-barcode-scanner";
import Empty from "../components/Empty";
import MachineItem from "../components/MachineItem";
import { SwipeListView } from "react-native-swipe-list-view";
import DeleteMachine from "../components/DeleteMachine";
const sites = ["youtube.com ", "remove.bg ", "youtube.com "];

export default function Machines() {
  const [machines, setMachines] = useState(sites);
  const [addMachine, setAddMachine] = useState(false);

  return (
    <>
      {machines.length > 0 ? (
        <SwipeListView
          showsVerticalScrollIndicator={false}
          style={{ padding: 10 }}
          keyExtractor={(item, index) => `${index}`}
          data={machines}
          renderItem={data => <MachineItem name={data.item} />}
          renderHiddenItem={data => <DeleteMachine data={data.item} />}
          leftOpenValue={0}
          rightOpenValue={-70}
        />
      ) : (
        <Empty
          text=" No registered computer!!"
          image={require("../assets/empty.png")}
        />
      )}

      <FAB
        style={styles.fab}
        color="white"
        visible={true}
        icon="plus"
        onPress={() => setAddMachine(true)}
      />
      <AddMachine addMachine={addMachine} setAddMachine={setAddMachine} />
    </>
  );
}

const AddMachine = ({ addMachine, setAddMachine }) => {
  const [hasPermission, setHaspermission] = useState(false);
  const [name, setName] = useState("");
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");

  const askForCameraPermission = () => {
    (async () => {
      const status = await BarCodeScanner.requestPermissionsAsync();
      setHaspermission(status == "granted");
    })();
  };
  const submit = () => {
    let computer = { id: text, name: name };
    console.log(computer);
  };
  // ask Camera permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // Scann code
  const handleBarcodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\ndata: " + data);
  };

  return (
    <Modal visible={addMachine} animationType="slide">
      {scanned ? (
        <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ccc",
              padding: 10,
              borderRadius: 20,
            }}
          >
            <Text>Computer Id: {text}</Text>
          </View>
          <TextInput
            style={{ marginTop: 20 }}
            placeholder="Computer Name"
            value={name}
            onChangeText={value => setName(value)}
            right={<TextInput.Icon name="laptop" color="#0b406d" />}
          />

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <TouchableOpacity
              onPress={submit}
              style={{
                backgroundColor: "orange",
                width: "80%",
                alignItems: "center",
                borderRadius: 20,
                padding: 10,
                marginBottom: 20,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white" }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setScanned(false)}
              style={{
                backgroundColor: "orange",
                width: "80%",
                alignItems: "center",
                borderRadius: 20,
                padding: 10,
              }}
            >
              <Text style={{ color: "white" }}>
                {scanned ? "Scan Again" : "Scan Code"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#ccc",
                width: "80%",
                alignItems: "center",
                borderRadius: 20,
                padding: 10,
                marginTop: 20,
              }}
              onPress={() => {
                setScanned(false);
                setAddMachine(false);
              }}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 16, marginBottom: 10 }}>Scanning ...</Text>
          <View
            style={{
              height: 300,
              width: 300,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
              backgroundColor: "black",
              overflow: "hidden",
              marginBottom: 20,
            }}
          >
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarcodeScanned}
              style={{ height: 400, width: 400 }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#ccc",
              width: "80%",
              alignItems: "center",
              borderRadius: 20,
              padding: 10,
              marginTop: 20,
            }}
            onPress={() => {
              setScanned(false);
              setAddMachine(false);
            }}
          >
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
