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
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, sint.
        Porro libero ipsam soluta laudantium maxime, error eos quibusdam ratione
        delectus nobis, quidem illum rem quasi excepturi consequatur iste!
        Laboriosam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ducimus, sint. Porro libero ipsam soluta laudantium maxime, error eos
        quibusdam ratione delectus nobis, quidem illum rem quasi excepturi
        consequatur iste! Laboriosam!
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, sint.
        Porro libero ipsam soluta laudantium maxime, error eos quibusdam ratione
        delectus nobis, quidem illum rem quasi excepturi consequatur iste!
        Laboriosam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Ducimus, sint. Porro libero ipsam soluta laudantium maxime, error eos
        quibusdam ratione delectus nobis, quidem illum rem quasi excepturi
        consequatur iste! Laboriosam!
      </Text>
      <Contact />
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
