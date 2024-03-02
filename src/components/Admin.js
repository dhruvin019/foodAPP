import React from 'react';
import { Row, Col, Container, ButtonGroup, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Routes, Route } from 'react-router-dom';
import AllUser from '../admin/AllUser';
import AllPizza from '../admin/AllPizza';
import AddPizza from '../admin/AddPizza';
import AllOrders from '../admin/AllOrders';

const Admin = () => {
  return (
    <Container>
      <Row>
        <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
        <Col md={2}>
          <ButtonGroup vertical style={{ minHeight: '400px' }}>
            <LinkContainer to="/admin/all-user">
              <Button>All Users</Button>
            </LinkContainer>
            <LinkContainer to="/admin/all-pizza">
              <Button>All Pizzas</Button>
            </LinkContainer>
            <LinkContainer to="/admin/add-pizza">
              <Button>Add New Pizza</Button>
            </LinkContainer>
            <LinkContainer to="/admin/all-orders">
              <Button>All Orders</Button>
            </LinkContainer>
          </ButtonGroup>
        </Col>

        <Col md={10}>
          <Routes>
            <Route path="/admin/all-user" element={<AllUser />} />
            <Route path="/admin/all-pizza" element={<AllPizza />} />
            <Route path="/admin/add-pizza" element={<AddPizza />} />
            <Route path="/admin/all-orders" element={<AllOrders />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
