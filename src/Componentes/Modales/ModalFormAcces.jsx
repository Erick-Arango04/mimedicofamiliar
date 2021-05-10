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
   const [values, manejadorInput, reset] = useForm(valuesForm);
   const { email, password, validate_email } = values;

   const handleSubmit = (e) => {
      e.preventDefault();
      login(email, password);
   };

   return (
      <section
         className={`modal ${isOpen && "mostrar"}`}
         onClick={() => closeModal()}
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
               manejadorInput={manejadorInput}
               icono={<i className="ri-user-fill"></i>}
            />
            <br />

            <Input
               value={values}
               name="password"
               placeholder="Password"
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
            <p className="singIng">Sing in</p>
            <button className="btn-principal seconbtn" onClick={handleSubmit}>
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

export default ModalFormAcces;
