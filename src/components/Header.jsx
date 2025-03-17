import React from "react";

import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import logo from "/src/assets/img/logo.svg";
import glass from "/src/assets/img/search.png";
import "/src/assets/styles/header.css";

const Header = ({
  isVisible,
  setIsVisible,
  userToken,
  setUserToken,
  search,
  setSearch,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  sortPrice,
  setSortPrice,
}) => {
  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <img src={logo} alt="Logo Vinted" />
          </Link>
          <div className="search">
            <img src={glass} alt="" />
            <input
              type="text"
              placeholder="Rechercher des articles"
              id={search}
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          <div className="button-header">
            {userToken ? (
              <button
                onClick={() => {
                  Cookies.remove("token");
                  setUserToken(null);
                }}
              >
                Se déconnecter
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsVisible(!isVisible);
                }}
              >
                S'inscrire | Se connecter
              </button>
            )}

            <button className="button-prim">Vends tes articles</button>
          </div>
        </div>
      </header>
      <nav>
        <div className="container">
          <span>Trier : </span>
          <label htmlFor="sortPrice">
            <input
              type="checkbox"
              id="sortPrice"
              value={sortPrice}
              onClick={() => {
                setSortPrice(!sortPrice);
              }}
            />
            Du moins au plus cher
          </label>
          <label htmlFor="priceMin">
            Prix minimum
            <input
              type="number"
              value={priceMin}
              id="priceMin"
              onChange={(event) => {
                setPriceMin(event.target.value);
              }}
            />
          </label>
          <label htmlFor="priceMax">
            Prix maximum
            <input
              type="number"
              value={priceMax}
              id="priceMax"
              onChange={(event) => {
                setPriceMax(event.target.value);
              }}
            />
          </label>
        </div>
      </nav>
    </>
  );
};

export default Header;
