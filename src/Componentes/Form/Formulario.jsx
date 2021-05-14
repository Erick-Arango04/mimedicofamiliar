import React from "react";
import { useForm } from "../../Hooks/useForm";
import Input from "./Input";

const valuesForm = {
   especialidad: "",
   estado: "",
   tipoDeConsulta: "",
   validate_especialidad: false,
   validate_estado: false,
   validate_tipoDeConsulta: false,
};
const Formulario = () => {
   const [values, manejadorInput, reset] = useForm(valuesForm);
   return (
      <form className="contenedor">
         <Input
            value={values}
            placeholder="Especialidad"
            name="especialidad"
            manejadorInput={manejadorInput}
            icono={<i className="ri-user-fill"></i>}
            mensaje={["solo se admiten letras"]}
         />
         <Input
            value={values}
            placeholder="Estado"
            name="estado"
            manejadorInput={manejadorInput}
            icono={<i className="ri-user-location-fill"></i>}
            mensaje={["solo se admiten letras"]}
         />

         <Input
            value={values}
            placeholder="Tipo de Consulta"
            name="tipoDeConsulta"
            manejadorInput={manejadorInput}
            icono={<i className="ri-contacts-book-fill"></i>}
            mensaje={["solo se admiten letras"]}
         />
         <br />
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
