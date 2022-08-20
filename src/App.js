import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Course from "./Components/Course/Course";

function App() {
  return (
    <div className="font-dynaPuff">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
