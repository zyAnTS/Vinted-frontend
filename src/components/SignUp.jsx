import React from "react";
import Cookies from "js-cookie";

import Input from "./Input";
import axios from "axios";

const SignUp = ({
  username,
  email,
  password,
  newsletter,
  setUsername,
  setEmail,
  setPassword,
  setNewsletter,
  errorUsername,
  errorEmail,
  errorPassword,
  errorMessage,
  setErrorUsername,
  setErrorEmail,
  setErrorPassword,
  setErrorMessage,
  setStep,
  isVisible,
  setIsVisible,
  setUserToken,
}) => {
  return (
    <div
      className="formulaire"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <h1>Création de compte</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (username === "") {
            setErrorUsername(true);
          } else if (email === "") {
            setErrorEmail(true);
          } else if (password.length < 9) {
            setErrorPassword(true);
          } else {
            setErrorUsername(false);
            setErrorEmail(false);
            setErrorPassword(false);
            try {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/signup",
                {
                  email: email,
                  username: username,
                  password: password,
                  newsletter: newsletter,
                }
              );
              if (response.data.token) {
                Cookies.set("token", response.data.token);
                setUserToken(response.data.token);
                setIsVisible(!isVisible);
              } else {
                setErrorMessage(true);
              }
            } catch (error) {
              setErrorMessage(true);
              console.log(error.message);
            }
          }
        }}
      >
        <Input
          label="Nom d'utilisateur"
          id="name"
          type="text"
          value={username}
          set={setUsername}
          showError={errorUsername}
          errorMessage="Veuillez renseigner un nom"
        />
        <Input
          label="Email"
          id="email"
          type="email"
          value={email}
          set={setEmail}
          showError={errorEmail}
          errorMessage="Veuillez renseigner un email"
        />
        <Input
          label="Mot de passe"
          id="password"
          type="password"
          value={password}
          set={setPassword}
          showError={errorPassword}
          errorMessage="Votre mot de passe doit faire 8 caractères minimum"
        />
        <label className="newsletter">
          <input
            type="checkbox"
            name="newsletter"
            id="newsletter"
            className="checkbox"
            checked={newsletter}
            onChange={() => {
              setNewsletter(!newsletter);
            }}
          />
          <span>S'inscrire à la newsletter</span>
        </label>

        <p>
          En vous inscrivant, vous confirmez avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Vous confirmez
          avoir au moins 18 ans.
        </p>

        {errorMessage && <p className="error">Compte déjà existant</p>}
        <button className="button-prim" type="submit">
          S'inscrire
        </button>
      </form>
      <button
        onClick={() => {
          setErrorMessage(false);
          setStep("LogIn");
        }}
      >
        Vous avez déjà un compte ? Connectez-vous
      </button>
    </div>
  );
};

export default SignUp;
