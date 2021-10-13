import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Deleter from "./Deleter";

export default function DeleteMachine({ data, setMachines }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          marginLeft: "85%",
          width: 40,
          height: "80%",
          padding: 5,
          borderRadius: 20,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon style={{ marginTop: 5 }} name="trash" size={24} color="red" />
      </TouchableOpacity>
      <Deleter
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={data}
        setMachines={setMachines}
        action={"machine"}
      />
    </View>
  );
}
