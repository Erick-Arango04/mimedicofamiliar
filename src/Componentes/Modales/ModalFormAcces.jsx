import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthContext";
import { recuperarContraseña } from "../../config-firebase/funciones_firebase";
import { useForm } from "../../Hooks/useForm";
import { types } from "../../types/types";
import firebase from "firebase/app";
import "firebase/auth";

import Input from "../Form/Input";
import db from "../../config-firebase/config_firebase";
import Loader from "../../Loader/Loader";
const img = require.context("../../Img", true);

const valuesForm = {
   email: "",
   password: "",
   validate_email: false,
   validate_password: false,
};

const ModalFormAcces = ({ isOpen, closeModal }) => {
   const [values, manejadorInput, resetValues] = useForm(valuesForm);
   const [mensajeError, setmensajeError] = useState(false);
   const { dispatch } = useContext(AuthContext);
   const [loader, setLoader] = useState(false);
   const { email, password, validate_email, validate_password } = values;

   const accionBoton = (e) => {
      e.preventDefault();
      setLoader(true);
      if (validate_email && validate_password) {
         setmensajeError(false);
         firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
               firebase.auth().onAuthStateChanged((user) => {
                  let uid = user.uid;
                  let emailVerified = user.emailVerified;
                  if (emailVerified === true) {
                     let docRef = db.collection("Usuarios").doc(uid);
                     docRef
                        .get()
                        .then((doc) => {
                           if (doc.exists) {
                              const tipo = doc.data().TipoUsuario;
                              if (tipo === "Paciente") {
                                 setLoader(false);
                                 dispatch({
                                    type: types.logging,
                                    payload: {
                                       name: email,
                                    },
                                 });

                                 closeModal();

                                 // window.location.href = "/";
                              } else if (tipo === "Doctor") {
                                 // alert("Inicio un doctor");
                                 window.location.href = "/";
                              }
                           } else {
                              // doc.data() will be undefined in this case
                              console.log("No such document!");
                           }
                        })
                        .catch((error) => {
                           console.log("Error getting document:", error);
                        });
                  } else {
                     alert("El email del usuario no esta verificado");
                     resetValues();
                     setLoader(false);
                  }
               });
            })
            .catch((error) => {
               alert("Usuario o contraseña incorrecta");
               resetValues();
               setLoader(false);
            });
      } else {
         setmensajeError(true);
      }
   };

   const resetAndClose = () => {
      resetValues();
      setmensajeError(false);
      closeModal();
   };

   let contentForm = (
      <>
         <section className="contentLogBtn">
            <div className="btnLog">
               <img src={img("./google.svg").default} alt="Google" />
               Google
            </div>
            <div className="btnLog">
               <img src={img("./facebook.svg").default} alt="Facebook" />
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

         {!mensajeError && loader ? <Loader /> : ""}
         {mensajeError && (
            <h3 className="red1">
               No podemos enviar tu informacion, revisa los datos que ingresaste
            </h3>
         )}

         <p className="singIng">Sing in</p>
         <button className="btn-principal seconbtn" onClick={accionBoton}>
            Go <i className="ri-arrow-right-line"></i>
         </button>
      </>
   );

   return (
      <section
         className={`modal ${isOpen && "mostrar"}`}
         onClick={() => resetAndClose()}
      >
         {/* evitar que se cierre el modal al tocar el hijo  */}
         <article onClick={(e) => e.stopPropagation()}>
            <figure>
               <img
                  src={img("./doctorConsulta.svg").default}
                  alt="Consulta Medica"
               />
            </figure>
            <h1 className="tituloMenu">Bienvenido</h1>
            <h2>¡Te estabamos esperando!</h2>
            {contentForm}
            <br />
            <button className="btnMovilClose red" onClick={resetAndClose}>
               <i className="ri-close-line"></i>
            </button>
         </article>
      </section>
   );
};

export default ModalFormAcces;
