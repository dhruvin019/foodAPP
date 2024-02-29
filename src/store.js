import { configureStore } from "@reduxjs/toolkit";
import { getAllPizzaReducer } from "./reducers/pizzaReducer";
import { registerUserReducer,loginUserReducer } from "./reducers/userReducer";
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
  loginUserReducer:loginUserReducer
};

const store = configureStore({
  reducer: rootReducer,
  // Optionally, you can add middleware here
});

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  }
};

export default store;
