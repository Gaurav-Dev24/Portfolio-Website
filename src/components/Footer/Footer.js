import React from 'react';
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt='wave-img' style={{width:"100%"}}/>
        <div className='f-content'>
            <span>subhamkr1995dob@gmail.com</span>
            <div className='f-icons'>
                <a href='https://instagram.com/rudra_dev2495?igshid=ZGUzMzM3NWJiOQ==' target='blank'>
                  <Insta color="white" size="3rem" />
                </a>
                <a href='https://www.linkedin.com/in/gaurav-dev-031a65141/' target='blank'>
                  <LinkedIn color="white" size="3rem"/>
                </a>
                <a href='https://github.com/Gaurav-Dev24' target='blank'>
                  <Github color="white" size="3rem"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer