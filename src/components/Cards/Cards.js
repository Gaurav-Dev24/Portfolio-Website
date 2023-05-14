import React from 'react';
import "./Cards.css"

const Cards = ({emoji,detail,heading}) => {
  return (
    <div className='card'>
        <img src={emoji} alt='heartemoji-img'/>
        <span>{heading}</span>
        <span>{detail}</span>
        <button className='c-button'>LEARN MORE</button>
    </div>
  )
}

export default Cards