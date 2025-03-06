export async function getEvents() {
  let page = 1;
  const allEvents = [];
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(today.getFullYear() - 1);  // Set to one year ago
  
  while (true) {
    const response = await fetch(`https://api.github.com/users/JFKongphop/events/public?per_page=100&page=${page}`);
    const events = await response.json();

    if (events.length === 0) break; // Stop if no more events are returned

    // Filter events that occurred within the last 365 days
    const filteredEvents = events.filter(event => {
      const eventDate = new Date(event.created_at);
      return eventDate >= oneYearAgo && eventDate <= today;
    });

    allEvents.push(...filteredEvents);
    page++;
  }

  return allEvents;
}

// getEvents(').then(events => {
//   console.log(events);  // This will log events from the past 365 days
// });
