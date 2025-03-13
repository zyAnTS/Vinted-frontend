import React from "react";
import { useState } from "react";

import "/src/assets/styles/picture_modal.css";

const Picture_modal = ({ elem }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <img
        src={elem.url}
        alt="Photo du produit"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      />
      <div
        className={isClicked ? "modal" : "hide"}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        <div>
          <button>X</button>
          <img
            src={elem.url}
            alt="Grande photo du produit"
            onClick={(event) => {
              event.stopPropagation();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Picture_modal;
