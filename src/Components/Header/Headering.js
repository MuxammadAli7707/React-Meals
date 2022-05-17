import React from 'react';
import './Header.css'

function Headering(props) {
  return (
    <div>
      <div className='header'>
        <div className='container'>
          <div className='header__box'>
            <div>
              <h1>ReactMeals</h1>
            </div>
          </div>
        </div>
        <button onClick={props.opening} className='header__btn'>
          <i className='bx bxs-cart'></i>
          <span className='header__text'>Your Cart</span>
          <span className='header__count'>{props.countings}</span>
        </button>
      </div>
    </div>
  );
};


export default Headering;