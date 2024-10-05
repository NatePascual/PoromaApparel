import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLiveEvents = createAsyncThunk('events/fetchLiveEvents', async () => {
  const response = await axios.get('http://localhost:5000/events');
  return response.data;
});

const eventsSlice = createSlice({
  name: 'events',
  initialState: { list: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchLiveEvents.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default eventsSlice.reducer;
