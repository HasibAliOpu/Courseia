import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="font-dynaPuff">
      <Navbar />
      <Banner />
      <AboutUs />
    </div>
  );
}

export default App;
