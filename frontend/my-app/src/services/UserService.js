// src/services/userService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/admin/";

export const createUser = async (userData) => {
  const response = await axios.post(API_URL, userData);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updateUser = async (id, userData) => {
  const response = await axios.put(`${API_URL}${id}`, userData);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}${id}`);
  return response.data;
};

const userService = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};

export default userService;
