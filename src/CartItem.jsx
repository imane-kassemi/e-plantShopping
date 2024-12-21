// src/CartItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';  // Importation des actions

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(item));  // Supprime l'article du panier
  };

  const handleUpdateQuantity = (newQuantity) => {
    dispatch(updateQuantity({ name: item.name, quantity: newQuantity }));  // Met à jour la quantité
  };

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.cost}</p>
      <p>Quantity: 
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => handleUpdateQuantity(parseInt(e.target.value))}
        />
      </p>
      <button onClick={handleRemoveItem}>Remove</button>
    </div>
  );
};

export default CartItem;
