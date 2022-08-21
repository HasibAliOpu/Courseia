import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";
import Home from "./Components/Home/Home/Home";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Course from "./Components/Course/Course";
import Register from "./Components/Login/Register";
import Login from "./Components/Login/Login";
import RequireAuth from "./Auth/RequireAuth";

function App() {
  return (
    <div className="font-dynaPuff">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course/:courseId"
          element={
            <RequireAuth>
              <Course />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
