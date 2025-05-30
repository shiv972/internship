import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import Pricing from "./";
import Navbar from "./Component/Navbar";

import Footer from "./Component/Footer";

import ContactUs from "./Pages/Contact";
import InternshipReport from "./Pages/Internship";
// import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ContactUs />} />
        {/* Add more routes as needed */}
        <Route path="/Project" element={<InternshipReport />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
