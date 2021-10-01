import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

export default function EditProfile() {
  return (
    <View style={{ padding: 20 }}>
      <TextInput value="user@dev.com" style={{ marginTop: 20 }} />
      <TextInput placeholder="Password" style={{ marginTop: 10 }} />
      <TextInput placeholder="Confirm Password" style={{ marginTop: 10 }} />
      <TouchableOpacity
        style={{
          backgroundColor: "#0b406d",
          padding: 10,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
