import React from "react";
// import PropTypes from "prop-types";
import "../Styles/CardPrincipal.css";

const CardIu = ({ imagen, titulo, descripcion }) => {
   return (
      <>
         <article className="card">
            <h2>{titulo}</h2>
            <hr />
            <div className="img">
               <img src={imagen} alt="" />
            </div>
            <p>{descripcion}</p>
         </article>
      </>
   );
};

export default CardIu;
