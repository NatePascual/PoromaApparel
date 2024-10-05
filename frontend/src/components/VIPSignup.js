import React, { useState } from 'react';
import axios from 'axios';

const VIPSignup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/vip-signup', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error signing up');
    }
  };

  return (
    <div className="vip-signup-container">
      <h1>Sign Up for VIP Access</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default VIPSignup;
