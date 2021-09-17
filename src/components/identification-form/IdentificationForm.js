import React, { useState } from "react";
import Button from "./button/Button";
import Input from "./input/Input";
import Link from "./link/Link";
import "./identification-form.scss";
import Tabs from "./tabs/Tabs";
import Tab from "./tabs/Tab";
import Form from "./Form/Form";

const IdentificationForm = () => {
  const [registerForm, setRegisterForm] = useState(false);

  const tabHandler = () => {
    setRegisterForm(!registerForm);
  };

  if (registerForm) {
    return (
      <div className="identification-container">
        <div className="register-or-login">
          <Tab onClick={tabHandler}>Inscription</Tab>
          <Tab onClick={tabHandler}>Connexion</Tab>
        </div>
        <Form form="register" />
        <div className="links">
          <Link content="Vous avez déjà un compte ?" />
        </div>
      </div>
    );
  } else {
    return (
      <div className="identification-container">
        <div className="register-or-login">
          <Tab onClick={tabHandler}>Inscription</Tab>
          <Tab onClick={tabHandler}>Connexion</Tab>
        </div>
        <Form form="login" />
        <div className="links">
          <Link content="Mot de passe oublié ?" />
          <Link content="Pas encore de compte ?" />
        </div>
      </div>
    );
  }
};

export default IdentificationForm;