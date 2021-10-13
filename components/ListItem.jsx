import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput, Switch, RadioButton } from "react-native-paper";
import { LinearProgress } from "react-native-elements";
import { editSite, getSites } from "../config/controller";

const ListItem = ({ id, name, block, setWebsites }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [blocked, setUnblock] = useState(block);
  return (
    <View style={styles.item}>
      <View style={{ flexGrow: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Icon name="globe" size={24} />
          <Text style={{ marginHorizontal: 10, fontSize: 16, marginTop: -2 }}>
            {name}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Icon name="laptop" size={15} />
          <Icon
            name={blocked ? "ban" : "check"}
            size={15}
            color={blocked ? "red" : "green"}
            style={{ marginLeft: 5 }}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="edit" size={25} />
      </TouchableOpacity>
      <EditWebsites
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        id={id}
        name={name}
        block={block}
        setWebsites={setWebsites}
        setUnblock={setUnblock}
      />
    </View>
  );
};

const EditWebsites = ({
  modalVisible,
  setModalVisible,
  id,
  name,
  block,
  setWebsites,
  setUnblock,
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(block);
  const [checked, setChecked] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [loading, setLoading] = useState(false);
  const [siteName, setName] = useState(name);
  const edit = async () => {
    setLoading(true);
    let site = {
      id: id,
      name: siteName,
      blocked: isSwitchOn,
    };
    setUnblock(isSwitchOn);
    let result = await editSite(site);
    if (result.success) {
      setLoading(false);
      let result = await getSites();
      setWebsites(result);
      setModalVisible(false);
      alert("Operation was successfull !!");
    } else {
      setLoading(false);
      alert(result.msg);
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
          Edit Website
        </Text>

        <TextInput
          style={{ marginTop: 20 }}
          placeholder="Website Name"
          value={siteName}
          onChangeText={value => setName(value)}
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
            onPress={edit}
            style={{
              flexDirection: "row",
              padding: 10,
              backgroundColor: "orange",
              width: "90%",
              alignItems: "center",
              justifyContent: "center",
            }}
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
              marginTop: 20,
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
          {loading && (
            <LinearProgress color="#0b406d" style={{ marginTop: 70 }} />
          )}
        </View>
      </ScrollView>
    </Modal>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 0.1,
    flexDirection: "row",
  },
});
