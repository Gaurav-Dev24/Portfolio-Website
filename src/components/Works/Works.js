import React, { useContext } from "react";
import "./Works.css";
import RealEstate from "../../img/realestate.png";
import Todo from "../../img/todo.png";
import ShoppingCart from "../../img/shoppingcart.png";
import Movie from "../../img/movie.png";
import Pokemon from "../../img/pokemon.png";
import { themeContext } from "../../Context";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Created Different</span>
        <span>Projects on</span>
        <span>
          I have created six plus landing pages such as Credit Card, Beats, Real
          Estate and many more with <strong>Html, CSS and Tailwind</strong>. I
          have also worked on nine plus<strong> DOM </strong>based projects. In react, I have
          created projects on different combinations of API handling, React
          Router Dom, Redux and many more. Some of my projects in react are TODO
          app, Movie App and Pokemon App etc.
          <br />
          <br />
          While doing internship from <strong>Ineuron.ai</strong> I have created
          Shopping cart component for E-commerce websites. Currently I am
          working on a clone of e-commerce websites.
        </span>

        <button className="button s-button">Hire Me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
            <img src={RealEstate} alt="realestate-img" />
            </div>
            <div className="w-secCircle">
              <img src={Todo} alt="todo-img" />
            </div>
            <div className="w-secCircle">
              <img src={ShoppingCart} alt="shopping-img" />
            </div>
            <div className="w-secCircle">
                <img src={Pokemon} alt="pokemon-img" />
            </div>
            <div className="w-secCircle">
            <img src={Movie} alt="movie-img" />
            </div>

        </div>
    {/* background circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>

      </div>
    </div>
  );
};

export default Works;
