import { configureStore } from "@reduxjs/toolkit";
import { getAllPizzaReducer } from "./reducers/pizzaReducer";
import { registerUserReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

const rootReducer = {
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
};

const store = configureStore({
  reducer: rootReducer,
  // Optionally, you can add middleware here
});

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
};

export default store;
