import React from "react";

import { Link, useNavigate } from "react-router-dom";
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
}) => {
  const navigate = useNavigate();
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

            <button
              className="button-prim"
              onClick={() => {
                {
                  userToken ? navigate("/publish") : setIsVisible(!isVisible);
                }
              }}
            >
              Vendez vos articles
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
