import React from "react";
import CardTestimonial from "./CardTestimonial";

import "../Styles/ContenedorTestimonial.css";

const ContenedorTestimonial = () => {
   return (
      <section className="contenedor">
         <h1 className="titulo">
            ¿Qué opinan <br /> de nosotros? <i className="fa fa-users"></i>
         </h1>
         <section className="contenedorCardTest">
            <CardTestimonial />
            <CardTestimonial />
            <CardTestimonial />
            <CardTestimonial />
         </section>
         <button className="btn-principal seconbtn">Opinar</button>
      </section>
   );
};

export default ContenedorTestimonial;
