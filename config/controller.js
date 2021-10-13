import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "./configs";

axios.defaults.baseURL = baseUrl;

export const sign_up = async user => {
  try {
    let userData = await axios.post("/sign_up", user);
    if (userData.data.success) {
      await AsyncStorage.setItem("userToken", userData.data.token);
      await AsyncStorage.setItem("userId", userData.data.id);
    }
    return userData.data;
  } catch (error) {
    alert("Something went !!");
  }
};

export const log_In = async user => {
  try {
    let userData = await axios.post("/login", user);
    if (userData.data.success) {
      await AsyncStorage.setItem("userToken", userData.data.token);
      await AsyncStorage.setItem("userId", userData.data.id);
    }
    return userData.data;
  } catch (error) {
    alert("Something went !!");
  }
};

export const log_out = async () => {
  await AsyncStorage.removeItem("userToken");
  await AsyncStorage.removeItem("userId");
};

export const registerComputer = async computer => {
  let id = await AsyncStorage.getItem("userId");
  let pc = {
    id: id,
    code: computer.code,
    name: computer.name,
  };
  let result = await axios.post("/auth_desk", pc);
  return result.data;
};

export const getComputers = async () => {
  let userId = await AsyncStorage.getItem("userId");
  let result = await axios.get(`/get_computers/${userId}`);
  return result.data;
};

export const editComputer = async computer => {
  let userId = await AsyncStorage.getItem("userId");
  let result = await axios.put(`/edit_computer/${userId}`, computer);
  return result.data;
};

export const deleteComputer = async id => {
  let userId = await AsyncStorage.getItem("userId");
  let result = await axios.delete(`/delete_computer/${userId}/${id}`);
  return result.data;
};

// Websites

export const getSites = async () => {
  let userId = await AsyncStorage.getItem("userId");
  let result = await axios.get(`/get_sites/${userId}`);
  return result.data;
};

export const blockSite = async site => {
  let userId = await AsyncStorage.getItem("userId");
  let website = {
    userId: userId,
    blocked: site.blocked,
    name: site.name,
  };
  let result = await axios.post("/block_site", website);
  return result.data;
};

export const editSite = async site => {
  let userId = await AsyncStorage.getItem("userId");
  let result = await axios.put(`/edit_site/${userId}`, site);
  return result.data;
};

export const deleteSite = async id => {
  let userId = await AsyncStorage.getItem("userId");
  let result = await axios.delete(`/delete_site/${userId}/${id}`);
  return result.data;
};
