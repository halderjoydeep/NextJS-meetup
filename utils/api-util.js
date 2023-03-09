export async function getAllEvents() {
  return fetch(
    'https://react-movies-b9f74-default-rtdb.firebaseio.com/events.json'
  )
    .then((response) => response.json())
    .then((data) => {
      const events = [];
      for (const key in data) {
        events.push({ id: key, ...data[key] });
      }
      return events;
    });
}

export async function getFeaturedEvents() {
  return getAllEvents().then((events) =>
    events.filter((event) => event.isFeatured)
  );
}

export async function getEventById(id) {
  return getAllEvents().then((events) =>
    events.find((event) => event.id === id)
  );
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();
  const filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredEvents;
}
