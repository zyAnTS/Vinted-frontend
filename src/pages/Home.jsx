import React from "react";

import "/src/assets/styles/home.css";
import "/src/assets/styles/Product_card.css";

import Hero from "../components/Hero";
import Product_card from "../components/Product_card";

const Home = ({ offers }) => {
  return (
    <>
      <Hero />
      <section>
        {offers.map((elem) => {
          return <Product_card elem={elem} />;
        })}
      </section>
    </>
  );
};

export default Home;
