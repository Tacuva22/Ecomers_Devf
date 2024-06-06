// src/services/api.js
import axios from 'axios';

const API_URL = 'https://ecomerce-master.herokuapp.com/api/v1';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/item`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/item/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const registerUser = async (email, password, name) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password, name });
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};
