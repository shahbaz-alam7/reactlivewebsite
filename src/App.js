import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./Components/About";
import Service from "./Components/Service";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="container ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reactlivewebsite" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
