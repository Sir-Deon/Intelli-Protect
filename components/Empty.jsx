import React from "react";
import { View, Text, Image } from "react-native";

const Empty = ({ image, text }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={image} style={{ height: 250, width: 250 }} />
      <Text style={{ color: "#0b406d", marginTop: 10, textAlign: "center" }}>
        {text}
      </Text>
    </View>
  );
};

export default Empty;
