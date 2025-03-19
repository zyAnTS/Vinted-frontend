import React from "react";

import "/src/assets/styles/home.css";
import "/src/assets/styles/product_card.css";

import Hero from "../components/Hero";
import Product_card from "../components/Product_card";
import Input from "../components/Input";

const Home = ({
  data,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  sortPrice,
  setSortPrice,
  page,
  setPage,
  limit,
}) => {
  return (
    <>
      <Hero />
      <section>
        <nav>
          <div className="sort">
            <span>Trier : </span>
            <label htmlFor="sortPrice">
              <input
                type="checkbox"
                id="sortPrice"
                value={sortPrice}
                className="checkbox"
                onClick={() => {
                  setSortPrice(!sortPrice);
                }}
              />
              Du moins au plus cher
            </label>
          </div>
          <div className="filters">
            <Input
              label="Prix Min."
              id="priceMin"
              type="text"
              value={priceMin}
              set={setPriceMin}
            />
            <Input
              label="Prix max."
              id="priceMax"
              type="text"
              value={priceMax}
              set={setPriceMax}
            />
          </div>
        </nav>
        {data.offers.map((elem) => {
          return <Product_card elem={elem} key={elem._id} />;
        })}

        <div className="page">
          <button
            className={page < 2 ? "opacity-zero" : ""}
            onClick={
              page > 1 &&
              (() => {
                setPage(page - 1);
              })
            }
          >
            Précédent
          </button>
          <span>page : {page}</span>
          <button
            className={data.count / limit > page ? "" : "opacity-zero"}
            onClick={
              data.count / limit > page &&
              (() => {
                setPage(page + 1);
              })
            }
          >
            Suivant
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
