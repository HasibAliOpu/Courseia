import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Banner from "./Components/Banner/Banner";
import Courses from "./Components/Courses/Courses";
import Navbar from "./Components/Navbar/Navbar";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
    <div className="font-dynaPuff">
      <Navbar />
      <Banner />
      <Courses />
      <AboutUs />
      <Reviews />
    </div>
  );
}

export default App;
