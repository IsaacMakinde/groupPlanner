import axios from "axios";
// import { API } from "./apiConfig";

const API = "https://my-planner-api-51759a684968.herokuapp.com/api";

if (!API) {
  console.log(API);
  throw new Error("API URL not found");
}
// Fetch events
export const getEvents = async () => {
  try {
    const response = await axios.get(`${API}/events`);
    console.log("Events get  fetched", response.data);
    return response.data;
  } catch (error) {
    console.log("Error fetching events", error);

    throw error;
  }
};

export const getEvent = async (id) => {
  try {
    const response = await axios.get(`${API}/events/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching event", error);
    throw error;
  }
};

// Create an event
export const createEvent = async (event) => {
  try {
    const response = await axios.post(`${API}/events`, event);
    return response;
  } catch (error) {
    console.log("Error creating event", error);
    throw error;
  }
};

//  Edit an event
export const updateEvent = async (event) => {
  try {
    const toSend = {
      title: event.title,
      description: event.description,
      date: event.date,
      venue: event.venue,
      category: event.category,
      pricing: event.pricing,
    };

    console.log("toSend", toSend);

    const response = await axios.put(`${API}/events/${event.id}`, toSend);
    console.log("Event updated", event);
    return response;
  } catch (error) {
    console.log("Error editing event", error);
    throw error;
  }
};

// Delete an event
export const deleteEvent = async (id) => {
  try {
    const response = await axios.delete(`${API}/events/${id}`);
    return response;
  } catch (error) {
    console.log("Error deleting event", error);
    throw error;
  }
};
