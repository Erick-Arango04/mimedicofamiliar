import React from "react";
import { useForm } from "../../Hooks/useForm";
import Input from "./Input";

const valuesForm = { especialidad: "", estado: "", tipoDeConsulta: "" };
const Formulario = () => {
   const [values, manejadorInput, reset] = useForm(valuesForm);
   return (
      <form className="contenedor">
         {/*  <Input
            value={values.especialidad}
            placeholder="Especialidad"
            name="especialidad"
            manejadorInput={manejadorInput}
            icono={<i className="ri-user-fill"></i>}
         />
         <Input
            value={values.estado}
            placeholder="Estado"
            name="especialidad"
            manejadorInput={manejadorInput}
            icono={<i className="ri-user-location-fill"></i>}
         />
         <Input
            value={values.tipoDeConsulta}
            placeholder="Tipo de Consulta"
            name="tipoDeConsulta"
            manejadorInput={manejadorInput}
            icono={<i className="ri-contacts-book-fill"></i>}
         />
         <br /> */}
         <button
            className="btn-principal"
            onClick={(e) => {
               e.preventDefault();
               console.log(values);
            }}
         >
            Comenzar
         </button>
      </form>
   );
};

export default Formulario;
