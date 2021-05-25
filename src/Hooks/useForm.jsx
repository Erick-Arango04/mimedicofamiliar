import { useState } from "react";

export const useForm = (valuesForm = {}) => {
   const [values, setValues] = useState(valuesForm);

   const resetValues = () => {
      setValues(valuesForm);
   };

   const manejadorInput = ({ target }) => {
      let nameInput = target.name;
      let nameValue = target.value;

      const valueExpresion = {
         email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(nameValue),
         password:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(
               nameValue
            ),
         nombre: /^[a-zA-Z\s]{1,40}$/.test(nameValue),
         apellidoPaterno: /^[a-zA-Z\s]{1,20}$/.test(nameValue),
         apellidoMaterno: /^[a-zA-Z\s]{1,20}$/.test(nameValue),
         especialidad: /^[a-zA-Z\s]{1,20}$/.test(nameValue),
         cedula: /^[a-zA-Z\s]{1,20}$/.test(nameValue),
         telefono:
            /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(
               nameValue
            ),
         tipoDeConsulta: /^[a-zA-Z\s]{1,40}$/.test(nameValue),
      };

      setValues({
         ...values,
         [nameInput]: nameValue,
         [`validate_${nameInput}`]: valueExpresion[nameInput],
      });
   };

   return [values, manejadorInput, resetValues];
};
