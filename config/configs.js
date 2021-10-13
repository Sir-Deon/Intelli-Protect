import AsyncStorage from "@react-native-async-storage/async-storage";
export const baseUrl = "https://intelli-protect.herokuapp.com/api";
export const token = AsyncStorage.getItem("userToken");
