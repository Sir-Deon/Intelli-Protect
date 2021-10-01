import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import Sites from "../screens/Sites";
import WebsiteDetail from "../screens/WebsiteDetail";
const SiteStack = createStackNavigator();

const SiteStackScreen = () => (
  <SiteStack.Navigator
    screenOptions={() => ({
      gestureEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    })}
  >
    <SiteStack.Screen
      options={{
        headerTitleStyle: {
          color: "#0b406d",
        },
      }}
      name="Websites"
      component={Sites}
    />
    <SiteStack.Screen
      options={{
        headerTitleStyle: {
          color: "#0b406d",
        },
        headerTintColor: "#0b406d",
      }}
      name="Website Detail"
      component={WebsiteDetail}
    />
  </SiteStack.Navigator>
);

export default SiteStackScreen;
