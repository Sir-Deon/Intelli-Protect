import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Machines from "../screens/Machines";

const MachineStack = createStackNavigator();

const MachineStackScreen = () => (
  <MachineStack.Navigator
    screenOptions={() => ({
      gestureEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    })}
  >
    <MachineStack.Screen
      options={{
        headerTitleStyle: {
          color: "#0b406d",
        },
      }}
      name="Machines"
      component={Machines}
    />
  </MachineStack.Navigator>
);

export default MachineStackScreen;
