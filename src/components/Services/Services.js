import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Cards from "../Cards/Cards";
import Resume from "./resume.pdf"
import { themeContext } from "../../Context";
import {motion} from "framer-motion";

const Services = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = {
    duration: 1,
    type: 'spring'
  }
  return (
    <div className="services" id='Services'>
      {/* Left Div */}
      <div className="awesome">
        <span style= {{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          As a web developer, I have expertise in various programming languages,
          frameworks, and technologies to deliver high-quality websites and web
          applications. I combine technical skills with creativity and
          problem-solving abilities to create impactful online experiences for
          businesses and individuals alike.
        </span>

        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}>
          Download CV
        </div>
      </div>

      {/* Right Div */}
      <div className="cards">

        {/* First Card */}
        <motion.div
        initial={{ left: "20rem" }}
        whileInView={{ left: "18rem" }}
        transition={transition}
        style={{ left: "17rem" }}
        >
          <Cards
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
          />
        </motion.div>

        {/* Second Card */}
        <motion.div
        initial={{ right: "5rem", top: "12rem" }}
        whileInView={{ left: "2rem" }}
        transition={transition}
        style={{ top: "12rem" }}>
          <Cards
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, CSS, Bootstrap, Tailwind, Javascript, React"}
          />
        </motion.div>


        {/* Third Card */}
        <motion.div
        initial={{ top: "19rem", left: "20rem" }}
        whileInView={{ left: "17rem" }}
        transition={transition}
         style={{ top: "19rem", left: "16rem" }}>
          <Cards
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lets build a creative and attractive looking webpages together."}
          />
        </motion.div>

        <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>

      </div>
    </div>
  );
};

export default Services;
