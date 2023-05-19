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
                <a href='https://gdev-shopping-cart.netlify.app/' target='blank'>
                    <img src={ShoppingCartProject} alt='shoppingcart'/>
                </a> 
            </SwiperSlide>

            <SwiperSlide>
                <a href='https://gdev-todo-app.netlify.app/' target='balnk'>
                <img src={TodoProject} alt='todo'/>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href='https://gdev-movie-app.netlify.app/' target='balnk'>
                <img src={MovieProject} alt='movie'/>
                </a>
            </SwiperSlide>

            <SwiperSlide>
                <a href='https://gdev-portfolio.netlify.app/' target='balnk'>
                <img src={Portfolio} alt='portfoilio'/>
                </a>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Profile