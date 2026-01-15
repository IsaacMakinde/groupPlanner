import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventsPage from "./pages/EventsPage";
import Home from "./pages/HomePage";
import Header from "./components/ui/Header";
import EventDetailsPage from "./pages/EventDetailsPage";
import "./App.css";
import LoginForm from "./components/form/LoginForm";
import Footer from "./components/ui/Footer";
import ErrorBoundary from "./ErrorBoundary";
import ErrorThrower from "./ErrorThrower";
import ErrorPage from "./components/ui/ErrorPage/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <ErrorBoundary
          fallback={<div className="error">{<ErrorPage></ErrorPage>}</div>}
        >
          <div className="App has-background-white">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/events/:id" element={<EventDetailsPage />} />
              <Route path="/error" element={<ErrorThrower />} />
            </Routes>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </>
  );
}

export default App;
