import React, { useEffect, useRef } from "react";

const Input = (props) => {
   const refInput = useRef();
   const { current: inputValidacion } = refInput;

   const {
      value,
      placeholder,
      name,
      manejadorInput,
      icono,
      tipo = "text",
      mensaje = "",
   } = props;

   useEffect(() => {
      // resetea el borde del input cuando esta en vacio
      if (value[name] === "" && inputValidacion) {
         inputValidacion.style = " border:none";
      }
   });

   const validacion = () => {
      if (value[`validate_${name}`]) {
         inputValidacion.style = "  border: 2px solid #86eb59;";
      } else {
         if (value[name].length > 0) {
            inputValidacion.style = "  border: 2px solid #fb0101;";
         }
      }
   };

   return (
      <>
         <section className="contenedorInput">
            <input
               ref={refInput}
               value={value[name]}
               className="inputFotm"
               type={tipo}
               autoComplete="off"
               name={name}
               onChange={manejadorInput}
               placeholder={placeholder}
               onKeyUp={validacion}
            />
            {icono}
         </section>
         {!value[`validate_${name}`] && value[name].length > 0 && (
            <div className="tooltip-box">
               {mensaje.map((mensaje, i) => (
                  <p key={i}>{mensaje}</p>
               ))}
            </div>
         )}
      </>
   );
};

export default Input;
