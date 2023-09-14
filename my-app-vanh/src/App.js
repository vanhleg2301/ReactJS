import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Link } from "react-router-dom";
import Photo from "./components/photo";

function App() {
  return (
    <div className="">
      <div className="">
        <Navbar />
        <Hero />
        <Photo />
      </div>
    </div>
  );
}

export default App;
