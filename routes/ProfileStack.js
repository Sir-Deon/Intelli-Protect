import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import About from "../screens/About";
import Help from "../screens/Help";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={() => ({
      gestureEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    })}
  >
    <ProfileStack.Screen
      options={{
        headerTitleStyle: {
          color: "#0b406d",
        },
      }}
      name="Profile"
      component={Profile}
    />
    <ProfileStack.Screen
      options={{
        headerTitleStyle: {
          color: "#0b406d",
        },
      }}
      name="Edit Profile"
      component={EditProfile}
    />
    <ProfileStack.Screen
      options={{
        headerTitleStyle: {
          color: "#0b406d",
        },
      }}
      name="About"
      component={About}
    />
    <ProfileStack.Screen
      options={{
        headerTitleStyle: {
          color: "#0b406d",
        },
      }}
      name="Help"
      component={Help}
    />
  </ProfileStack.Navigator>
);

export default ProfileStackScreen;
