import { useState } from "react";
import { registrar } from "../../config-firebase/funciones_firebase";
import { useForm } from "../../Hooks/useForm";
import Input from "../Form/Input";
import InputConfirmPasswoedput from "../Form/InputConfirmPasswoed";
const img = require.context("../../Img", true);

const initialValueForm = {
   email: "",
   password: "",
   validate_email: false,
   validate_password: false,
};

const ModalFormRegistrer = ({ isOpen, closeModal }) => {
   const [confirmPassword, setconfirmPassword] = useState("");
   const [values, manejadorInput, reset] = useForm(initialValueForm);
   const { email, password, validate_email, validate_password } = values;

   const registrarUsuario = (e) => {
      e.preventDefault();

      if (
         validate_email &&
         validate_password &&
         values.password === confirmPassword
      ) {
         registrar(email, password);
         reset();
         closeModal();
      }
   };

   return (
      <section
         className={`modal ${isOpen && "mostrar"}`}
         onClick={() => closeModal()}
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
               manejadorInput={manejadorInput}
               icono={<i className="ri-user-fill"></i>}
            />
            <br />
            <Input
               value={values}
               placeholder="Password"
               name="password"
               // tipo="password"
               manejadorInput={manejadorInput}
               icono={<i className="ri-lock-password-fill"></i>}
            />
            <br />
            <InputConfirmPasswoedput
               confirmPassword={confirmPassword}
               setconfirmPassword={setconfirmPassword}
               placeholder="Confirm Pasword"
               contraseña={values.password}
               name="confirmPasword"
               icono={<i className="ri-lock-password-fill"></i>}
            />

            <br />
            <br />
            <p className="singIng">Sing in</p>
            <button
               className="btn-principal seconbtn"
               onClick={(e) => registrarUsuario(e)}
            >
               Go <i className="ri-arrow-right-line"></i>
            </button>
            <br />
            <button className="btnMovilClose red" onClick={closeModal}>
               <i className="ri-close-line"></i>
            </button>
         </article>
      </section>
   );
};

export default ModalFormRegistrer;
