import React from "react";
import "./Navbar.css";
import Toogle from "../Toogle/Toogle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Gaurav</div>
        <Toogle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to='Navbar'
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to='Services'
              smooth={true}
            >
              <li>Services</li>
            </Link>

            <Link
              spy={true}
              to='Experience'
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experience</li>
            </Link>

            <Link
              spy={true}
              to='Portfolio'
              smooth={true}
            >
              <li>Portfolio</li>
            </Link>

            <Link
              spy={true}
              to='Testimonials'
              smooth={true}
            >
              <li>Testimonials</li>
            </Link>

            <Link
              spy={true}
              to='Works'
              smooth={true}
            >
              <li>Works</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
