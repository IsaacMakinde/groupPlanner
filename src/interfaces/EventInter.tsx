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
  clerk_id: string;
  creator: string;
  host: string;
  date: string;
  venue: string;
  placeId: string;
  description?: string;
  category_id: string;
  pricing: number;
  guests: string;
}
export default Event;
