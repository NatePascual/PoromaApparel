// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

// Get the root element from the HTML file
const rootElement = document.getElementById('root');

// Create a React root for the application
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
); 