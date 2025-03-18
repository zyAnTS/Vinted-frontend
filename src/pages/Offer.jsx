import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

import Loading from "../components/Loading";
import Picture_modal from "../components/Picture_modal";
import Carousel from "../components/Carousel";

import "/src/assets/styles/offer.css";

const Offer = ({ carouselOffers, userToken, isVisible, setIsVisible }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // https://lereacteur-vinted-api.herokuapp.com/v2 <== Serveur LeReacteur
        // https://site--vinted--mz8pkhlfl2x7.code.run
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
            <Picture_modal elem={data.product_pictures[0]} index={0} />
          </div>
          <div className="pictures">
            {data.product_pictures.slice(1).map((elem, index) => {
              return <Picture_modal elem={elem} index={index} />;
            })}
          </div>
        </div>
        <div className="col2">
          <p className="price">{data.product_price} €</p>
          <div className="details">
            <div className="col1">
              {data.product_details.map((elem, index) => {
                return (
                  <>
                    {elem.MARQUE && <p key={elem.MARQUE + index}>MARQUE :</p>}
                    {elem.TAILLE && <p key={elem.TAILLE + index}>TAILLE :</p>}
                    {elem.ÉTAT && <p key={elem.ÉTAT + index}>ETAT :</p>}
                    {elem.COULEUR && (
                      <p key={elem.COULEUR + index}> COULEUR :</p>
                    )}
                    {elem.EMPLACEMENT && (
                      <p key={elem.EMPLACEMENT + index}>EMPLACEMENT :</p>
                    )}
                    {elem["MODES DE PAIEMENT"] && (
                      <p key={elem["MODES DE PAIEMENT"] + index}>
                        MODES DE PAIEMENT :
                      </p>
                    )}
                  </>
                );
              })}
            </div>
            <div className="col2">
              {data.product_details.map((elem, index) => {
                return (
                  <>
                    {elem.MARQUE && (
                      <p key={elem.MARQUE + index}>{elem.MARQUE}</p>
                    )}
                    {elem.TAILLE && (
                      <p key={elem.TAILLE + index}>{elem.TAILLE}</p>
                    )}
                    {elem.ÉTAT && <p key={elem.ÉTAT + index}>{elem.ÉTAT}</p>}
                    {elem.COULEUR && (
                      <p key={elem.COULEUR + index}>{elem.COULEUR}</p>
                    )}
                    {elem.EMPLACEMENT && (
                      <p key={elem.EMPLACEMENT + index}>{elem.EMPLACEMENT}</p>
                    )}
                    {elem["MODES DE PAIEMENT"] && (
                      <p key={elem["MODES DE PAIEMENT"] + index}>
                        {elem["MODES DE PAIEMENT"]}
                      </p>
                    )}
                  </>
                );
              })}
            </div>
          </div>
          {data.product_name && <h2>{data.product_name}</h2>}
          {data.product_description && <p>{data.product_description}</p>}
          <div className="seller-offer">
            <span>Vendu par :</span>
            <div className="seller">
              {data.owner.account.avatar && (
                <img src={data.owner.account.avatar.secure_url} alt="" />
              )}
              {data.owner.account.username && (
                <p>{data.owner.account.username}</p>
              )}
            </div>
          </div>
          <button
            className="button-prim"
            onClick={() => {
              {
                userToken
                  ? navigate("/payment", {
                      state: {
                        title: data.product_name,
                        price: data.product_price,
                      },
                    })
                  : setIsVisible(!isVisible);
              }
            }}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
      <div className="container">
        <Carousel carouselOffers={carouselOffers} />
      </div>
    </main>
  );
};

export default Offer;
