import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Keyboard,
} from "react-native";
import LinearProgress from "react-native-elements/dist/linearProgress/LinearProgress";
import Icon from "react-native-vector-icons/FontAwesome";
import { editComputer, getComputers } from "../config/controller";

export default function MachineItem({ name, code, setMachines }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "white",
        marginTop: 10,
        borderRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexGrow: 1, flexDirection: "row" }}>
          <Icon name="laptop" size={24} color="#0b406d" />
          <Text style={{ marginLeft: 10 }}> {name} </Text>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="edit" size={24} color="#0b406d" />
        </TouchableOpacity>
      </View>
      <Edit
        name={name}
        code={code}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setMachines={setMachines}
      />
    </View>
  );
}

const Edit = ({ name, modalVisible, setModalVisible, code, setMachines }) => {
  const [editedName, setEditedName] = useState(name);
  const [loading, setLoading] = useState(false); // Get the welcome.png belonging to current user);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const edit = async () => {
    setLoading(true);
    let computer = {
      name: editedName,
      id: code,
    };
    let result = await editComputer(computer);
    if (result.success) {
      let result = await getComputers();
      setMachines(result);
      setModalVisible(false);
      alert("Operation was successfull !!");
      setLoading(false);
    } else {
      setLoading(false);
      alert(result.msg);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 500,
          marginTop: isKeyboardVisible ? 50 : 500,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Edit Name</Text>
        <View
          style={{
            backgroundColor: "#ccc",
            padding: 5,
            paddingLeft: 10,
            width: "60%",
            borderRadius: 10,
            marginBottom: 30,
            marginTop: 20,
          }}
        >
          <TextInput
            value={editedName}
            onChangeText={value => setEditedName(value)}
          />
        </View>
        <TouchableOpacity
          onPress={edit}
          style={{
            backgroundColor: "orange",
            width: "60%",
            alignItems: "center",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Text style={{ color: "white" }}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#ccc",
            width: "60%",
            alignItems: "center",
            borderRadius: 20,
            padding: 10,
            marginTop: 10,
          }}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
        {loading && (
          <LinearProgress color="#0b406d" style={{ marginTop: 70 }} />
        )}
      </View>
    </Modal>
  );
};
