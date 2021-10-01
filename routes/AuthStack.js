import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      options={{ headerShown: false }}
      name="Login"
      component={Login}
    />
    <AuthStack.Screen
      options={{ headerShown: false }}
      name="Sign Up"
      component={SignUp}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
