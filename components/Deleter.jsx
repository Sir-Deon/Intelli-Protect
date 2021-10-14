import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import {
  deleteComputer,
  deleteSite,
  del_All,
  getComputers,
  getSites,
} from "../config/controller";
import { LinearProgress } from "react-native-elements";

export default function Deleter({
  modalVisible,
  setModalVisible,
  data,
  setMachines,
  setWebsites,
  action,
  deleteAll,
}) {
  const [loading, setLoading] = useState(false); // Get the welcome.png belonging to current user);

  const delete_PC = async () => {
    setLoading(true);
    if (action === "machine") {
      let result = await deleteComputer(data.code);
      if (result.success) {
        let result = await getComputers();
        setMachines(result);
        setLoading(false);
        setModalVisible(false);
        alert("Operation was successfull !!");
      }
    }
    if (action === "site") {
      let result = await deleteSite(data.id);
      if (result.success) {
        let result = await getSites();
        setWebsites(result);
        setLoading(false);
        setModalVisible(false);
        alert("Operation was successfull !!");
      }
    }
  };
  const delete_all = async () => {
    setLoading(true);
    let result = await del_All();
    if (result.success) {
      let result = await getSites();
      setWebsites(result);
      setLoading(false);
      setModalVisible(false);
      alert("Operation was successfull !!");
    }
  };
  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 500,
          marginTop: 600,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, marginBottom: 10 }}>
          Are you sure you want to delete !!
        </Text>
        <TouchableOpacity
          onPress={deleteAll ? delete_all : delete_PC}
          style={{
            backgroundColor: "orange",
            width: "80%",
            alignItems: "center",
            borderRadius: 20,
            padding: 10,
          }}
        >
          <Text style={{ color: "white" }}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#ccc",
            width: "80%",
            alignItems: "center",
            borderRadius: 20,
            padding: 10,
            marginTop: 20,
          }}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
        {loading && (
          <LinearProgress color="#0b406d" style={{ marginTop: 20 }} />
        )}
      </View>
    </Modal>
  );
}
