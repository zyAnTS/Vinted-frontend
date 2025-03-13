import React from "react";

import Input from "./Input";
import axios from "axios";

const SignUp = ({
  username,
  email,
  password,
  setUsername,
  setEmail,
  setPassword,
  showErrorUsername,
  showErrorEmail,
  showErrorPassword,
  setShowErrorUsername,
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
      <h1>S'inscrire</h1>
      <form
        onSubmit={async (event) => {
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
            await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/signup"
            );
            alert("Account created !");
          }
        }}
      >
        <Input
          label="Nom d'utilisateur"
          id="name-signup"
          type="text"
          value={username}
          set={setUsername}
          showError={showErrorUsername}
          errorMessage="Veuillez renseigner un nom"
        />
        <Input
          label="Email"
          id="email-signup"
          type="email"
          value={email}
          set={setEmail}
          showError={showErrorEmail}
          errorMessage="Veuillez renseigner un email"
        />
        <Input
          label="Mot de passe"
          id="password-signup"
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
          En vous inscrivant, vous confirmez avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Vous confirmez
          avoir au moins 18 ans.
        </p>

        <button className="button-prim" type="submit">
          S'inscrire
        </button>
      </form>
      <button
        onClick={() => {
          setStep("LogIn");
        }}
      >
        Vous avez déjà un compte ? Connectez-vous
      </button>
    </div>
  );
};

export default SignUp;
