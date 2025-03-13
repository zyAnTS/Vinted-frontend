import React from "react";
import { Link } from "react-router-dom";

const Product_card = ({ elem }) => {
  return (
    <article>
      <Link className="no-decoration" to={`/offer/${elem._id}`}>
        <div className="product-img">
          <img src={elem.product_image.url} alt="" />
          <div className="favorite">
            <i className="fa-regular fa-heart"></i>
          </div>
          <div className="seller">
            {/* {elem.owner.account.avatar.url && (
              <img src={elem.owner.account.avatar.url} alt="" />
            )} */}
            <p>{elem.owner.account.username}</p>
          </div>
        </div>
        <div className="product-text">
          <p>{elem.product_details[0].MARQUE}</p>
          <p>{elem.product_description}</p>
          <span>{elem.product_price} €</span>
        </div>
      </Link>
    </article>
  );
};

export default Product_card;
