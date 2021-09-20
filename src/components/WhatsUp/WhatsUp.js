import React from "react";
import Avatar from "../UI/Avatar/Avatar";
import IconAlone from "../UI/IconAlone/IconAlone";
import Input from "../UI/input/Input";

const WhatsUp = () => {
  const firstName = "Prénom"
  return (
    <>
      <Avatar />
      <Input className="input_container" placeholder= {`Quoi de neuf, ${firstName} ?`} />
      <IconAlone />
    </>
  );
};

export default WhatsUp;
