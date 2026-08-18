import { api } from "./api";

export async function login(
    phone: string,
    password: string
) {
    const response = await api.post("/auth/login", {
        phone,
        password
    })

    return response.data;
};

export async function register(data: {
    name: string,
    email: string,
    password: string,
    phone: string
}) {
    const response = await api.post("/auth/register", data);

    return response.data;
};