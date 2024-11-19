import React from 'react';
import './Page2.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 

export const Page2 = () => {
  return (
    <div className="container my-5">
      {/* Title Section */}
      <h1 className="text-center fw-bold">
        <div className="head-page2">
          1mdm.com is a leading ecommerce platform that helps SMEs go global
        </div>
      </h1>

      {/* Video Section */}
      <div className="row align-items-center mt-5">
        <div className="col-lg-6 col-md-12">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/TN7iJyc5Uks?si=oIQ9AG7v-4qSgp-7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Description Section */}
        <div className="col-lg-6 col-md-12 mt-4 mt-lg-0">
          <p className="mb-3 fs-5">
            Connect with millions of business buyers from around the world.
          </p>
          <p className="mb-3 fs-5">
            Get the tools and know-how to build a successful ecommerce presence
            for your business.
          </p>
          <p className="mb-3 fs-5">
            Pocket more from each sale, with take rates as low as 0% in some
            cases.
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default Page2;
