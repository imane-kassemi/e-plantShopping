// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,  // Ajoutez le cartReducer ici
  },
});
