import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.15.6:8080",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});