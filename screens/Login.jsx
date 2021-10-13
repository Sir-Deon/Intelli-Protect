import React, { useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { AuthContext } from "../context";
import { LinearProgress } from "react-native-elements";

export default function Login({ navigation }) {
  const [pwdHidden, setPwdHidden] = useState(true);
  const navigate = route => {
    navigation.navigate(route);
  };
  return (
    <View style={{ backgroundColor: "#0b406d", flex: 1 }}>
      <View style={{ height: "25%", justifyContent: "center" }}>
        <Text
          style={{
            color: "#ccc",
            fontSize: 25,
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 50,
          }}
        >
          Welcome !
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 10,
          paddingTop: 50,
        }}
      >
        <LoginForm
          hidePwd={pwdHidden}
          setPwd={setPwdHidden}
          navigate={navigate}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const LoginForm = ({ hidePwd, setPwd, navigate }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Get the welcome.png belonging to current user);

  const auth = async () => {
    setLoading(true);
    if (email && password) {
      let user = {
        email: email,
        password: password,
      };
      setEmail("");
      setPassword("");
      let result = await login(user);
      if (result.success) {
      } else {
        alert(result.msg);
      }
      setLoading(false);
    } else {
      setLoading(false);
      alert("All fields are required !!");
    }
  };
  return (
    <>
      <Input
        placeholder="Email"
        value={email}
        leftIcon={
          <Icon
            style={{ marginRight: 5 }}
            name="user"
            size={24}
            color="#0b406d"
          />
        }
        onChangeText={value => setEmail(value)}
      />
      <Input
        placeholder="Password"
        value={password}
        leftIcon={
          <Icon
            style={{ marginRight: 5 }}
            name="lock"
            size={24}
            color="#0b406d"
          />
        }
        rightIcon={
          <TouchableOpacity onPress={() => setPwd(!hidePwd)}>
            <Icon name={hidePwd ? "eye-slash" : "eye"} size={24} color="#bbb" />
          </TouchableOpacity>
        }
        secureTextEntry={hidePwd}
        onChangeText={value => setPassword(value)}
      />

      <TouchableOpacity
        onPress={auth}
        style={{
          backgroundColor: "#0b406d",
          padding: 10,
          borderRadius: 20,
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 15 }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate("Sign Up")}
        style={{
          borderColor: "#0b406d",
          borderWidth: 1,
          padding: 10,
          borderRadius: 20,
          alignItems: "center",
          marginVertical: 15,
        }}
      >
        <Text style={{ color: "#0b406d", fontSize: 15 }}>Sign Up</Text>
      </TouchableOpacity>
      {loading && <LinearProgress color="#0b406d" style={{ marginTop: 100 }} />}
    </>
  );
};
