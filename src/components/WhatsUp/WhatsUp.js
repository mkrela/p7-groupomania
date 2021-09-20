import React from "react";
import Avatar from "../UI/Avatar/Avatar";
import IconAlone from "../UI/IconAlone/IconAlone";
import Input from "../UI/input/Input";
import { faImages, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const WhatsUp = () => {
  const firstName = "Francesca"
  return (
    <>
      <Avatar />
      <Input className="input_container" placeholder= {`Quoi de neuf, ${firstName} ?`} icon1={faImages} icon2={faPaperPlane} />
      <IconAlone />
    </>
  );
};

export default WhatsUp;
