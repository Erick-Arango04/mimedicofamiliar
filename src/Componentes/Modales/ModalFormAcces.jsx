import Input from "../Form/Input";
const img = require.context("../../Img", true);

const ModalFormAcces = ({ isOpen, closeModal }) => {
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
               valor="Email"
               icono={<i className="ri-user-fill"></i>}
            />{" "}
            <br />
            <Input
               valor="Password"
               icono={<i className="ri-lock-password-fill"></i>}
            />
            <br />
            <h4 className="paswordReset">¿Olvidaste tu contraseña?</h4>
            <p className="singIng">Sing in</p>
            <button
               className="btn-principal seconbtn"
               onClick={() => closeModal()}
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

export default ModalFormAcces;
