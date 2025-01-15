import axios from "axios";
import { API } from "../utils/constants";

if (!API) {
  throw new Error("API URL not found");
}

// Fetch users
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API}/users`);
    return response.data;
  } catch (error) {
    console.log("Error fetching users", error);
    throw error;
  }
};

// Fetch a user
export const getUser = async (id) => {
  try {
    const response = await axios.get(`${API}/users/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching user", error);
    throw error;
  }
};

export const getUserByCid = async (cid: string) => {
  const response = await axios.get(`${API}/users?cid=${cid}`);
  return response.data;
};

// Create a user
export const createUser = async (user) => {
  try {
    const response = await axios.post(`${API}/users`, user);
    return response;
  } catch (error) {
    console.log("Error creating user", error);
    throw error;
  }
};

// Edit a user
export const updateUser = async (user) => {
  try {
    const response = await axios.put(`${API}/users/${user.id}`, user);
    return response;
  } catch (error) {
    console.log("Error editing user", error);
    throw error;
  }
};

// Delete a user
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API}/users/${id}`);
    return response;
  } catch (error) {
    console.log("Error deleting user", error);
    throw error;
  }
};
