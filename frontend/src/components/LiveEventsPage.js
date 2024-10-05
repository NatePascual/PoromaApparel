import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLiveEvents } from '../redux/eventsSlice';

const LiveEventsPage = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.list);

  useEffect(() => {
    dispatch(fetchLiveEvents());
  }, [dispatch]);

  return (
    <div>
      <h1>Upcoming Live Sales</h1>
      {events.map((event) => (
        <div key={event._id} className="event-card">
          <h2>{event.title}</h2>
          <p>{new Date(event.date).toLocaleString()}</p>
          <a href={event.link} target="_blank" rel="noopener noreferrer">
            Join Live Sale
          </a>
          <a href={`${event.link}?chat`} target="_blank" rel="noopener noreferrer">
            Open Chat
          </a>
        </div>
      ))}
    </div>
  );
};

export default LiveEventsPage;
