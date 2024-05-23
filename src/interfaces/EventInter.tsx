interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  description?: string;
  category?: string;
  pricing: number;
  guests: string;
}

export default Event;
