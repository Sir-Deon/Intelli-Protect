import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Deleter from "./Deleter";

const HiddenActions = ({ data, setWebsites }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          marginLeft: "85%",
          width: 50,
          height: "70%",
          backgroundColor: "white",
          padding: 5,
          borderRadius: 20,
          marginTop: 12,
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
        setWebsites={setWebsites}
        action={"site"}
      />
    </View>
  );
};

export default HiddenActions;
