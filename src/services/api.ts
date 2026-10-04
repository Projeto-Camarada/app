import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.15.6:8080",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});


api.interceptors.request.use(async config => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});