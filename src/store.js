import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Import cartReducer to handle cart state

// Configuring the store with the cartReducer
const store = configureStore({
    reducer: {
        cart: cartReducer, // The cart slice of the state will be managed by cartReducer
    },
});

export default store; // Export the configured store
