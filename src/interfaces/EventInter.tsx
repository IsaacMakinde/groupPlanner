interface Event {
  id: number;
  name: string;
  date: string;
  venue: string;
  description?: string;
  category?: string;
  pricing: number;
  guests: string;
}

export default Event;
