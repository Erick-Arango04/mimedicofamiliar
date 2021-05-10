import React from "react";

const Input = ({
   placeholder,
   name,
   value,
   tipo = "text",
   icono,
   manejadorInput,
}) => {
   let claseMensaje = "mensaje";

   if (value[`validate_${name}`]) {
      claseMensaje += " correcto";
   } else {
      if (value[name].length > 2) {
         claseMensaje += " falso";
      }
   }

   return (
      <>
         <div className={claseMensaje}>
            {value[`validate_${name}`] ? (
               <h6> formato correcto</h6>
            ) : (
               <h6>formato no valido</h6>
            )}
         </div>
         <section className="contenedorInput">
            <input
               value={value.name}
               className="inputFotm"
               type={tipo}
               autoComplete="off"
               name={name}
               onChange={manejadorInput}
               placeholder={placeholder}
            />
            {icono}
         </section>
      </>
   );
};

export default Input;
