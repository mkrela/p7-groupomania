import React from "react";
import Button from "../button/Button";
import Input from "../../UI/input/Input";
import "./Form.scss";
import { v4 as uuidv4 } from 'uuid';

const Form = ({ form }) => {
    return (
      <form className="form">
          {form === "register" ? 
          <>
          <Input key={uuidv4()} className="input_container" type="text" placeholder="Prénom" id="firstname" name="firstname" min="2" max="40" />
          <Input key={uuidv4()} className="input_container" type="text" placeholder="Nom" id="lastname" name="lastname" min="2" max="60" />
          <Input key={uuidv4()} className="input_container" type="email" placeholder="Votre adresse mail" id="email" name="email" />
          <Input key={uuidv4()} className="input_container" type="password" placeholder="Mot de passe" id="password" name="password" min="10" max="32" />
          <Input key={uuidv4()} className="input_container" type="password" placeholder="Confirmez le mot de passe" id="verify-password" name="verify-password" min="10" max="32" />
          <Button name="Inscription" />
        </>
        :
        <>
        <Input key={uuidv4()} className="input_container" type="email" placeholder="Adresse mail" id="email" name="email" min="2" max="40" />
        <Input key={uuidv4()} className="input_container" type="password" placeholder="Mot de passe" id="password" name="password" min="10" max="32" />
        <Button name="Connexion" />
        </>
        }
      </form>
    );

  }

export default Form; 