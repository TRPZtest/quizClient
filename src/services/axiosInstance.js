import axios from "axios";



export const getToken = () => localStorage.getItem("token");

const getAuthorizationHeader = () => `Bearer ${getToken()}`;

export const axiosInstance = axios.create({
    headers: { Authorization: getAuthorizationHeader() },
});