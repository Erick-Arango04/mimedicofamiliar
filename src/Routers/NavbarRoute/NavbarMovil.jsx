import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Routers/NavbarRoute/Navbar";

const NavbarMovil = () => {
   const [touchMenuMovil, settouchMenuMovil] = useState(false);
   const refContent = useRef();

   const isTouch = ({ target }) => {
      if (target.localName === "div" || target.localName === "i") {
         settouchMenuMovil(!touchMenuMovil);
      }
   };

   useEffect(() => {
      if (touchMenuMovil) {
         refContent.current.style = " width: 100vw";
      } else {
         refContent.current.style = " width: 0";
      }
   }, [touchMenuMovil]);

   return (
      <>
         <div
            className={`menuMobil  ${touchMenuMovil && "touch"}`}
            onClick={isTouch}
         >
            <i className="ri-menu-line"></i>
         </div>

         <section ref={refContent} className="contentMenu">
            <Navbar
               clas="menuMostrarMovil"
               settouchMenuMovil={settouchMenuMovil}
               clastipoUserMobile="tipoUserMobile"
            />
            <button className="btnMovilClose" onClick={isTouch}>
               <i className="ri-close-line"></i>
            </button>
         </section>
      </>
   );
};

export default NavbarMovil;
