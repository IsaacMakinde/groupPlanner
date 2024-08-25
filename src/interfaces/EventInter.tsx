// TODO: Add and attribute to the Event interface to store the event's photos
// TODO: Add and attribute to the Event interface to store the event's reviews
// TODO: Add and attribute to the Event interface to store the event's rating
// TODO: Add and attribute to the Event interface to store the event's status
// TODO: Add and attribute to the Event interface to keep track of the event's interested users
// TODO: Add and attribute to the Event interface to keep track of the event's declined users
// TODO: Add and attribute to the Event interface to keep track of the event's confirmed users
interface Event {
  id: string;
  title: string;
  creator: string;
  host: string;
  date: string;
  venue: string;
  description?: string;
  category?: string;
  pricing: number;
  guests: string;
}

export default Event;
