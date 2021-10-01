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

const ListItem = ({ site }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [blocked, setUnblock] = useState(true);
  return (
    <View style={styles.item}>
      <View style={{ flexGrow: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Icon name="globe" size={24} />
          <Text style={{ marginHorizontal: 10, fontSize: 16, marginTop: -2 }}>
            {site}
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Icon name="laptop" size={15} />
          <Text style={{ marginHorizontal: 10, fontSize: 10 }}>Computer 1</Text>
          <Icon
            name={blocked ? "ban" : "check"}
            size={15}
            color={blocked ? "red" : "green"}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="edit" size={25} />
      </TouchableOpacity>
      <EditWebsites
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
    </View>
  );
};

const EditWebsites = ({ modalVisible, setModalVisible }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [checked, setChecked] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

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
