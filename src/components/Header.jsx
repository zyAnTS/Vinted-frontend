import React from "react";
import { Link } from "react-router-dom";

import logo from "/src/assets/img/logo.svg";
import search from "/src/assets/img/search.png";
import "/src/assets/styles/header.css";

const Header = ({ isVisible, setIsVisible }) => {
  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <img src={logo} alt="Logo Vinted" />
          </Link>
          <div className="search">
            <img src={search} alt="" />
            <input type="text" placeholder="Rechercher des articles" />
          </div>
          <div className="button-header">
            <button
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            >
              S'inscrire | Se connecter
            </button>
            <button className="button-prim">Vends tes articles</button>
          </div>
        </div>
      </header>
      {/* <nav>
        <div className="container">
          <Link to="/offer" className="link">
            Offer
          </Link>
        </div>
      </nav> */}
    </>
  );
};

export default Header;
