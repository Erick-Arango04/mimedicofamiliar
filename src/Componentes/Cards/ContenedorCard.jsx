import React from "react";
import CardIu from "./CardIu";

const img = require.context("../../Img", true);

const ContenedorCard = () => {
   return (
      <main className="contenedor">
         <h1 className="titulo">
            Te ofrecemos <i className="ri-service-fill"></i>
         </h1>
         <section className="grid col-fluida">
            <CardIu
               imagen={img("./presentacion.svg").default}
               titulo="Sistema facil de usar"
               descripcion="Lorem ipsum dolor sit amet,
            consectetur adipiscing"
            />
            <CardIu
               imagen={img("./verificado.svg").default}
               titulo="Datos seguros"
               descripcion="Lorem ipsum dolor sit amet,
                   consectetur adipiscing"
            />

            <CardIu
               imagen={img("./gratis.svg").default}
               titulo="Registro sin costo"
               descripcion="Lorem ipsum dolor sit amet,
                   consectetur adipiscing"
            />

            <CardIu
               imagen={img("./medico.svg").default}
               titulo="Doctores especializados"
               descripcion="Lorem ipsum dolor sit amet,
                   consectetur adipiscing"
            />
         </section>
      </main>
   );
};

export default ContenedorCard;
