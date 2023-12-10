import { Route, Routes } from "react-router";
import NavBar from "./Components/NavBar";
import Homepage from "./Pages/Homepage"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Careers from "./Pages/Careers"
import Services from "./Pages/Services";

function App() {
  return (
    <div className="">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </div>
  );
}

export default App;
