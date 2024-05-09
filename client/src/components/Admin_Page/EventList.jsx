import React, { useEffect, useState } from 'react';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>{event.title} - {event.startDate} to {event.endDate}</li>
      ))}
    </ul>
  );
}

export default EventList;
