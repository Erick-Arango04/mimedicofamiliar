import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Routers/NavbarRoute/Navbar";

const NavbarMovil = () => {
   const [touch, setTouch] = useState(false);
   const refContent = useRef();

   const isTouch = ({ target }) => {
      if (target.localName === "div" || target.localName === "i") {
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
            <i class="ri-menu-line"></i>
         </div>

         <section ref={refContent} className="contentMenu">
            <Navbar clas="menuMostrarMovil" setTouch={setTouch} />
            <button className="btnMovilClose" onClick={isTouch}>
               <i class="ri-close-line"></i>
            </button>
         </section>
      </>
   );
};

export default NavbarMovil;
