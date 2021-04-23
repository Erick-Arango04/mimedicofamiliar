import React from "react";
import Formulario from "../Form/Formulario";
import "./../Styles/Header.css";

const img = require.context("../../Img", true);

const Header = () => {
   return (
      <header className="head">
         <img src={img("./medico-header.svg").default} alt="" />
         <h1>Mi Médico Familiar</h1>
         <Formulario />
      </header>
   );
};

export default Header;
