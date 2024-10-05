import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to LiveThread Apparel</h1>
      <p>Check out our next live sale event!</p>
      <Link to="/live-events">
        <button className="btn-primary">Join Live Event</button>
      </Link>
    </div>
  );
};

export default HomePage;
