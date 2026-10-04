import axios from "axios";
import { api } from "./api";

export async function getRequests() {
    try {
        const response = await api.get(`/service-requests`);
    
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
}

