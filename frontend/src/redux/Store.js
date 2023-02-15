import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Cart';
import userReducer from './User';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer
  }
});
