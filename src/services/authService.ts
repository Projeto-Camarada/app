import axios from "axios";
import { api } from "./api";

export async function login(
    phone: string,
    password: string
) {
    try {
        const response = await api.post("/auth/login", {
            phone,
            password
        })

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw {
                code: error.response?.data?.code,
                message: error.response?.data?.message,
                status: error.response?.status,
            };
        }

        throw error;
    }
};

export async function register(data: {
    name: string,
    email: string,
    password: string,
    phone: string
}) {
    try {
        const response = await api.post("/auth/register", data);

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw {
                code: error.response?.data?.code,
                message: error.response?.data?.message,
                status: error.response?.status,
            };
        }

        throw error;
    }

};