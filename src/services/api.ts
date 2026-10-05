import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const api = axios.create({
    baseURL: "https://backend-0ver.onrender.com",
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