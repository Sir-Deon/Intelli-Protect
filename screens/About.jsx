import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function About() {
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 25 }}>Intelli Protect</Text>
      <Text></Text>
      <Text>
        Intelli Protect was conceived is a tool which helps system admins
        control content consumed by others.This project was conceived by Eng
        Denzel and Eng Deon Achuo built the entire system.
      </Text>
    </View>
  );
}

const Contact = () => (
  <View
    style={{
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text style={{ fontWeight: "bold", color: "#0b406d", fontSize: 15 }}>
      Contact
    </Text>
    <View style={{ flexDirection: "row", marginTop: 10 }}>
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 50,
        }}
      >
        <Icon name="facebook" size={24} color="#0b406d" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 50,
          marginLeft: 10,
        }}
      >
        <Icon name="linkedin" size={24} color="#0b406d" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 50,
          marginLeft: 20,
        }}
      >
        <Icon name="whatsapp" size={24} color="#0b406d" />
      </TouchableOpacity>
    </View>
  </View>
);
