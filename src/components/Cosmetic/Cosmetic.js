import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
  const { id, name, price } = props.cosmetic;

  const addToCart = (id) => {
    console.log('Item Added', id);
  };

  const addToCartWIthParam = () => addToCart(id);
  return (
    <div className="product">
      <h2>Buy this: {name} </h2>
      <p>Only for ${price}</p>
      <p>
        <small>id: {id}</small>
      </p>
      <button onClick={addToCartWIthParam}>Add to Cart</button>
      <button onClick={() => addToCart(id)}>Add to Cart</button> //shortcut
    </div>
  );
};

export default Cosmetic;
