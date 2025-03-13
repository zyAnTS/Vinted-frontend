import React from "react";
import { useState } from "react";
import "/src/assets/styles/authentication.css";

import SignUp from "./SignUp";
import LogIn from "./LogIn";

const Authentication = ({ isVisible, setIsVisible }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showErrorUsername, setShowErrorUsername] = useState(false);
  const [showErrorEmail, setShowErrorEmail] = useState(false);
  const [showErrorPassword, setShowErrorPassword] = useState(false);

  const [step, setStep] = useState("LogIn");

  return (
    <>
      <div
        className={!isVisible ? "form-modal" : "form-hide"}
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <div>
          <button>X</button>
          <div className={step === "SignUp" ? "form-show" : "form-hide"}>
            <SignUp
              username={username}
              email={email}
              password={password}
              setUsername={setUsername}
              setEmail={setEmail}
              setPassword={setPassword}
              showErrorUsername={showErrorUsername}
              showErrorEmail={showErrorEmail}
              showErrorPassword={showErrorPassword}
              setShowErrorUsername={setShowErrorUsername}
              setShowErrorEmail={setShowErrorEmail}
              setShowErrorPassword={setShowErrorPassword}
              setStep={setStep}
            />
          </div>
          <div className={step === "LogIn" ? "form-show" : "form-hide"}>
            <LogIn
              username={username}
              email={email}
              password={password}
              setUsername={setUsername}
              setEmail={setEmail}
              setPassword={setPassword}
              showErrorUsername={showErrorUsername}
              showErrorEmail={showErrorEmail}
              showErrorPassword={showErrorPassword}
              setShowErrorUsername={setShowErrorUsername}
              setShowErrorEmail={setShowErrorEmail}
              setShowErrorPassword={setShowErrorPassword}
              setStep={setStep}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
