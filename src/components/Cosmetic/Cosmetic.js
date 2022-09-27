import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
  const { id, name, price } = props.cosmetic;

  const addToCart = (id) => {
    addToDb(id);
  };
  const removeFromCart = (id) => {
    removeFromDb(id);
  };

  //   const addToCartWIthParam = () => addToCart(id);
  return (
    <div className="product">
      <h2>Buy this: {name} </h2>
      <p>Only for ${price}</p>
      <p>
        <small>id: {id}</small>
      </p>
      {/* <button onClick={addToCartWIthParam}>Add to Cart</button> */}

      {/* shortcut */}
      <button onClick={() => addToCart(id)}>Add to Cart</button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
};

export default Cosmetic;
