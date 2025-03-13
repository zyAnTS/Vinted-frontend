import React from "react";
import { Link } from "react-router-dom";

import logo from "/src/assets/logo.svg";
import "/src/assets/styles/header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <img src={logo} alt="Logo Vinted" />
          </Link>
          <input type="text" placeholder="Rechercher des articles" />
          <button>S'inscrire | Se connecter</button>
          <button className="button-prim">Vends tes articles</button>
        </div>
      </header>
      <nav>
        <div className="container">
          <Link to="/offer" className="link">
            Offer
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
