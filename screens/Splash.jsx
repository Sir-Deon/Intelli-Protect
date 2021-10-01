import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";

export default function Splash() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{ flexGrow: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Image source={require("../assets/logo2.png")} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 15 }}>Loading...</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
