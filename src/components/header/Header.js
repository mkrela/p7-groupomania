import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink exact to="/connexion">
        <img className="logo" src="imgs\logos\icon-left-font-monochrome-black.svg" alt="Groupomania" />
      </NavLink>
    </header>
  );
};

export default Header;