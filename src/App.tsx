import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/EventsPage";
import Home from "./pages/HomePage";
import Header from "./components/ui/Header";
import "./App.css";
import LoginForm from "./components/form/LoginForm";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <main>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
