import axios from "axios";
import { API } from "../utils/constants";

if (!API) {
  throw new Error("API URL not found");
}

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API}/categories`);
    return response.data;
  } catch (error) {
    console.log("Error fetching categories", error);
    throw error;
  }
};

export const getCategory = async (id: string) => {
  try {
    const response = await axios.get(`${API}/categories/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching category", error);
    throw error;
  }
};

export const createCategory = async (category) => {
  try {
    const response = await axios.post(`${API}/categories`, category);
    return response;
  } catch (error) {
    console.log("Error creating category", error);
    throw error;
  }
};

export const updateCategory = async (category) => {
  try {
    const toSend = {
      name: category.name,
      description: category.description,
    };

    const response = await axios.put(
      `${API}/categories/${category.id}`,
      toSend
    );
    return response;
  } catch (error) {
    console.log("Error editing category", error);
    throw error;
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${API}/categories/${id}`);
    return response;
  } catch (error) {
    console.log("Error deleting category", error);
    throw error;
  }
};
