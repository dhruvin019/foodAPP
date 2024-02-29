import React,{ useState } from 'react';
import { Card,Button,Row,Col,Modal} from 'react-bootstrap';


const Pizza = ({pizza}) => {
    const [varients,setVarient] = useState('small');
    const [quantity,setQuantity] = useState(1);
    const[show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <>
    <Card style={{ width: '18rem', marginTop:"10px"}}>
      <Card.Img variant="top" src={pizza.image} alt='Image Not Found' style={{height:"250px",cursor:'pointer'}} onClick={handleShow}/>
      <Card.Body>
        <Card.Title onClick={handleShow}>{pizza.name}</Card.Title>
        
        <Card.Text>
          <Row>
            <Col md={6}>
                <h6>Varient</h6>
                <select value={varients} onChange={(e) => setVarient(e.target.value)}>
                    {pizza.varients.map((varient) => (
                        <option>
                            {varient}
                        </option>
                    ))}
                </select>
            </Col>
            <Col md={6}>
                <h6>Quantity</h6>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(10).keys()].map((v, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </Col>
          </Row>
        </Card.Text>
        <Row>
            {/* <Col md={6}>Price : {pizza.prices[0][varients] * quantity}/-RS</Col> */}
            <Col md={6}>
                <Button className='bg-warning text-white'>Add to Cart</Button>
            </Col>
        </Row>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div>
            <Card.Img variant="top" src={pizza.image} alt='Image Not Found' style={{height:"250px"}} />
            </div>
          <p>{pizza.description}</p>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default Pizza


// import React, { useState } from 'react';
// import { Card, Button, Row, Col, Modal } from 'react-bootstrap';
// import { useDispatch } from "react-redux";


// const Pizza = ({ pizza }) => {
//   const [varient, setVarient] = useState("small");
//   const [quantity, setQuantity] = useState(1);
//   const [show, setShow] = useState(false);

//   const dispatch = useDispatch();

//   // Add a check to ensure pizza is defined before rendering its details
//   if (!pizza || typeof pizza !== 'object') {
//     return null; // or handle the case where pizza is undefined or not an object
//   }

//   const { name, description,image } = pizza;
//   console.log(pizza);
  
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


//   return (
//     <>
     
//       <Card style={{ width: '18rem', marginTop: '10px' }}>
//         <Card.Img
//           variant="top"
//           src={pizza.image}
//           alt="Image Not Found"
//           style={{ height: '250px', cursor: 'pointer' }}
//           onClick={handleShow}
//         />
//         <Card.Body>
//           <Card.Title>{pizza.name}</Card.Title>
//           <hr />
//           <Card.Text>
//             <Row>
//               <Col md={6}>
//                 <h6>Varients</h6>
//                 <select
//                   value={varient}
//                   onChange={(e) => setVarient(e.target.value)}
//                 >
//                   {pizza.varients.map((varient) => (
//                     <option key={varient}>{varient}</option>
//                   ))}
//                 </select>
//               </Col>
//               <Col md={6}>
//                 <h6>Quantity</h6>
//                 <select
//                   value={quantity}
//                   onChange={(e) => setQuantity(e.target.value)}
//                 >
//                   {[...Array(10).keys()].map((v, i) => (
//                     <option key={i + 1} value={i + 1}>
//                       {i + 1}
//                     </option>
//                   ))}
//                 </select>
//               </Col>
//             </Row>
//           </Card.Text>
//           <Row>
//           <Col md={6}>
//           {/* <Col md={6}>Price : {pizza.prices[0][varient]} /-RS</Col> */}
//               <Button
//                 className="bg-warning text-white"
//               >
//                 Add to cart
//               </Button>
//           </Col>            
//           </Row>         
//         </Card.Body>
//       </Card>
      
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{pizza.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div>
//             <Card.Img
//               variant="top"
//               src={pizza.image}
//               style={{ height: "250px" }}
//             />
//           </div>
//           <div>
//             <h5>Description :</h5>
//             <h6>{pizza.description}</h6>
//           </div>
//         </Modal.Body>
//       </Modal>
      
//     </>
//   );
// };

// export default Pizza;