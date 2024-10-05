import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch past sales from the backend
export const fetchPastSales = createAsyncThunk('pastSales/fetchPastSales', async () => {
  const response = await axios.get('http://localhost:5000/past-sales');
  return response.data;
});

const pastSalesSlice = createSlice({
  name: 'pastSales',
  initialState: {
    list: [],
    status: 'idle',  // idle, loading, succeeded, failed
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPastSales.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPastSales.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchPastSales.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default pastSalesSlice.reducer;
