// Check permissions
if (hasPermission === null) {
  return (
    <View>
      <Text>Asking for Camera permission !!</Text>
    </View>
  );
}

if (hasPermission === false) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>No access to camera</Text>
      <TouchableOpacity
        onPress={() => askForCameraPermission()}
        style={{
          backgroundColor: "orange",
          width: "80%",
          alignItems: "center",
          borderRadius: 20,
          padding: 10,
        }}
      >
        <Text style={{ color: "white" }}> Ask for Permission </Text>
      </TouchableOpacity>
    </View>
  );
}
