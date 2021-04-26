import React from "react";
import useResizeWindow from "../../Hooks/useResizeWindow";
import Navbar from "../../Routers/NavbarRoute/Navbar";
import Formulario from "../Form/Formulario";
import NavbarMovil from "../NavbarMobil/NavbarMovil";
import "../Styles/Header.css";

const img = require.context("../../Img", true);

const Header = () => {
   const [widtWindow] = useResizeWindow();

   return (
      <header className="head">
         {widtWindow > 1000 ? <Navbar /> : <NavbarMovil />}

         <section>
            <img src={img("./medico-header.svg").default} alt="" />
            <h1>Mi Médico Familiar</h1>
         </section>
         <Formulario />
      </header>
   );
};

export default Header;
