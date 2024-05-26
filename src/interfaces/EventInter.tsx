interface Event {
  id: number;
  title: string;
  host: string;
  date: string;
  venue: string;
  description?: string;
  category?: string;
  pricing: number;
  guests: string;
}

export default Event;
