import { registrarDoc } from "../../../config-firebase/funciones_firebase";
import { useState } from "react";
import { useForm } from "../../../Hooks/useForm";
import ConfirmPassword from "../ConfirmPassword";
import Group_Imput_Docs from "./Group_Imput_Docs";
const img = require.context("../../../Img", true);

const valuesForm = {
   nombre: "",
   apellidoPaterno: "",
   apellidoMaterno: "",
   especialidad: "",
   cedula: "",
   telefono: "",
   pais: "",
   estado: "",
   email: "",
   password: "",
   validate_nombre: false,
   validate_apellidoPaterno: false,
   validate_apellidoMaterno: false,
   validate_especialidad: false,
   validate_cedula: false,
   validate_telefono: false,
   validate_pais: false,
   validate_estado: false,
   validate_email: false,
   validate_password: false,
};

const ModalRegisterDoc = ({ isOpen, closeModal }) => {
   const [values, manejadorInput, reset] = useForm(valuesForm);
   const {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      especialidad,
      cedula,
      telefono,
      pais,
      estado,
      email,
      password,
      validate_nombre,
      validate_apellidoPaterno,
      validate_apellidoMaterno,
      validate_especialidad,
      validate_cedula,
      validate_telefono,
      validate_pais,
      validate_estado,
      validate_email,
      validate_password,
   } = values;
   const [confirmPassword, setConfirmPassword] = useState({
      confirmPassword: "",
      validate_confirmPassword: false,
   });
   const [mensajeError, setmensajeError] = useState(false);

   const resetAndClose = () => {
      reset();
      // reseteamos el valor de confirmar contraseña
      setConfirmPassword({
         confirmPassword: "",
         validate_confirmPassword: false,
      });
      setmensajeError(false);
      closeModal();
   };

   const accionBoton = () => {
      if (
         validate_nombre &&
         validate_apellidoPaterno &&
         validate_apellidoMaterno &&
         validate_especialidad &&
         validate_cedula &&
         validate_telefono &&
         validate_pais &&
         validate_estado &&
         validate_email &&
         validate_password &&
         confirmPassword.validate_confirmPassword
      ) {
         setmensajeError(false);
         registrarDoc(
            nombre,
            apellidoPaterno,
            apellidoMaterno,
            especialidad,
            cedula,
            telefono,
            pais,
            estado,
            email,
            password
         );
      } else {
         setmensajeError(true);
      }
   };

   return (
      <section
         className={`modal ${isOpen && "mostrar"}`}
         onClick={resetAndClose}
      >
         {/* evitar que se cierre el modal al tocar el hijo  */}
         <article onClick={(e) => e.stopPropagation()}>
            <figure className="imgModal">
               <img src={img("./doctorForm.svg").default} alt="" />
            </figure>
            <h1 className="tituloMenu">Bienvenido</h1>
            <h2>Necesitamos más información sobre ti antes de empezar</h2>

            <Group_Imput_Docs values={values} manejadorInput={manejadorInput} />

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

export default ModalRegisterDoc;
