// frontend/src/redux/highlightsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHighlights = createAsyncThunk('highlights/fetchHighlights', async () => {
  const response = await axios.get('http://localhost:5000/highlights');
  return response.data;
});

const highlightsSlice = createSlice({
  name: 'highlights',
  initialState: { list: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchHighlights.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default highlightsSlice.reducer;
