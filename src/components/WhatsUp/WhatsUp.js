import React from "react";
import Avatar from "../UI/Avatar/Avatar";
import IconAlone from "../UI/IconAlone/IconAlone";
import Input from "../UI/input/Input";
import { faImages, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import WhatsUpForm from "./WhatsUpForm";

const WhatsUp = () => {
  const firstName = "Francesca";
  return (
    <>
      <Avatar />
      <WhatsUpForm
        className={"whatsup__form"}
        placeholder={`Quoi de neuf, ${firstName} ?`}
      />
    </>
  );
};

export default WhatsUp;
