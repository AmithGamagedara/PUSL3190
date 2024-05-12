import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UpcomingData from '../../helpers/Upcoming_data.json';
import { FaPlus } from 'react-icons/fa';

export default function AdminEvents() {
  const [events, setEvents] = useState(UpcomingData);
  const [editingEvent, setEditingEvent] = useState(null);
  const [updatedEvent, setUpdatedEvent] = useState({});

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const startEditing = (event) => {
    setEditingEvent(event);
    setUpdatedEvent(event);
  };

  const handleInputChange = (e, field) => {
    setUpdatedEvent({ ...updatedEvent, [field]: e.target.value });
  };

  const updateEvent = () => {
    setEvents(events.map(event => (event.id === updatedEvent.id ? updatedEvent : event)));
    setEditingEvent(null);
    setUpdatedEvent({});
  };

  return (
    <div className='p-12 py-24'>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
            <th className="px-6 py-3 text-left">Image</th>
            <th className="px-6 py-3 text-left">Title</th>
            <th className="px-6 py-3 text-left">Start Date</th>
            <th className="px-6 py-3 text-left">End Date</th>
            <th className="px-6 py-3 text-left">Start Month</th>
            <th className="px-6 py-3 text-left">End Month</th>
            <th className="px-6 py-3 text-left">Location</th>
            <th className="px-6 py-3 text-left">Registration Status</th>
            <th className="px-6 py-3 text-left">Start Time</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm font-light text-gray-600">
          {events.map(event => (
            <tr className="border-b border-gray-200 hover:bg-gray-100" key={event.id}>
              <td className="px-6 py-3 text-left whitespace-nowrap">
                {editingEvent?.id === event.id ? (
                  <input type="text" value={updatedEvent.image} onChange={(e) => handleInputChange(e, 'image')} />
                ) : (
                  <img className="w-10 h-10" src={event.image} alt={event.title} />
                )}
              </td>
              <td className="px-6 py-3 text-left">
                {editingEvent?.id === event.id ? (
                  <input type="text" value={updatedEvent.title} onChange={(e) => handleInputChange(e, 'title')} />
                ) : event.title}
              </td>
              <td className="px-6 py-3 text-left">
                {editingEvent?.id === event.id ? (
                  <input type="text" value={updatedEvent.startDate} onChange={(e) => handleInputChange(e, 'startDate')} />
                ) : event.startDate}
              </td>
              <td className="px-6 py-3 text-left">
                {editingEvent?.id === event.id ? (
                  <input type="text" value={updatedEvent.endDate} onChange={(e) => handleInputChange(e, 'endDate')} />
                ) : event.endDate}
              </td>
              <td className="px-6 py-3 text-left">
                {editingEvent?.id === event.id ? (
                  <input type="text" value={updatedEvent.startMonth} onChange={(e) => handleInputChange(e, 'startMonth')} />
                ) : event.startMonth}
              </td>
              <td className="px-6 py-3 text-left">
                {editingEvent?.id === event.id ? (
                  <input type="text" value={updatedEvent.endMonth} onChange={(e) => handleInputChange(e, 'endMonth')} />
                ) : event.endMonth}
              </td>
              <td className="px-6 py-3 text-left">
                {editingEvent?.id === event.id ? (
                  <input type="text" value={updatedEvent.location} onChange={(e) => handleInputChange(e, 'location')} />
                ) : event.location}
              </td>
              <td className="px-6 py-3 text-left">
                {editingEvent?.id === event.id ? (
                  <input type="text" value={updatedEvent.registrationStatus} onChange={(e) => handleInputChange(e, 'registrationStatus')} />
                ) : event.registrationStatus}
              </td>
              <td className="px-6 py-3 text-left">
                {editingEvent?.id === event.id ? (
                  <input type="text" value={updatedEvent.startTime} onChange={(e) => handleInputChange(e, 'title')} />
                ) : event.startTime}
              </td>
              
              <td className="px-6 py-3 text-center">
              <div className="flex justify-center space-x-4">
  {editingEvent?.id === event.id ? (
    <>
      <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700" onClick={() => updateEvent(event.id)}>Save</button>
      <button className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700" onClick={() => setEditingEvent(null)}>Cancel</button>
    </>
  ) : (
    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={() => startEditing(event)}>Edit</button>
  )}
  <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700" onClick={() => deleteEvent(event.id)}>Delete</button>
</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/admin/events_add_form" className="fixed p-6 text-white bg-[#FF1616] hover:bg-red-600  rounded-full bottom-12 right-12">
        <FaPlus />
      </Link>
    </div>
  );
}
