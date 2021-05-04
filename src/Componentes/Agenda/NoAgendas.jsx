import React from "react";
const img = require.context("../../Img", true);
const NoAgendas = () => {
   return (
      <section>
         <h1 className="agendaH1">¡¡ UPSS !! </h1>
         <h2>No hay resultados que mostrar </h2>
         <figure>
            <img src={img("./pantalla-azul.svg").default} alt="" />{" "}
         </figure>
         <p className="pAgenda">
            <span> Agenda una cita</span> y vuelve aqui o presiona el{" "}
            <span> boton para realizar una.</span>
         </p>
         <button className="btn-principal seconbtn">
            Ir <i className="ri-arrow-right-line"></i>
         </button>
      </section>
   );
};

export default NoAgendas;
