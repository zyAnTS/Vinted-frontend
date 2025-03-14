import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Loading from "../components/Loading";
import Picture_modal from "../components/picture_modal";

import "/src/assets/styles/offer.css";

const Offer = () => {
  const { id } = useParams();
  //   console.log(params); // {id: '777'}
  console.log(id);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers/" + id
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <>
      <Loading />
    </>
  ) : (
    <main>
      <div className="container">
        <div className="col1">
          <div className="main-picture">
            <Picture_modal elem={data.product_pictures[0]} />
          </div>
          <div className="pictures">
            {data.product_pictures.slice(1).map((elem) => {
              return <Picture_modal elem={elem} />;
            })}
          </div>
        </div>
        <div className="col2">
          <p className="price">{data.product_price} €</p>
          <div className="details">
            <div className="col1">
              {data.product_details[0].MARQUE && <p>MARQUE :</p>}
              {data.product_details[0].TAILLE && <p>TAILLE :</p>}
              {data.product_details[0].ÉTAT && <p>ETAT :</p>}
              {data.product_details[0].COULEUR && <p>COULEUR :</p>}
              {data.product_details[0].EMPLACEMENT && <p>EMPLACEMENT :</p>}
              <p>MODE DE PAIEMENT :</p>
            </div>
            <div className="col2">
              {data.product_details[0].MARQUE && (
                <p>{data.product_details[0].MARQUE}</p>
              )}
              {data.product_details[0].TAILLE && (
                <p>{data.product_details[0].TAILLE}:</p>
              )}
              {data.product_details[0].ÉTAT && (
                <p>{data.product_details[0].ÉTAT}</p>
              )}
              {data.product_details[0].COULEUR && (
                <p>{data.product_details[0].COULEUR}</p>
              )}
              {data.product_details[0].EMPLACEMENT && (
                <p>{data.product_details[0].EMPLACEMENT}</p>
              )}
              <p>Paypal</p>
            </div>
          </div>
          {data.product_name && <h2>{data.product_name}</h2>}
          {data.product_description && <p>{data.product_description}</p>}
          <div className="seller-offer">
            <span>Vendu par :</span>
            <div className="seller">
              {data.owner.account.avatar.url && (
                <img src={data.owner.account.avatar.url} alt="" />
              )}
              {data.owner.account.username && (
                <p>{data.owner.account.username}</p>
              )}
            </div>
          </div>
          <button className="button-prim">Ajouter au panier</button>
        </div>
      </div>
    </main>
  );
};

export default Offer;
