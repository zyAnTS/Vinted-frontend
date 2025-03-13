import React from "react";

import Input from "./Input";
import axios from "axios";

const LogIn = ({
  email,
  password,
  setEmail,
  setPassword,
  showErrorEmail,
  showErrorPassword,
  setShowErrorEmail,
  setShowErrorPassword,
  setStep,
}) => {
  return (
    <div
      className="formulaire"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <h1>Se Connecter</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          if (email === "") {
            setShowErrorEmail(true);
          } else if (password.length < 9) {
            setShowErrorPassword(true);
          } else {
            setShowErrorEmail(false);
            setShowErrorPassword(false);
            await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/login"
            );
            alert("Connected !");
          }
        }}
      >
        <Input
          label="Email"
          id="email-login"
          type="email"
          value={email}
          set={setEmail}
          showError={showErrorEmail}
          errorMessage="Veuillez renseigner un email"
        />
        <Input
          label="Mot de passe"
          id="password-login"
          type="password"
          value={password}
          set={setPassword}
          showError={showErrorPassword}
          errorMessage="Votre mot de passe doit faire 8 caractères minimum"
        />

        <button className="button-prim" type="submit">
          Se connecter
        </button>
      </form>
      <button
        onClick={() => {
          setStep("SignUp");
        }}
      >
        Pas encore de compte ? Inscrivez-vous
      </button>
    </div>
  );
};

export default LogIn;
