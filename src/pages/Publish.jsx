import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish = ({ userToken }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [trade, setTrade] = useState(false);

  const navigate = useNavigate();

  return userToken ? (
    <>
      <div className="sell">
        <div className="container">
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              const formData = new FormData(); // n'oubliez pas les parenthèses !
              formData.append("title", title);
              formData.append("picture", file);
              formData.append("description", description);
              formData.append("brand", brand);
              formData.append("size", size);
              formData.append("color", color);
              formData.append("condition", condition);
              formData.append("city", city);
              formData.append("price", price);
              formData.append("trade", trade);

              try {
                const response = await axios.post(
                  "https://site--vinted--mz8pkhlfl2x7.code.run/offer/publish",
                  formData,
                  {
                    headers: {
                      authorization: "Bearer " + userToken, // récupéré grâce aux cookies ou au state userToken
                      "Content-Type": "multipart/form-data",
                    },
                  }
                );
                console.log(response.data);
              } catch (error) {
                console.log(error.response);
              }
            }}
          >
            <h1>Vendez vos articles</h1>
            <div className="form-block-file">
              <input
                type="file"
                multiple={true}
                onChange={async (event) => {
                  setFile(event.target.files);
                }}
              />
              <button>Ajouter une photo</button>
            </div>
            <div className="form-block">
              <label htmlFor="title">
                Titre de votre annonce
                <input
                  type="text"
                  value={title}
                  id="title"
                  placeholder="Ex: chemise Sézane verte"
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </label>
              <label htmlFor="description">
                Décrivez votre article
                <textarea
                  row="5"
                  value={description}
                  id="description"
                  placeholder="Ex: porté quelquefois, taille correctement"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="form-block">
              <label htmlFor="brand">
                Marque
                <input
                  type="text"
                  value={brand}
                  id="brand"
                  placeholder="Ex: Zara"
                  onChange={(event) => {
                    setBrand(event.target.value);
                  }}
                />
              </label>
              <label htmlFor="size">
                Taille
                <input
                  type="text"
                  value={size}
                  id="size"
                  placeholder="Ex: L / 40 / 12"
                  onChange={(event) => {
                    setSize(event.target.value);
                  }}
                />
              </label>
              <label htmlFor="color">
                Couleur
                <input
                  type="text"
                  value={color}
                  id="color"
                  placeholder="Ex: fushia"
                  onChange={(event) => {
                    setColor(event.target.value);
                  }}
                />
              </label>
              <label htmlFor="condition">
                Etat
                <input
                  type="text"
                  value={condition}
                  id="condition"
                  placeholder="Ex: neuf avec étiquette"
                  onChange={(event) => {
                    setCondition(event.target.value);
                  }}
                />
              </label>
              <label htmlFor="city">
                Lieu
                <input
                  type="text"
                  value={city}
                  id="city"
                  placeholder="Ex: Paris"
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                />
              </label>
            </div>
            <div className="form-block">
              <label htmlFor="price">
                Prix
                <input
                  type="text"
                  value={price}
                  id="price"
                  placeholder="0,00 €"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </label>
              <label className="checkbox-label" htmlFor="trade">
                <input
                  className="checkbox"
                  type="checkbox"
                  value={trade}
                  id="trade"
                  onChange={() => {
                    setTrade(!trade);
                  }}
                />
                Je suis intéressé(e) par les échanges
              </label>
            </div>
            <button className="button-prim">
              Mettre votre article en ligne
            </button>
          </form>
        </div>
      </div>
    </>
  ) : (
    navigate("/")
  );
};

export default Publish;
