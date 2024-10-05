import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch exclusive offers
export const fetchExclusiveOffers = createAsyncThunk('offers/fetchExclusiveOffers', async () => {
  const response = await axios.get('http://localhost:5000/offers');
  return response.data;
});

const offersSlice = createSlice({
  name: 'offers',
  initialState: { list: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchExclusiveOffers.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default offersSlice.reducer;
