import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStackScreen from "./routes/AuthStack";
import TabScreen from "./routes/Tabs";
import Splash from "./screens/Splash";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "react-native-elements";
import { Provider as PaperProvider } from "react-native-paper";
const RootStack = createStackNavigator();

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator>
    {userToken ? (
      <RootStack.Screen
        options={{ headerShown: false }}
        name="App"
        component={TabScreen}
      />
    ) : (
      <RootStack.Screen
        options={{ headerShown: false }}
        name="Auth"
        component={AuthStackScreen}
      />
    )}
  </RootStack.Navigator>
);

export default function App() {
  const [userToken, setUserToken] = useState("efskjgd");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  if (isLoading) {
    return <Splash />;
  }
  return (
    <ThemeProvider>
      <PaperProvider>
        <NavigationContainer>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </PaperProvider>
    </ThemeProvider>
  );
}
