import React from 'react';
import { Row, Col, Container, ButtonGroup, Button } from 'react-bootstrap';
import { Outlet } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';


const Admin = () => {
  return (
    <Container>
      <Row>
        <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
        <Col md={2}>
          <ButtonGroup vertical style={{ minHeight: '400px' }}>
            <LinkContainer to="/admin/alluser">
              <Button>All Users</Button>
            </LinkContainer>
            <LinkContainer to="/admin/allpizza">
              <Button>All Pizzas</Button>
            </LinkContainer>
            <LinkContainer to="/admin/addpizza">
              <Button>Add New Pizza</Button>
            </LinkContainer>
            <LinkContainer to="/admin/allorders">
              <Button>All Orders</Button>
            </LinkContainer>
          </ButtonGroup>
        </Col>

        <Col md={10}>
          <Outlet/>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
