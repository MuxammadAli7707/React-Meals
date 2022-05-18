import React from 'react';
import './Hero.css'
const Hero = () => {
  return (
    <>
      <div className='hero__imgbox'>
      <img className='hero__img' src="https://react-app099.netlify.app/static/media/meals.2971f633.jpg" alt="img" />
    </div>

    <div className='hero__cart'>
      <h2 className='hero__title'>Delicious Food, Delivered To You</h2>
      <p className='hero__text'>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
      <p className='hero__text'>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
    </div>
    </>
  );
};


export default Hero;
