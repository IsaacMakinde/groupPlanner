import axios from "axios";
const API_BASE_URL = `http://localhost:3000`;

// Fetch users
export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.log("Error fetching users", error);
    throw error;
  }
};

// Create a user
export const createUser = async (user) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, user);
    return response;
  } catch (error) {
    console.log("Error creating user", error);
    throw error;
  }
};

// Edit a user
export const updateUser = async (user) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/${user.id}`, user);
    return response;
  } catch (error) {
    console.log("Error editing user", error);
    throw error;
  }
};

// Delete a user
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users/${id}`);
    return response;
  } catch (error) {
    console.log("Error deleting user", error);
    throw error;
  }
};
