import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './eventsSlice';
import offersReducer from './offersSlice';
import highlightsReducer from './highlightsSlice';
import pastSalesReducer from './pastSalesSlice';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    offers: offersReducer,
    highlights:highlightsReducer,
    pastSales:pastSalesReducer,
  },
});

export default store;