import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from '../actions/pizzaAction';


import { Container,Row,Col } from 'react-bootstrap'
import Pizza from './Pizza'
const Home = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  console.log(pizzastate);
  const { loading, pizzas, error } = pizzastate || {};
  console.log({pizzastate});
  // const { loading, pizzas = [], error } = pizzastate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
    <Container>
    {loading ? (
          <h1>Loading</h1>
        ) : error ? (
        <h1>{error}</h1>
        ) : (
          <Row>
            {/* {pizzas && pizzas.map((pizza) => (
              <Col md={4} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))} */}
            {pizzas && pizzas.map((pizza) => (
              <Col md={4} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
    </Container>
    </>
  )
}

export default Home


// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllPizzas } from '../actions/pizzaAction';
// import { Container, Row, Col } from 'react-bootstrap';
// import Pizza from './Pizza';

// const Home = () => {
//   const dispatch = useDispatch();
//   const pizzastate = useSelector((state) => state.getAllPizzaReducer);
//   console.log(pizzastate);
//   const { loading, pizzas, error } = pizzastate;
//   // console.log(pizzas);
//   useEffect(() => {
//     dispatch(getAllPizzas());
//   }, [dispatch]);

//   // Render pizzas if available
//   return (
//     <Container>
//       <Row>
//         {pizzas.map((pizza) => (
//           <Col md={4} key={pizza.name}>
//             <Pizza pizza={pizza} />
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default Home;
