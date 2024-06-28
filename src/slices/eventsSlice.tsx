import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type Event from "../interfaces/EventInter";
import { getEvents } from "../services/EventService";

interface EventsState {
  value: Event[];
  loading: boolean;
  error: string | null;
}

const initialState: EventsState = {
  value: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "eventsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchEvents.fulfilled,
        (state, action: PayloadAction<Event[]>) => {
          state.loading = false;
          state.value = action.payload;
        }
      )
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch events";
      });
  },
});

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const response = await getEvents();
  return response;
});

// export the reducers

export default eventsSlice.reducer;
