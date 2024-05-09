import React from 'react'
import EventForm from '../../components/Admin_Page/EventForm';
import EventList from '../../components/Admin_Page/EventList';

export default function AdminEvents() {
  return (
    <div className='py-16'>
        <div>
    
      <EventForm />
      <EventList />
    </div>
    </div>
  )
}
