import React from "react";
import "../Styles/Input.css";

const Input = ({ valor, icono }) => {
   return (
      <section className="contenedorInput">
         <input className="inputFotm" type="text" placeholder={valor} />
         {icono}
      </section>
   );
};

export default Input;
