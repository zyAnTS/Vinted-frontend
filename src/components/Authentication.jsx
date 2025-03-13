import React from "react";
import { useState } from "react";
import "/src/assets/styles/authentication.css";

import axios from "axios";

import Input from "./Input";

const Authentication = ({ isVisible, setIsVisible }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showErrorUsername, setShowErrorUsername] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);

  const [formOk, setFormOk] = useState(false);

  return (
    <>
      <div
        className={!isVisible ? "modal" : "hide"}
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <div>
          <button>X</button>
          <div
            className="formulaire"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <h1>S'inscrire</h1>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (username === "") {
                  setShowErrorUsername(true);
                } else if (email === "") {
                  setShowErrorEmail(true);
                } else if (password.length < 9) {
                  setShowErrorPassword(true);
                } else {
                  setShowErrorUsername(false);
                  setShowErrorEmail(false);
                  setShowErrorPassword(false);
                  setFormOk(true);
                  alert("Account created !");
                }
              }}
            >
              <Input
                label="Nom d'utilisateur"
                id="name"
                type="text"
                value={username}
                set={setUsername}
                showError={showErrorUsername}
                errorMessage="Veuillez renseigner un nom"
              />
              <Input
                label="Email"
                id="email"
                type="email"
                value={email}
                set={setEmail}
                showError={showErrorEmail}
                errorMessage="Veuillez renseigner un email"
              />
              <Input
                label="Mot de passe"
                id="password"
                type="password"
                value={password}
                set={setPassword}
                showError={showErrorPassword}
                errorMessage="Votre mot de passe doit faire 8 caractères minimum"
              />
              <label className="newsletter">
                <input
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                  className="checkbox"
                />
                <span>S'inscrire à la newsletter</span>
              </label>

              <p>
                En vous inscrivant, vous confirmez avoir lu et accepté les
                Termes & Conditions et Politique de Confidentialité de Vinted.
                Vous confirmez avoir au moins 18 ans.
              </p>

              <button className="button-prim" type="submit">
                Register
              </button>
            </form>
            <button>Vous avez déjà un compte ? Connectez-vous</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
