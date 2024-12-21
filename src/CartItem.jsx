import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice'; // Importing the actions

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total cost of the item
  const calculateTotalCost = () => item.quantity * item.cost;

  // Handle incrementing quantity
  const handleIncrement = () => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Handle decrementing quantity
  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name)); // Remove item if quantity reaches 0
    }
  };

  // Handle removing the item from the cart
  const handleRemove = () => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.cost}</p>
      <p>Subtotal: ${calculateTotalCost()}</p>

      <div className="quantity-controls">
        <button onClick={handleDecrement}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>

      <button className="remove-button" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total cost of all items in the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.cost, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map((item) => <CartItem key={item.name} item={item} />)
      )}

      <div className="cart-summary">
        <p>Total: ${calculateTotalAmount()}</p>
      </div>
    </div>
  );
};

export default Cart;
