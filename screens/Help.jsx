import React from "react";
import { View, Text } from "react-native";

function Help() {
  return (
    <View
      style={{
        padding: 10,
        fontSize: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Getting with this Intelli Protect? </Text>
      <Text>To check if intelli protect is running on the PC</Text>
      <View
        style={{
          padding: 10,
          backgroundColor: "white",
          borderRadius: 10,
          width: "90%",
          marginTop: 10,
        }}
      >
        <Text>http://localhost:5001</Text>
      </View>
    </View>
  );
}

export default Help;
