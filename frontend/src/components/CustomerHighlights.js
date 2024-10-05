import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHighlights } from '../redux/highlightsSlice';

const CustomerHighlights = () => {
  const dispatch = useDispatch();
  const highlights = useSelector((state) => state.highlights.list);

  useEffect(() => {
    dispatch(fetchHighlights());
  }, [dispatch]);

  return (
    <div className="highlights-container">
      <h1>Customer Highlights</h1>
      <div className="highlights-list">
        {highlights.map((highlight) => (
          <div key={highlight._id} className="highlight-card">
            <img src={highlight.imageUrl} alt={highlight.customerName} />
            <h3>{highlight.customerName}</h3>
            <p>{highlight.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerHighlights;
