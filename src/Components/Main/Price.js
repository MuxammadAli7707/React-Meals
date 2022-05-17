import React from 'react';
import './Price.css'

function Price(props){
  return (
    <>
      <ul className="product-list">
        {props.obj.map((item, i) => {
          return (
            <>
              <li key={i+1} className="product-item d-flex justify-content-between">
                <div>
                  <h5 className='product-name'>{item.name}</h5>
                  <p className="mb-2 product-desc">{item.ingridient}</p>
                  <span className='product-price'>${item.price}</span>
                </div>

                <div>
                  <form onSubmit={props.addItem} id={item.id}>
                  <div className="d-flex align-items-center">
                    <p className="m-0 product-name me-3">Amount</p>
                    <input
                      className="amount-input"
                      type="number"
                      placeholder="1"
                      defaultValue={"1"}
                      min="1"
                      max="5"
                    />
                  </div>
                  <div className='product__btn'>
                    <button className='product-btn'>+Add</button>
                  </div>
                  </form>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  )
};

export default Price;