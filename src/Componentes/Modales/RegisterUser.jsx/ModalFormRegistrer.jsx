import { registrar } from "../../../config-firebase/funciones_firebase";
import { useState } from "react";
import { useForm } from "../../../Hooks/useForm";
import Input from "../../Form/Input";
import ConfirmPassword from "../ConfirmPassword";
const img = require.context("../../../Img", true);

const initialValueForm = {
   email: "",
   password: "",
   validate_email: false,
   validate_password: false,
};

const ModalFormRegistrer = ({ isOpen, closeModal }) => {
   const [values, manejadorInput, resetValues] = useForm(initialValueForm);
   const [mensajeError, setmensajeError] = useState(false);
   const [confirmPassword, setConfirmPassword] = useState({
      confirmPassword: "",
      validate_confirmPassword: false,
   });
   const { email, password, validate_email, validate_password } = values;

   const accionBoton = (e) => {
      e.preventDefault();
      if (
         validate_email &&
         validate_password &&
         confirmPassword.validate_confirmPassword
      ) {
         setmensajeError(false);
         registrar(email, password);
         resetValues();
         closeModal();
      } else {
         setmensajeError(true);
      }
   };

   const resetAndClose = () => {
      resetValues();
      // reseteamos el valor de confirmar contraseña
      setConfirmPassword({
         confirmPassword: "",
         validate_confirmPassword: false,
      });
      setmensajeError(false);
      closeModal();
   };

   return (
      <section
         className={`modal ${isOpen && "mostrar"}`}
         onClick={resetAndClose}
      >
         {/* evitar que se cierre el modal al tocar el hijo  */}
         <article onClick={(e) => e.stopPropagation()}>
            <figure>
               <img src={img("./consulta.svg").default} alt="" />
            </figure>
            <h1 className="tituloMenu">¿Nuevo por aquí?</h1>
            <h2>Estamos ansiosos por atenderte</h2>
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
               placeholder="Email"
               name="email"
               mensaje={["ejemplo User234@gmail.com"]}
               manejadorInput={manejadorInput}
               icono={<i className="ri-mail-fill"></i>}
            />

            <br />
            <Input
               value={values}
               placeholder="Password"
               name="password"
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

            <ConfirmPassword
               confirmPassword={confirmPassword}
               setConfirmPassword={setConfirmPassword}
               password={password}
            />

            <br />

            {mensajeError && (
               <h3 className="red1">
                  No podemos enviar tu informacion, revisa los datos que
                  ingresaste
               </h3>
            )}

            <p className="singIng">Sing in</p>
            <button
               className="btn-principal seconbtn"
               onClick={(e) => accionBoton(e)}
            >
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

export default ModalFormRegistrer;
