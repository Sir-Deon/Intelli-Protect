import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function MachineItem({ name }) {
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
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const Edit = ({ name, modalVisible, setModalVisible }) => {
  const [editedName, setEditedName] = useState(name);
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 500,
          marginTop: 500,
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
      </View>
    </Modal>
  );
};
