import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import { Routes } from "react-router-dom";

export default function App() {
  return (
    <div classname="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
