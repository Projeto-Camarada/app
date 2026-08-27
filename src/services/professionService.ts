import { api } from "./api";

export async function getProfessions() {
    const response = await api.get("/professions");

    return response.data;
}