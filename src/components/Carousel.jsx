import React from "react";
import Product_card from "./Product_card";

import "../assets/styles/carousel.css";

const Carousel = ({ carouselOffers }) => {
  return (
    <div className="carousel">
      <h2>Les dernières offres :</h2>
      <div className="scroll">
        {carouselOffers.offers
          .map((elem) => {
            return <Product_card elem={elem} key={elem._id} />;
          })
          .reverse()}
      </div>
    </div>
  );
};

export default Carousel;
