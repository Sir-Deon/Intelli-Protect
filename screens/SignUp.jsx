import React, { useState, useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { AuthContext } from "../context";
import { LinearProgress } from "react-native-elements";

export default function SignUp({ navigation }) {
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
          Sign Up!
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
        <SignUpForm navigate={navigate} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const SignUpForm = ({ navigate }) => {
  const [pwdHidden, setPwdHidden] = useState(true);
  const { signUp } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = async () => {
    setLoading(true);
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        let user = {
          email: email,
          password: password,
        };
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        let result = await signUp(user);
        if (result.success) {
        } else {
          alert(result.msg);
        }
        setLoading(false);
      } else {
        setLoading(false);
        alert("Passwords do not match !!");
      }
    } else {
      setLoading(false);
      alert("All fields are required !!");
    }
  };

  return (
    <>
      <Input
        placeholder="Email"
        leftIcon={
          <Icon
            style={{ marginRight: 5 }}
            name="user"
            size={24}
            color="#0b406d"
          />
        }
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <Input
        placeholder="Password"
        leftIcon={
          <Icon
            style={{ marginRight: 5 }}
            name="lock"
            size={24}
            color="#0b406d"
          />
        }
        rightIcon={
          <TouchableOpacity onPress={() => setPwdHidden(!pwdHidden)}>
            <Icon
              name={pwdHidden ? "eye-slash" : "eye"}
              size={24}
              color="#bbb"
            />
          </TouchableOpacity>
        }
        secureTextEntry={pwdHidden}
        value={password}
        onChangeText={value => setPassword(value)}
      />

      <Input
        placeholder="Confirm Password"
        leftIcon={
          <Icon
            style={{ marginRight: 5 }}
            name="lock"
            size={24}
            color="#0b406d"
          />
        }
        rightIcon={
          <TouchableOpacity onPress={() => setPwdHidden(!pwdHidden)}>
            <Icon
              name={pwdHidden ? "eye-slash" : "eye"}
              size={24}
              color="#bbb"
            />
          </TouchableOpacity>
        }
        secureTextEntry={pwdHidden}
        value={confirmPassword}
        onChangeText={value => setConfirmPassword(value)}
      />
      <TouchableOpacity
        onPress={() => auth()}
        style={{
          backgroundColor: "#0b406d",
          padding: 10,
          borderRadius: 20,
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 15 }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigate("Login")}
        style={{
          borderColor: "#0b406d",
          borderWidth: 1,
          padding: 10,
          borderRadius: 20,
          alignItems: "center",
          marginVertical: 15,
        }}
      >
        <Text style={{ color: "#0b406d", fontSize: 15 }}>Login</Text>
      </TouchableOpacity>
      {loading && <LinearProgress color="#0b406d" style={{ marginTop: 100 }} />}
    </>
  );
};
