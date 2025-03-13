import React from "react";
import visual from "/src/assets/banner.jpg";
import tear from "/src/assets/tear.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={visual} alt="" />
      <div className="container">
        <div className="marketing">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <button className="button-prim">Vends maintenant</button>
          <button>Découvrir comment ça marche</button>
        </div>
        <div className="tear">
          <img src={tear} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
