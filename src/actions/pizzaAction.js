import axios from "axios";

export const getAllPizzas = () => async (dispatch) => {
  
  try {
    const response = await axios.get("/api/pizzas/getAllPizzas");
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: response.data });
    // console.log("success");

  } catch (err) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: err });
    console.log("failure");
  }
};
