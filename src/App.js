import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Banner from "./Components/Banner/Banner";
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
