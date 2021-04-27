import Input from "../Form/Input";
const img = require.context("../../Img", true);

const ModalFormRegistrer = ({ isOpen, closeModal }) => {
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
               valor="Email"
               icono={<i className="ri-user-fill"></i>}
            />{" "}
            <br />
            <Input
               valor="Password"
               icono={<i className="ri-lock-password-fill"></i>}
            />
            <br />
            <Input
               valor="Confirm Pasword"
               icono={<i className="ri-lock-password-fill"></i>}
            />
            <br />
            <br />
            <p className="singIng">Sing in</p>
            <button
               className="btn-principal seconbtn"
               onClick={() => closeModal()}
            >
               Go <i className="ri-arrow-right-line"></i>
            </button>
            <br />
            <button className="btnMovilClose red" onClick={closeModal}>
               <i class="ri-close-line"></i>
            </button>
         </article>
      </section>
   );
};

export default ModalFormRegistrer;
