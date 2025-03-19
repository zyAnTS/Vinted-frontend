import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "/src/assets/styles/payment.css";

const CheckoutForm = ({ title, price }) => {
  // Permet de faire une requête à Stripe pour confirmer le paiement
  const stripe = useStripe();
  // Permet de récupérer le contenu des inputs
  const elements = useElements();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const total = price + 1.77;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // On commence à charger
    setIsLoading(true);

    if (elements == null) {
      return;
    }

    // Vérification et validation des infos entrées dans les inputs
    const { error: submitError } = await elements.submit();
    if (submitError) {
      // Affiche l'erreur en question
      setErrorMessage(submitError.message);
      return;
    }

    // Demande au backend de créer l'intention de paiement, il nous renvoie le clientSecret
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/v2/payment",
      { title, amount: price }
    );

    const clientSecret = response.data.client_secret;

    // Requête à Stripe pour valider le paiement
    const stripeResponse = await stripe.confirmPayment({
      // elements contient les infos et la configuration du paiement
      elements,
      clientSecret,
      // Éventuelle redirection
      confirmParams: {
        return_url: "http://localhost:5173/",
      },
      // Bloque la redirections
      redirect: "if_required",
    });

    // Si une erreur a lieu pendant la confirmation
    if (stripeResponse.error) {
      // On la montre au client
      setErrorMessage(stripeResponse.error.message);
    }

    // Si on reçois un status succeeded on fais passer completed à true
    if (stripeResponse.paymentIntent.status === "succeeded") {
      setCompleted(true);
    }
    // On a fini de charger
    setIsLoading(false);
  };

  return completed ? (
    <div className="sell">
      <div className="form-payment">
        <h3>Paiement effectué</h3>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Retourner à l'accueil
        </button>
      </div>
    </div>
  ) : (
    <div className="sell">
      <div className="form-payment">
        <p>Résumé de la commande</p>
        <div className="row">
          <p>Commande</p>
          <p>{price} €</p>
        </div>
        <div className="row">
          <p>Frais de protection acheteurs</p>
          <p>0.59 €</p>
        </div>
        <div className="row">
          <p>Frais de port</p>
          <p>1.18 €</p>
        </div>
        <div className="total">
          <p>Total</p>
          <p>{total} €</p>
        </div>

        <div className="edito-payment">
          <p>
            Il ne vous reste plus qu'une étape pour vous offrir{" "}
            <span>{title}</span>. Vous allez payer <span>{total} €</span> (Frais
            de protection et frais de port inclus).
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <button
            type="submit"
            className="button-prim"
            disabled={!stripe || !elements || isLoading}
          >
            Payer
          </button>
          {errorMessage && <div>{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
