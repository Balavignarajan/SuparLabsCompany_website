import React, { useState, useEffect } from 'react';
import './HeaderSuperlabs.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from 'react-bootstrap/Image';

const HeaderSuperlabs = () => {
  const [isSticky, setIsSticky] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar Component */}
      <Navbar
        expand="lg"
        className={`custom-navbar ${isSticky ? 'sticky' : ''}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image src={require('../Assests/Img/logo sl.png')} alt="Logo" fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="custom-nav">
              <Nav.Link href="#home">About us</Nav.Link>
              <Nav.Link href="#ourstory">Our Story</Nav.Link>
              <Nav.Link href="#sell">Sell on 1MDM</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sticky Buttons at the Bottom */}
      <div className="sticky-buttons d-flex flex-column align-items-end">
        <button className="btn btn-danger mb-3 d-flex align-items-center">
          <i className="bi bi-bag-fill me-2"></i> Start Selling
        </button>
        <button className="btn btn-danger d-flex align-items-center">
          <i className="bi bi-headset me-2"></i> CustomerService
        </button>
      </div>
    </>
  );
};

export default HeaderSuperlabs;
