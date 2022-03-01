import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStackScreen from "./routes/AuthStack";
import TabScreen from "./routes/Tabs";
import Splash from "./screens/Splash";
import React, { useState, useEffect, useMemo } from "react";
import { ThemeProvider } from "react-native-elements";
import { Provider as PaperProvider } from "react-native-paper";
import { AuthContext } from "./context";
import { sign_up, log_out, log_In } from "./config/controller";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    (async () => {
      let token = await AsyncStorage.getItem("userToken");
      if (token) {
        setUserToken(token);
      } else {
        setUserToken(null);
      }
    })();
  }, []);

  const authContext = useMemo(() => {
    return {
      signUp: async user => {
        let result = await sign_up(user);
        if (result.success) {
          setUserToken(result.token);
        }
        return result;
      },
      login: async user => {
        let result = await log_In(user);
        if (result.success) {
          setUserToken(result.token);
        }
        return result;
      },
      logOut: async () => {
        await log_out();
        setUserToken("");
      },
    };
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <ThemeProvider>
        <PaperProvider>
          <NavigationContainer>
            <RootStackScreen userToken={userToken} />
          </NavigationContainer>
        </PaperProvider>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}
