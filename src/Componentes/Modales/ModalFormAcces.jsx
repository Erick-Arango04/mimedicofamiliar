import { useState } from "react";
import {
   login,
   recuperarContraseña,
} from "../../config-firebase/funciones_firebase";
import { useForm } from "../../Hooks/useForm";
import Input from "../Form/Input";
const img = require.context("../../Img", true);

const valuesForm = {
   email: "",
   password: "",
   validate_email: false,
   validate_password: false,
};

const ModalFormAcces = ({ isOpen, closeModal }) => {
   const [values, manejadorInput, resetValues] = useForm(valuesForm);
   const { email, password, validate_email, validate_password } = values;
   const [mensajeError, setmensajeError] = useState(false);

   const accionBoton = (e) => {
      e.preventDefault();
      if (validate_email && validate_password) {
         setmensajeError(false);
         login(email, password);
      } else {
         setmensajeError(true);
      }
   };

   const resetAndClose = () => {
      resetValues();
      setmensajeError(false);
      closeModal();
   };

   return (
      <section
         className={`modal ${isOpen && "mostrar"}`}
         onClick={() => resetAndClose()}
      >
         {/* evitar que se cierre el modal al tocar el hijo  */}
         <article onClick={(e) => e.stopPropagation()}>
            <figure>
               <img src={img("./doctorConsulta.svg").default} alt="" />
            </figure>
            <h1 className="tituloMenu">Bienvenido</h1>
            <h2>¡Te estabamos esperando!</h2>
            <section className="contentLogBtn">
               <div className="btnLog">
                  <img src={img("./google.svg").default} alt="" />
                  Google
               </div>
               <div className="btnLog">
                  <img src={img("./facebook.svg").default} alt="" />
                  Facebook
               </div>
            </section>
            <Input
               value={values}
               name="email"
               placeholder="Email"
               mensaje={["ejemplo User234@gmail.com"]}
               manejadorInput={manejadorInput}
               icono={<i className="ri-mail-fill"></i>}
            />
            <br />
            <Input
               value={values}
               name="password"
               placeholder="Password"
               tipo="password"
               mensaje={[
                  "Minimo 8 caracteres",
                  "Maximo 15",
                  "Al menos una letra mayúscula",
                  "Al menos una letra minucula",
                  "Al menos un dígito",
                  "No espacios en blanco",
                  "Al menos 1 caracter especial($@$!%*?&)",
               ]}
               manejadorInput={manejadorInput}
               icono={<i className="ri-lock-password-fill"></i>}
            />
            <br />
            <h4
               className="paswordReset"
               onClick={() => validate_email && recuperarContraseña(email)}
            >
               ¿Olvidaste tu contraseña?
            </h4>
            {mensajeError && (
               <h3 className="red1">
                  No podemos enviar tu informacion, revisa los datos que
                  ingresaste
               </h3>
            )}
            <p className="singIng">Sing in</p>
            <button className="btn-principal seconbtn" onClick={accionBoton}>
               Go <i className="ri-arrow-right-line"></i>
            </button>
            <br />
            <button className="btnMovilClose red" onClick={resetAndClose}>
               <i className="ri-close-line"></i>
            </button>
         </article>
      </section>
   );
};

export default ModalFormAcces;
