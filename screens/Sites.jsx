import React, { useEffect, useState } from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { StatusBar } from "expo-status-bar";
import Fab from "../components/Fab";
import HiddenActions from "../components/HiddenActions";
import ListItem from "../components/ListItem";
import Empty from "../components/Empty";
import { TextInput, Switch, RadioButton } from "react-native-paper";
const sites = ["youtube.com ", "remove.bg ", "youtube.com "];

export default function Sites({ navigation }) {
  const [websites, setWebsites] = useState(sites);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {websites.length > 0 ? (
        <SwipeListView
          showsVerticalScrollIndicator={false}
          style={{ padding: 10 }}
          keyExtractor={(item, index) => `${index}`}
          data={websites}
          renderItem={data => (
            <ListItem
              site={data.item}
              navigation={navigation}
              setModalVisible={setModalVisible}
            />
          )}
          renderHiddenItem={data => <HiddenActions data={data} />}
          leftOpenValue={0}
          rightOpenValue={-70}
        />
      ) : (
        <Empty
          text="No website to show !!"
          image={require("../assets/no-data.png")}
        />
      )}
      <Fab setModalVisible={setModalVisible} />

      <AddWebsites
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <StatusBar style="auto" />
    </>
  );
}

const AddWebsites = ({ modalVisible, setModalVisible }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [checked, setChecked] = React.useState(false);

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

        <TextInput style={{ marginTop: 20 }} placeholder="Website Name" />
        {[1, 2, 3].map((computer, index) => (
          <View style={{ flexDirection: "row", marginTop: 10 }} key={index}>
            <Text style={{ fontSize: 16, marginTop: 5 }}>
              Computer {computer}
            </Text>
            <RadioButton
              value="first"
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
            />
          </View>
        ))}

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
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => setModalVisible(false)}
          >
            <Text
              style={{
                fontSize: 15,
                marginHorizontal: 10,
                marginTop: -5,
                color: "white",
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
};
