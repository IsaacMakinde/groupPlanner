import axios from "axios";
import { API } from "./apiConfig";
import Event from "../interfaces/EventInter";

if (!API) {
  throw new Error("API URL not found");
}

export const getEvents = async () => {
  try {
    const response = await axios.get(`${API}/events`);
    return response.data;
  } catch (error) {
    console.log("Error fetching events", error);
    throw error;
  }
};

export const getEvent = async (id: string) => {
  try {
    const response = await axios.get(`${API}/events/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching event", error);
    throw error;
  }
};

export const createEvent = async (event: Event) => {
  try {
    const response = await axios.post(`${API}/events`, event);
    return response;
  } catch (error) {
    console.log("Error creating event", error);
    throw error;
  }
};

export const updateEvent = async (event) => {
  try {
    const toSend = {
      title: event.title,
      host: event.host,
      clerk_id: event.clerk_id,
      date: event.date,
      venue: event.venue,
      place_id: event.place_id,
      description: event.description,
      category: event.category,
      pricing: event.pricing,
      guests: event.guests,
    };

    const response = await axios.put(`${API}/events/${event.id}`, toSend);
    console.log("eventAAA", response);
    return response;
  } catch (error) {
    console.log("Error editing event", error);
    throw error;
  }
};

export const deleteEvent = async (id: string) => {
  try {
    const response = await axios.delete(`${API}/events/${id}`);
    return response;
  } catch (error) {
    console.log("Error deleting event", error);
    throw error;
  }
};
