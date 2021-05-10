import React from "react";

const InputConfirmPasswoedput = ({
   placeholder,
   name,
   confirmPassword,
   icono,
   contraseña,
   setconfirmPassword,
}) => {
   let claseMensaje = "mensaje";

   if (contraseña.length > 2 && confirmPassword.length > 2) {
      if (contraseña === confirmPassword) {
         claseMensaje += " correcto";
      } else {
         claseMensaje += " falso";
      }
   }

   return (
      <>
         <div className={claseMensaje}>
            {contraseña === confirmPassword ? (
               <h6>las contraseñas son iguales</h6>
            ) : (
               <h6>contraseñas diferentes</h6>
            )}
         </div>
         <section className="contenedorInput">
            <input
               value={confirmPassword}
               className="inputFotm"
               type="text"
               // type="password"
               name={name}
               onChange={(e) => setconfirmPassword(e.target.value)}
               placeholder={placeholder}
            />
            {icono}
         </section>
      </>
   );
};

export default InputConfirmPasswoedput;
