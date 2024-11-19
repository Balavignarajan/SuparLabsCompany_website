import React, { useState, useEffect } from 'react';
import './Page1.css';

export const Page1 = () => {
  const [buyers, setBuyers] = useState(0);
  const [inquiries, setInquiries] = useState(0);
  const [countries, setCountries] = useState(0);

  // Function to animate numbers
  const animateNumber = (setter, end, duration) => {
    let start = 0;
    const stepTime = 20; // Update interval
    const increment = Math.ceil((end / duration) * stepTime);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setter(start);
    }, stepTime);
  };

  useEffect(() => {
    animateNumber(setBuyers, 26000000, 2000);
    animateNumber(setInquiries, 400000, 2000);
    animateNumber(setCountries, 200, 2000);
  }, []);

  return (
    <div className="page1-container">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-lg-6 col-md-12 text-center text-lg-start mb-4 mb-lg-0">
            <h1>Sell on 1mdm.com</h1>
            <h2 className='head2'>Reach millions of B2B buyers globally</h2>
            <div className="buttons mt-4">
              <button className="btn btn-danger me-3">Start selling</button>
              <button className="btn btn-outline-danger">Chat with consultant</button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 col-md-12 text-end">
            <div className="stats">
              <div className="stat mb-3">
                <h3>{buyers.toLocaleString()}</h3>
                <p>active buyers globally</p>
              </div>
              <div className="stat mb-3">
                <h3>{inquiries.toLocaleString()}</h3>
                <p>product inquiries daily</p>
              </div>
              <div className="stat">
                <h3>{countries}</h3>
                <p>countries and regions represented</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
