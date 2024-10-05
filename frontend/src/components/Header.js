import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="logo">Poroma Apparel</div>
      {/* <nav>
        <Link to="/home">Home</Link>
        <Link to="/live-events">Live Events</Link>
        <Link to='/exclusive-offers'>Exclusive Offers</Link>
        <Link to='/customer-highlights'>Customer Highlights</Link>
        <Link to="/past-sales">Past Sales</Link>
        <Link to="/vip-signup">VIP Signup</Link>
      </nav> */}
       <nav> 
          <Link to="/home">Home</Link>
          <Link to="/live-events">Live Events</Link>
          <Link to="/exclusive-offers">Exclusive Offers</Link>
          <Link to="/customer-highlights">Customer Highlights</Link>
          <Link to="/past-sales">Past Sales</Link>
          <Link to="/vip-signup">VIP Signup</Link>
    </nav>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  backgroundColor: '#333',
  color: '#fff',
  width: '100%',
};

export default Header;
