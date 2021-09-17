import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink exact to="/connexion">
        <img className="logo" src="public\imgs\logos\icon-left-font-monochrome-black.png" alt="Groupomania" />
      </NavLink>
    </header>
  );
};

export default Header;