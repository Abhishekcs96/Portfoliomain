import React from "react";
import Work from "./Work";


const CarouselPortfolio = () => {
 
 
  return (
    <div className="box-container" id="Portfolio">
      
        <h1 className="h3-responsive">My Portfolio </h1>
        <div className="carousel-container">
          <Work/>
        </div>
      
    </div>
  );
};

export default CarouselPortfolio;
