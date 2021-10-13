import React, { useEffect, useState } from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { StatusBar } from "expo-status-bar";
import Fab from "../components/Fab";
import HiddenActions from "../components/HiddenActions";
import ListItem from "../components/ListItem";
import Empty from "../components/Empty";
import { TextInput, Switch, RadioButton } from "react-native-paper";
import { blockSite, getSites } from "../config/controller";
import { LinearProgress } from "react-native-elements";

export default function Sites({ navigation }) {
  const [websites, setWebsites] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Get the welcome.png belonging to current user);

  useEffect(() => {
    (async () => {
      setLoading(true);
      let result = await getSites();
      setWebsites(result);
      setLoading(false);
    })();
  }, []);

  if (!loading && websites.length <= 0) {
    return (
      <>
        <Empty
          text="No website to show !!"
          image={require("../assets/no-data.png")}
        />
        <Fab setModalVisible={setModalVisible} />

        <AddWebsites
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </>
    );
  }

  return (
    <>
      {websites.length > 0 && (
        <SwipeListView
          showsVerticalScrollIndicator={false}
          style={{ padding: 10 }}
          keyExtractor={(item, index) => `${index}`}
          data={websites}
          renderItem={data => (
            <ListItem
              name={data.item.name}
              block={data.item.blocked}
              id={data.item.id}
              navigation={navigation}
              setModalVisible={setModalVisible}
              setWebsites={setWebsites}
            />
          )}
          renderHiddenItem={data => (
            <HiddenActions data={data.item} setWebsites={setWebsites} />
          )}
          leftOpenValue={0}
          rightOpenValue={-70}
        />
      )}
      <Fab setModalVisible={setModalVisible} />
      {loading && (
        <View style={{ flex: 1 }}>
          <View style={{ flexGrow: 1 }}></View>
          <Text style={{ textAlign: "center", marginTop: -200 }}>
            Loading...
          </Text>
          <LinearProgress color="#0b406d" style={{ marginTop: 100 }} />
        </View>
      )}
      <AddWebsites
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setWebsites={setWebsites}
      />
      <StatusBar style="auto" />
    </>
  );
}

const AddWebsites = ({ modalVisible, setModalVisible, setWebsites }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [siteName, setSiteName] = useState("");
  const block = async () => {
    setLoading(true);
    let site = { name: siteName, blocked: isSwitchOn };
    let result = await blockSite(site);
    if (result.success) {
      setLoading(false);
      let result = await getSites();
      setWebsites(result);
      alert("Operation was successfull !!");
      setModalVisible(false);
      setSiteName("");
    } else {
      setLoading(false);
      alert(result.msg);
      setModalVisible(false);
      setSiteName("");
    }
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <ScrollView style={{ flex: 1, padding: 10 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
          }}
        >
          Add Website
        </Text>

        <TextInput
          style={{ marginTop: 20 }}
          placeholder="Website Name"
          value={siteName}
          onChangeText={value => setSiteName(value)}
        />

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={{ fontSize: 16 }}>Block Website</Text>
          <Switch
            color="red"
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
            style={{ marginHorizontal: 10, marginTop: -5 }}
          />
        </View>

        <View style={{ flex: 1, alignItems: "center", marginVertical: 20 }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              padding: 10,
              backgroundColor: "orange",
              width: "90%",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={block}
          >
            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 10,
                marginTop: -5,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              padding: 10,
              backgroundColor: "#ccc",
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
            onPress={() => setModalVisible(false)}
          >
            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 10,
                marginTop: -5,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
        {loading && (
          <LinearProgress color="#0b406d" style={{ marginTop: 70 }} />
        )}
      </ScrollView>
    </Modal>
  );
};
