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

//  Edit an event
export const updateEvent = async (event) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/events/${event.id}`,
      event
    );
    return response;
  } catch (error) {
    console.log("Error editing event", error);
    throw error;
  }
};

// Delete an event
export const deleteEvent = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/events/${id}`);
    return response;
  } catch (error) {
    console.log("Error deleting event", error);
    throw error;
  }
};
