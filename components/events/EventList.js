import EventItem from './EventItem';

export default function EventList({ events }) {
  return (
    <ul className="max-w-2xl w-[90%] mx-auto mt-8">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
