import { configureStore } from "@reduxjs/toolkit";
import { getAllPizzaReducer } from "./reducers/pizzaReducer";
import { registerUserReducer, loginUserReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const rootReducer = {
  getAllPizzaReducer: getAllPizzaReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer
};

const initialState = {
  cartReducer: {
    cartItems: cartItems || [], // handle null or undefined
  },
  loginUserReducer: {
    currentUser: currentUser || null, // handle null or undefined
  }
};

const store = configureStore({
  reducer: rootReducer,
  initialState,
  // Optionally, you can add middleware here
});

export default store;
