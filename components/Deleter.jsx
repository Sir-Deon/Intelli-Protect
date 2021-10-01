import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

export default function Deleter({ modalVisible, setModalVisible }) {
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 500,
          marginTop: 600,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, marginBottom: 10 }}>
          Are you sure you want to delete !!
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "orange",
            width: "80%",
            alignItems: "center",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Text style={{ color: "white" }}>Delete</Text>
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
            setModalVisible(false);
          }}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
