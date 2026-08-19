import { api } from "./api";

export async function saveProvider(data: {
    cpfCnpj: string,
}) {
    const response = await api.post(`/provider`);

    return response.data;
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
