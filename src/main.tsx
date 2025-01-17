import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { ClerkProvider } from "@clerk/clerk-react";
import { EventProvider } from "./contexts/Events/EventProvider";
import { QueryClient, QueryClientProvider } from "react-query";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const queryClient = new QueryClient();

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing publishable key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <EventProvider>
          <App />
        </EventProvider>
      </ClerkProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
