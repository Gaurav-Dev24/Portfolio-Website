import React, { useContext } from 'react';
import "./Profile.css";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import TodoProject from "../../img/todo-proj.png"; 
import Portfolio from "../../img/portfolio.png"; 
import MovieProject from "../../img/movie-proj.png"; 
import ShoppingCartProject from "../../img/shoppingcart-proj.png"; 
import { themeContext } from "../../Context";



const Profile = () => {

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio' id='Portfolio'>
        {/* Heading */}
        <span style= {{ color: darkMode ? "white" : "" }}>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slide */}
        <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={ShoppingCartProject} alt='shoppingcart'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={TodoProject} alt='todo'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={MovieProject} alt='movie'/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Portfolio} alt='portfoilio'/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Profile