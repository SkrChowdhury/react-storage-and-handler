import React from 'react';

const Cosmetic = (props) => {
  const {id, name, price } = props.cosmetic;
  return (
    <div>
      <h2>Buy this: {name} </h2>
      <p>Only for ${price}</p>
      <p><small>id: {id}</small></p>
    </div>
  );
};

export default Cosmetic;
