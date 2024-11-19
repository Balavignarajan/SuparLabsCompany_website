import React from 'react';
import './Page5.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Page5 = () => {
  return (
    <div className="page5-background">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="text-white">Ready to Grow Your Business?</h1>
            <div className="button-group">
              <Button variant="light" className="m-2">Start selling</Button>
              <Button variant="outline-light" className="m-2">Chat with consultant</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Page5;
