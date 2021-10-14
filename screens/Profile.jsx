import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { AuthContext } from "../context";
const menu = [
  {
    icon: "pencil",
    title: "Edit Profile",
    route: "Edit Profile",
  },
  {
    icon: "question",
    title: "Help",
    route: "Help",
  },
  {
    icon: "star",
    title: "Rate this app",
  },
  {
    icon: "sign-out",
    action: "logout",
    title: "Logout",
  },
  {
    icon: "info-circle",
    title: "About Us",
    route: "About",
  },
];

export default function Profile({ navigation }) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    (async () => {
      let email = await AsyncStorage.getItem("email");
      setEmail(email);
    })();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Avatar.Icon
        size={80}
        icon="account"
        style={{ backgroundColor: "#0b406d", marginTop: 20 }}
      />
      <Text>{email}</Text>
      <View
        style={{
          flex: 1,
          backgroundColor: "#eee",
          width: "100%",
          marginTop: 40,
          padding: 20,
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        {menu.map((item, index) => (
          <ProfileItem
            key={index}
            icon={item.icon}
            text={item.title}
            route={item.route}
            action={item.action}
            navigation={navigation}
          />
        ))}
      </View>
    </View>
  );
}

const ProfileItem = ({ icon, text, route, navigation, action }) => {
  const { logOut } = useContext(AuthContext);

  const router = () => {
    if (route) {
      navigation.navigate(route);
    }
  };
  return (
    <TouchableOpacity
      onPress={action === "logout" ? logOut : router}
      style={{
        padding: 10,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        flexDirection: "row",
        paddingTop: 20,
      }}
    >
      <View style={{ flexGrow: 1, flexDirection: "row" }}>
        <Icon name={icon} size={18} />
        <Text style={{ marginLeft: 10 }}> {text} </Text>
      </View>
      <Icon name="chevron-right" size={15} />
    </TouchableOpacity>
  );
};
