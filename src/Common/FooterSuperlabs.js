import React from 'react';
import './FooterSuperlabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import exampleLogo from '../Assests/Img/logo sl.png'; 

const FooterSuperlabs = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={exampleLogo} alt="1MDM Logo" className="img-fluid mb-3" />
            <p>One Medical Devices Market Place</p>
          </div>
          <div className="col-md-3 text-end">
            <h5>Platform</h5>
            <ul className="list-unstyled">
              <li><a href="#">Sell on 1MDM</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Brands</a></li>
            </ul>
          </div>
          <div className="col-md-3 text-end">
            <h5>Press Room</h5>
            <ul className="list-unstyled">
              <li><a href="#">Images & B-roll</a></li>
            </ul>
            <h5>Policies</h5>
            <ul className="list-unstyled">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Delivery Information</a></li>
            </ul>
          </div>
          <div className="col-md-3 text-end">
            <h5>Reach Us</h5>
            <ul className="list-unstyled">
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSuperlabs;
