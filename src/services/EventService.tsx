import axios from "axios";
import { API } from "../utils/constants";
import Event from "../interfaces/EventInter";

if (!API) {
  throw new Error("API URL not found");
}

export const getEvents = async () => {
  const response = await axios.get(`${API}/events`);
  return response.data;
};

export const getEvent = async (id: string) => {
  const response = await axios.get(`${API}/events/${id}`);
  return response.data;
};

export const createEvent = async (event: Event) => {
  const response = await axios.post(`${API}/events`, event);
  return response;
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
      category_id: event.category_id,
      pricing: event.pricing,
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

export const getGuests = async (eventId: string) => {
  try {
    const response = await axios.get(`${API}/events/${eventId}/guests`);
    return response.data;
  } catch (error) {
    console.log("Error fetching guests", error);
    throw error;
  }
};

export const getGuest = async (eventId: string, userId: string) => {
  try {
    const response = await axios.get(
      `${API}/events/${eventId}/guests/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching guest", error);
    throw error;
  }
};

export const addGuest = async (eventId: string, userId: string) => {
  try {
    const response = await axios.post(
      `${API}/events/${eventId}/guests/${userId}`
    );
    return response;
  } catch (error) {
    console.log("Error adding guest", error);
    throw error;
  }
};

export const removeGuest = async (eventId: string, userId: string) => {
  try {
    const response = await axios.delete(
      `${API}/events/${eventId}/guests/${userId}`
    );
    return response;
  } catch (error) {
    console.log("Error removing guest", error);
    throw error;
  }
};
