import { useState } from "react";
import Input from "../Form/Input";

const ConfirmPassword = ({ setConfirmPassword, password, confirmPassword }) => {
   const confirmPass = (e) => {
      if (password.length > 0) {
         setConfirmPassword({
            confirmPassword: e.target.value,
            validate_confirmPassword: e.target.value === password,
         });
      } else {
         setConfirmPassword({
            confirmPassword: "",
            validate_confirmPassword: false,
         });
      }
   };

   return (
      <>
         <Input
            value={confirmPassword}
            placeholder="Confirm Password"
            name="confirmPassword"
            tipo="password"
            mensaje={["Las contraseñas deben de coincidir"]}
            manejadorInput={confirmPass}
            icono={<i className="ri-lock-password-fill"></i>}
         />
      </>
   );
};

export default ConfirmPassword;
