import User from "./UserInter";

interface Event {
  id: string;
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
