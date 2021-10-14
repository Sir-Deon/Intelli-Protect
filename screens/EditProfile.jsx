import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearProgress } from "react-native-elements";
import { editProfile } from "../config/controller";

export default function EditProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      let email = await AsyncStorage.getItem("email");
      setEmail(email);
    })();
  }, []);
  const edit = async () => {
    setLoading(true);
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        let user = {
          email: email,
          password: password,
        };

        setPassword("");
        setConfirmPassword("");
        let result = await editProfile(user);
        if (result.success) {
          await AsyncStorage.setItem("email", result.email);
          alert("Operation was successfull !!");
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
    <View style={{ padding: 20 }}>
      <TextInput
        value={email}
        style={{ marginTop: 20 }}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Password"
        style={{ marginTop: 10 }}
        value={password}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Confirm Password"
        style={{ marginTop: 10 }}
        value={confirmPassword}
        onChangeText={value => setConfirmPassword(value)}
        secureTextEntry={true}
      />

      <TouchableOpacity
        onPress={edit}
        style={{
          backgroundColor: "#0b406d",
          padding: 10,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
      </TouchableOpacity>
      {loading && <LinearProgress color="#0b406d" style={{ marginTop: 100 }} />}
    </View>
  );
}
