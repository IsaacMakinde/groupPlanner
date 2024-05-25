import axios from "axios";
const API_BASE_URL = `http://localhost:3000`;

// Fetch events
export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.log("Error fetching events", error);
    throw error;
  }
};

// Create an event
export const createEvent = async (event) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/events`, event);
    return response;
  } catch (error) {
    console.log("Error creating event", error);
    throw error;
  }
};
