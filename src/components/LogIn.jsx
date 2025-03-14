import React, { useState } from "react";
import Cookies from "js-cookie";

import Input from "./Input";
import axios from "axios";

const LogIn = ({
  email,
  password,
  setEmail,
  setPassword,
  errorEmail,
  errorPassword,
  errorMessage,
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
      <h1>Bienvenue</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (email === "") {
            setErrorEmail(true);
          } else if (password.length < 9) {
            setErrorPassword(true);
          } else {
            setErrorEmail(false);
            setErrorPassword(false);
            try {
              const response = await axios.post(
                "https://lereacteur-vinted-api.herokuapp.com/user/login",
                {
                  email: email,
                  password: password,
                }
              );
              console.log(response.data);
              if (response.data.token) {
                Cookies.set("token", response.data.token);
                setUserToken(response.data.token);
                setErrorMessage(false);
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

        {errorMessage && (
          <p className="error">Email ou mot de passe incorrect</p>
        )}
        <button className="button-prim" type="submit">
          Se connecter
        </button>
      </form>
      <button
        onClick={() => {
          setErrorMessage(false);
          setStep("SignUp");
        }}
      >
        Pas encore de compte ? Inscrivez-vous
      </button>
    </div>
  );
};

export default LogIn;
