import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Importing the addItem action

const ProductList = ({ plantsArray }) => {
  const dispatch = useDispatch();

  // Function to handle adding items to the cart
  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 })); // Add the item with an initial quantity of 1
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.name} className="product-card">
          <img src={plant.image} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p>${plant.cost}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
