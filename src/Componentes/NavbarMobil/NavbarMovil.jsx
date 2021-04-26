import React, { useEffect, useState, use, useRef } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavbarMobil.css";

const NavbarMovil = () => {
   const [touch, setTouch] = useState(false);
   const refContent = useRef();

   const isTouch = ({ target }) => {
      if (target.localName === "div" || target.localName === "span") {
         setTouch(!touch);
      }
   };

   useEffect(() => {
      if (touch) {
         refContent.current.style = " width: 100vw";
      } else {
         refContent.current.style = " width: 0";
      }
   }, [touch]);

   return (
      <>
         <div className={`menuMobil  ${touch && "touch"}`} onClick={isTouch}>
            <span></span>
            <span></span>
            <span></span>
         </div>

         <section ref={refContent} className="contentMenu">
            <nav className="menuMostrarMovil">
               <Link exact to="/">
                  Registrarse
               </Link>
               <Link exact to="/">
                  Acceder
               </Link>
               <Link exact to="/">
                  Inicio
               </Link>
               <Link exact to="/">
                  Mi perfil
               </Link>
               <Link exact to="/">
                  Favoritos
               </Link>
               <Link exact to="/">
                  Agenda
               </Link>
            </nav>
         </section>
      </>
   );
};

export default NavbarMovil;
