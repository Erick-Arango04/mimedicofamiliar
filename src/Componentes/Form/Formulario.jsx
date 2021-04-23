import React from "react";
import Input from "./Input";
// import "./../Styles/Form.css";

const Formulario = () => {
   return (
      <form className="contenedor">
         <Input valor="Especialidad" icono={<i className="ri-user-fill"></i>} />
         <Input
            valor="Estado"
            icono={<i className="ri-user-location-fill"></i>}
         />
         <Input
            valor="Tipo de Consulta"
            icono={<i className="ri-contacts-book-fill"></i>}
         />
         <br />
         <button className="btn-principal">Comenzar</button>
      </form>
   );
};

export default Formulario;
