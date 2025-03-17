import React, { useState } from "react";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [place, setPlace] = useState("");
  const [price, setPrice] = useState("");
  const [trade, setTrade] = useState(false);

  return (
    <>
      <form>
        <h1>Vends ton article</h1>
        <div className="form-block">
          <input type="file" />
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
            <input
              type="text"
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
          <label htmlFor="place">
            Lieu
            <input
              type="text"
              value={place}
              id="place"
              placeholder="Ex: Paris"
              onChange={(event) => {
                setPlace(event.target.value);
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
          <label htmlFor="trade">
            <input
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
        <button>Ajouter</button>
      </form>
    </>
  );
};

export default Publish;
