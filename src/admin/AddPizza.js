import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { addPizza } from "../actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";

const AddPizza = () => {
  const [name, setName] = useState("");
  const [smallPrice, setSmallPrice] = useState("");
  const [mediumPrice, setMediumPrice] = useState("");
  const [largePrice, setLargePrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");


  const dispatch = useDispatch();

  const submitForm = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      varients: ["small", "medium", "large"],
      price: [
        {
          small: parseInt(smallPrice),
          medium: parseInt(mediumPrice),
          large: parseInt(largePrice),
        }
      ],
      category,
      image,
      description,
    };
    dispatch(addPizza(pizza));
    alert('Pizza added');
    setName("");
    setSmallPrice("");
    setMediumPrice("");
    setLargePrice("");
    setImage("");
    setDescription("");
    setCategory("");
  };
  
  return (
    <div>
      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Small Price</Form.Label>
              <Form.Control
                type="number"
                value={smallPrice}
                onChange={(e) => setSmallPrice(e.target.value)}
                placeholder="Enter Small Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Medium Price</Form.Label>
              <Form.Control
                type="number"
                value={mediumPrice}
                onChange={(e) => setMediumPrice(e.target.value)}
                placeholder="Enter Medium Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Large Price</Form.Label>
              <Form.Control
                type="number"
                value={largePrice}
                onChange={(e) => setLargePrice(e.target.value)}
                placeholder="Enter Large Price"
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Add Image URL"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter Category"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add New
        </Button>
      </Form>
    </div>
  );
}

export default AddPizza;
