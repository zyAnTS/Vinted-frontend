import React from "react";
import { useState } from "react";

const Picture_modal = ({ elem }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <img src={elem.url} alt="Photo du produit" onClick={handleClicked} />
      <div className={isClicked ? "modal" : "hide"} onClick={handleClicked}>
        <img src={elem.url} alt="Grande photo du produit" />
      </div>
    </>
  );
};

export default Picture_modal;
