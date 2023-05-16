import React from 'react';
import "./Profile.css";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import TodoProject from "../../img/todo-proj.png"; 
import EcommerceProject from "../../img/ecommerce.png"; 
import MovieProject from "../../img/movie-proj.png"; 
import ShoppingCartProject from "../../img/shoppingcart-proj.png"; 



const Profile = () => {
  return (
    <div className='portfolio'>
        {/* Heading */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slide */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
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
                <img src={EcommerceProject} alt='ecommerce'/>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Profile