import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/EventsPage";
import Home from "./pages/HomePage";
import Header from "./components/ui/Header";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
