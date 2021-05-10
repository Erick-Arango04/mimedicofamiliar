import { useState } from "react";

export const useForm = (valuesForm = {}) => {
   const [values, setValues] = useState(valuesForm);

   const reset = () => {
      setValues(valuesForm);
   };

   const manejadorInput = ({ target }) => {
      let nameInput = target.name;
      let nameValue = target.value;

      const valueExpresion = {
         email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(nameValue),
         password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(
            nameValue
         ),
      };

      setValues({
         ...values,
         [nameInput]: nameValue,
         [`validate_${nameInput}`]: valueExpresion[nameInput],
      });
   };

   return [values, manejadorInput, reset];
};
