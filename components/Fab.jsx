import { FAB } from "react-native-paper";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Deleter from "./Deleter";
const Fab = ({ setModalVisible }) => {
  const [state, setState] = useState({ open: false });
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  return (
    <>
      <FAB.Group
        color="white"
        visible={true}
        fabStyle={{ backgroundColor: "#0b406d" }}
        style={styles.fab}
        open={open}
        icon={open ? "close" : "plus"}
        actions={[
          {
            color: "red",
            icon: "delete",
            label: "Delete All Websites",
            onPress: () => setModalDeleteVisible(true),
          },
          {
            icon: "earth",
            color: "#0b406d",
            label: "Add Website",
            onPress: () => setModalVisible(true),
            small: false,
          },
        ]}
        onStateChange={onStateChange}
        onPress={() => {
          if (open) {
            // do something if the speed dial is open
          }
        }}
      />
      <Deleter
        modalVisible={modalDeleteVisible}
        setModalVisible={setModalDeleteVisible}
      />
    </>
  );
};

export default Fab;

const styles = StyleSheet.create({
  fab: {
    height: "100%",
  },
});
