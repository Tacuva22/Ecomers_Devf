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
