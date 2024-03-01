import { useState } from "react";

export default function Calendar() {

    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/calendar'); // This is the API route we created
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    return (
        <>
            <div>
                <h1>Google Calendar Events</h1>
                <button onClick={fetchEvents}>Fetch Events</button>
                <ul>
                    {events.map(event => (
                    <li key={event.id}>{event.summary}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}