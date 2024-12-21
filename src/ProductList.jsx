// src/ProductList.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';  // Importation de l'action

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // Dispatchez l'action pour ajouter un article au panier
    dispatch(addItem(product));
  };

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.name} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>${product.cost}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
