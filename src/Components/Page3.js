import React from 'react';
import './Page3.css';
import { Image, Container, Row, Col } from 'react-bootstrap';

export const Page3 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center d-flex flex-column justify-content-center align-items-center">
        <div className="container">
          <h1 className="hero-title">
            Largest number of products & categories of medical devices on a single place - <span className="highlight">1mdm.com</span>
          </h1>
          <p className="hero-subtitle">
            Connect with buyers worldwide for your product & start selling now.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section text-center">
        <div className="container">
          <h2 className="content-title">
            Grow your business with a suite of tools built for you
          </h2>
        </div>
      </section>

      {/* New Section Based on Uploaded Image */}
      <section className="custom-section py-5">
        <Container>
          <Row className="align-items-center">
            {/* Left Side Content */}
            <Col lg={6} md={6} sm={12} className="text-start mb-4 mb-lg-0">
              <h3 className="left-title">Custom storefront</h3>
              <ul className="feature-list">
                <li>Advertising tools</li>
                <li>Data and analytics</li>
                <li>Customers support</li>
              </ul>
              <h2 className="main-title">
                Set up a store that showcases your brand
              </h2>
              <p className="description">
                Differentiate yourself from the competition with a full store dedicated to your products - no coding or design skills necessary!
              </p>
            </Col>

            {/* Right Side Image */}
            <Col lg={6} md={6} sm={12} className="text-center text-lg-end">
              <Image
                src={require('../Assests/Img/page3 img.png')} 
                alt="Custom Storefront"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Page3;
