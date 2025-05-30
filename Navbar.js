import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const location = useLocation(); // to detect route change
  const navigate = useNavigate(); // to redirect after logout

 



  return (
    <nav className="navbar">
      <div className="logo">Sample</div>

  

      {/* Desktop Menu */}
      <div className="nav-desktop">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Project">Internship</Link></li>
         
        </ul>
       
      </div>

     
    
    </nav>
  );
}

export default Navbar;
