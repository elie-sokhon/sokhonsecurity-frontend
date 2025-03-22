import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api/";
export default API_URL;

export const fetchProducts = async () => {
    return axios.get(`${API_URL}products/`);
};

export const registerUser = async (username, email, password, full_name,phone_number) => {
    return axios.post(`${API_URL}register/`, { username, email, password, full_name, phone_number });
};

export const loginUser = async (username, password) => {
    return axios.post(`${API_URL}token/`, { username, password });
};

export const searchProducts = async (query) => {
    return axios.get(`${API_URL}products/?search=${query}`);
};

export const fetchProductDetails = async (productId) => {
    return axios.get(`${API_URL}products/${productId}/`);
};
