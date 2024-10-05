import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LiveEventsPage from './components/LiveEventsPage';
import HomePage from './components/HomePage';
import ExclusiveOffers from './components/ExclusiveOffers';
import CustomerHighlights from './components/CustomerHighlights';
import PastSales from './components/PastSales';
import VIPSignup from './components/VIPSignup';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/live-events" element={<LiveEventsPage />} />
        <Route path="/exclusive-offers" element={<ExclusiveOffers />} />
        <Route path="/customer-highlights" element={<CustomerHighlights />} />
        <Route path="/past-sales" element={<PastSales />} />
        <Route path="/vip-signup" element={<VIPSignup />} />
      </Routes>
    </Router>
  );
};

export default App;
