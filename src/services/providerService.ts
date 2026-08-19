import axios from "axios";
import { api } from "./api";

export async function saveProvider(
    cpfCnpj: string,
    userId: string
) {
    try {
        const response = await api.post(`/providers/${userId}`, {cpfCnpj});
    
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

export async function updateProvider(
    data: {
        cpfCnpj: string,
        bio: string,
        experience: string
    }, 
    id: string
) {
    // const response = await api.put(`/provider/${id}`);

    // return response.data;
}
