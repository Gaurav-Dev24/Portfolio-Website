import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      {/* Left Side */}
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Gaurav Dev</span>
          <span>
            Frontend Developer with a strong foundation in web designing and
            development, producting the Quality Work.
          </span>
        </div>

        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/Gaurav-Dev24" target="blank">
            <img src={Github} alt="github-img" />
          </a>
          <a
            href="https://www.linkedin.com/in/gaurav-dev-031a65141/"
            target="blank"
          >
            <img src={LinkedIn} alt="linkedin-img" />
          </a>
          <a
            href="https://instagram.com/rudra_dev2495?igshid=ZGUzMzM3NWJiOQ=="
            target="blank"
          >
            <img src={Instagram} alt="instagram-img" />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="i-right">
        <img src={Vector1} alt="vector1-img" />
        <img src={Vector2} alt="vector2-img" />
        <img src={boy} alt="boy-img" />
        <img src={glassesimoji} alt="galssesimoji-img" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Best" txt2="Designs" />
        </div>

        {/* blur div */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
