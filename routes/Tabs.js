import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SiteStackScreen from "./SiteStack";
import ProfileStackScreen from "./ProfileStack";
import MachineStackScreen from "./MachineStack";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Tabs = createMaterialBottomTabNavigator();

const TabScreen = () => (
  <Tabs.Navigator barStyle={{ backgroundColor: "#fff" }} activeColor="#0b406d">
    <Tabs.Screen
      name="Web"
      options={() => {
        return {
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color }) => (
            <Icon color={color} name="globe" size={24} />
          ),
        };
      }}
      component={SiteStackScreen}
    />
    <Tabs.Screen
      name="Computers"
      options={() => {
        return {
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color }) => (
            <Icon color={color} name="laptop" size={24} />
          ),
        };
      }}
      component={MachineStackScreen}
    />
    <Tabs.Screen
      name="User"
      options={() => {
        return {
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ color }) => (
            <Icon color={color} name="user" size={24} />
          ),
        };
      }}
      component={ProfileStackScreen}
    />
  </Tabs.Navigator>
);

export default TabScreen;
