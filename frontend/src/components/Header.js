import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="logo">Poroma Apparel</div>
       <nav> 
        <ul className="nav-menu">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/live-events">Live Events</Link></li>
          <li><Link to="/exclusive-offers">Exclusive Offers</Link></li>
          <li><Link to="/customer-highlights">Customer Highlights</Link></li>
          <li><Link to="/past-sales">Past Sales</Link></li>
          <li><Link to="/vip-signup">VIP Signup</Link></li>  
        </ul>     
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
};

export default Header;
