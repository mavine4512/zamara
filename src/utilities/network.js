import DeviceInfo from "react-native-device-info";
import { Platform, ToastAndroid, Alert } from "react-native";
// import AsyncStorage from "@react-native-community/async-storage";

export const DEVICE_ID = DeviceInfo.getUniqueId();
export const OS_VERSION = Platform.OS === "android" ? "1.0.1" : "1.0.1";
import { BaseUrl as baseUrl } from "./url";
import axios from "axios";

export const API_LOGIN = "/docs/auth";
export const API_USETYPE = "common/userlist";

export const API_LOGOUT = "login/logout";
export const API_DASHBOARD = "dashboard/index";

function networkConfig(action, endpoint = "", data, token = "") {
  const api = axios.create({
    baseURL: baseUrl,
  });
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  switch (action) {
    case "get": {
      return api.get(endpoint);
    }
    case "post": {
      return api.post(endpoint, data);
    }
    default: {
      return null;
    }
  }
}

export const callGet = (url) => {
  return networkConfig("get", url, undefined, "");
};

export const callPost = (url, data) => {
  return networkConfig("post", url, data);
};
