import React from "react";
import './Modaling.css'

function Modaling(props) {
  return(
    <div className="modal"
    style={{
      transform: props.opening ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.opening ? '1' : '0'
    }}
    >
      <div onClick={props.closing} className="modal__backdrop"></div>
      <div className="modal__main">
        <ul className="modal__list">
          {props.Items.map((item, i) => {
            return (
            <li key={i+3} className="modal__item d-flex justify-content-between align-items-center">
            <div>
              <h2 className="modal__title">{item.name}</h2>
              <div className="modal__pricebox d-flex justify-content-between align-items-center">
                <p className="modal__price">${item.price}</p>
                <p className="modal__count">x {item.count}</p>
              </div>
            </div>
            <div id={item.id} className="d-flex">
              <button onClick={props.minus} className="modal__btn">-</button>
              <button onClick={props.plus} className="modal__btn">+</button> 
            </div>
          </li>
          );
        })}

        </ul>
        <div className="modal__totalbox d-flex justify-content-between align-items-center">
          <p>Total Amount</p>
          <p>${props.total.toFixed(2)}</p>
        </div>
        <div className="d-flex float-end">
          <button onClick={props.closing} className="modal__btnclose">Close</button>
          <button onClick={props.order} className="modal__btnorder">Order</button>
        </div>
      </div>
    </div>
  )
}

export default Modaling