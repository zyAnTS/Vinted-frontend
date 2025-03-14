import React from "react";
import { useState } from "react";
import "/src/assets/styles/authentication.css";

import SignUp from "./SignUp";
import LogIn from "./LogIn";

const Authentication = ({ isVisible, setIsVisible, setUserToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const [errorUsername, setErrorUsername] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [step, setStep] = useState("LogIn");

  return (
    <>
      <div
        className={isVisible ? "form-modal" : "form-hide"}
        onClick={() => {
          setUsername("");
          setEmail("");
          setPassword("");
          setErrorUsername(false);
          setErrorEmail(false);
          setErrorPassword(false);
          setErrorMessage(false);
          setStep("logIn");
          setIsVisible(!isVisible);
        }}
      >
        <div>
          <button>X</button>
          {step === "SignUp" ? (
            <div className="form-show">
              <SignUp
                username={username}
                email={email}
                password={password}
                newsletter={newsletter}
                setUsername={setUsername}
                setEmail={setEmail}
                setPassword={setPassword}
                setNewsletter={setNewsletter}
                errorUsername={errorUsername}
                errorEmail={errorEmail}
                errorPassword={errorPassword}
                errorMessage={errorMessage}
                setErrorUsername={setErrorUsername}
                setErrorEmail={setErrorEmail}
                setErrorPassword={setErrorPassword}
                setErrorMessage={setErrorMessage}
                setStep={setStep}
                setUserToken={setUserToken}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
              />
            </div>
          ) : (
            <div className="form-show">
              <LogIn
                username={username}
                email={email}
                password={password}
                setUsername={setUsername}
                setEmail={setEmail}
                setPassword={setPassword}
                errorUsername={errorUsername}
                errorEmail={errorEmail}
                errorPassword={errorPassword}
                errorMessage={errorMessage}
                setErrorUsername={setErrorUsername}
                setErrorEmail={setErrorEmail}
                setErrorPassword={setErrorPassword}
                setErrorMessage={setErrorMessage}
                setStep={setStep}
                setUserToken={setUserToken}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Authentication;
