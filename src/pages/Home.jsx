import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import "/src/assets/styles/home.css";
import "/src/assets/styles/Product_card.css";

import Hero from "../components/Hero";
import Product_card from "../components/Product_card";
import Loading from "../components/Loading";

const Home = ({ search, priceMin, priceMax, sortPrice }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  console.log(search); // affiche bien l'event target et le rerender

  useEffect(() => {
    const fetchData = async () => {
      try {
        // sécuriser les filtres
        let filters = "";

        if (search) {
          filters += "?search=" + search;
        }

        if (priceMin) {
          if (filters) {
            filters += "&priceMin=" + priceMin;
          } else {
            filters += "?priceMin=" + priceMin;
          }
        }

        if (priceMax) {
          if (filters) {
            filters += "&priceMax=" + priceMax;
          } else {
            filters += "?priceMax=" + priceMax;
          }
        }

        if (sortPrice) {
          if (filters) {
            filters += "&sortPrice=" + sortPrice;
          } else {
            filters += "?sortPrice=" + sortPrice;
          }
        }

        // const response = await axios.get("http://localhost:3000/");
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers" + filters
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [search, priceMin, priceMax, sortPrice]);

  return isLoading ? (
    <>
      <Loading />
    </>
  ) : (
    <>
      <Hero />
      <section>
        {data.offers.map((elem) => {
          return <Product_card elem={elem} key={elem._id} />;
        })}
      </section>
    </>
  );
};

export default Home;
