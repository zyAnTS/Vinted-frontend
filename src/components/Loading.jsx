import React from "react";
import logo from "/src/assets/img/logo.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img src={logo} alt="Logo vinted" />
      Chargement...
    </div>
  );
};

export default Loading;
