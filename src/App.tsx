import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Events";
import Home from "./pages/Home";
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
