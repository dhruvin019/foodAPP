import { configureStore,thunk } from "@reduxjs/toolkit";
import { getAllPizzaReducer } from "./reducers/pizzaReducer";


const rootReducer = {
  pizzas: getAllPizzaReducer
};

const store = configureStore({
  reducer: rootReducer
});

export default store;

