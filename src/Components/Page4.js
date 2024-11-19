import React from "react";
import "./Page4.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import ExampleImage from "../Assests/Img/slider-1.webp";
import ExampleImage2 from "../Assests/Img/slider-2.webp";
import ExampleImage3 from "../Assests/Img/slider-3.webp";
import ExampleImage4 from "../Assests/Img/slider-4.webp";

const Page4 = () => {
  return (
    <div className="container-fluid success-stories-section py-5">
      <div className="container">
        <h2 className="text-center text-danger mb-4">
          Success stories from 1mdm.com sellers
        </h2>
        <Carousel controls={true} indicators={false} nextLabel="" prevLabel="">
          <Carousel.Item>
            <div className="row align-items-center">
              {/* Quote Section */}
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="quote-box">
                  <i className="quote-icon text-danger">“</i>
                  <p className="quote-text">
                    LTA International Global Services LLC is a Florida-based export management company specializing in medical device products. Founded in 1994 by Loyd, we excel in logistics and pricing.
                  </p>
                </div>
              </div>
              {/* Image Section */}
              <div className="col-lg-6 text-center">
                <img
                  src={ExampleImage}
                  alt="Success Story"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center">
              {/* Quote Section */}
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="quote-box">
                  <i className="quote-icon text-danger">“</i>
                  <p className="quote-text">
                    LTA International Global Services LLC is a Florida-based export management company specializing in medical device products. Founded in 1994 by Loyd, we excel in logistics and pricing.
                  </p>
                </div>
              </div>
              {/* Image Section */}
              <div className="col-lg-6 text-center">
                <img
                  src={ExampleImage2}
                  alt="Success Story"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center">
              {/* Quote Section */}
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="quote-box">
                  <i className="quote-icon text-danger">“</i>
                  <p className="quote-text">
                    LTA International Global Services LLC is a Florida-based export management company specializing in medical device products. Founded in 1994 by Loyd, we excel in logistics and pricing.
                  </p>
                </div>
              </div>
              {/* Image Section */}
              <div className="col-lg-6 text-center">
                <img
                  src={ExampleImage3}
                  alt="Success Story"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center">
              {/* Quote Section */}
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="quote-box">
                  <i className="quote-icon text-danger">“</i>
                  <p className="quote-text">
                    LTA International Global Services LLC is a Florida-based export management company specializing in medical device products. Founded in 1994 by Loyd, we excel in logistics and pricing.
                  </p>
                </div>
              </div>
              {/* Image Section */}
              <div className="col-lg-6 text-center">
                <img
                  src={ExampleImage4}
                  alt="Success Story"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
       
      </div>
    </div>
  );
};

export default Page4;
