import React from "react";
import useResizeWindow from "../../Hooks/useResizeWindow";
import Navbar from "../../Routers/NavbarRoute/Navbar";
import Formulario from "../Form/Formulario";
import NavbarMovil from "../NavbarMobil/NavbarMovil";
import "../Styles/Header.css";

const img = require.context("../../Img", true);

const Header = () => {
   // Hook para trabajar el Responsing
   const [widtWindow] = useResizeWindow();

   return (
      <header className="head">
         {/** Los formulario modales de registro se implementan en los menus de navegacion*/}
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
