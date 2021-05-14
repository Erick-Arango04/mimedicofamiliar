import { useState } from "react";
import { Link } from "react-router-dom";
import ModalFormAcces from "../../Componentes/Modales/ModalFormAcces";
import ModalRegisterDoc from "../../Componentes/Modales/RegisterDocs/ModalRegisterDoc";
import ModalFormRegistrer from "../../Componentes/Modales/RegisterUser.jsx/ModalFormRegistrer";
import { useModal } from "../../Hooks/useModal";
import TipoUser from "./TipoUser";

const Navbar = ({
   clas = "menu",
   settouchMenuMovil = null,
   clastipoUserMobile = "tipoUser",
}) => {
   const [mostrarTipoUser, setMostrarTipoUser] = useState(false);

   /**
    *  * HOOK MODAL
    *  ? isOpen[value] valor true o false (abierto o cerrdo)
    *  ? openModal abre el modal
    *  ? closeModal cerrar modal
    */
   const [isOpenModalAcces, openModalAcces, closeModalAcces] = useModal(false);

   const [
      isOpenModalRegister,
      openModalRegister,
      closeModalRegister,
   ] = useModal(false);

   const [
      isOpenModalRegisterDoc,
      openModalRegisterDoc,
      closeModalRegisterDoc,
   ] = useModal(false);

   const datostipoUser = {
      clastipoUserMobile,
      openModalRegister,
      openModalRegisterDoc,
      settouchMenuMovil,
      setMostrarTipoUser,
   };

   const handleSubmitAcceder = () => {
      setMostrarTipoUser(false);
      openModalAcces();
      if (settouchMenuMovil !== null) {
         settouchMenuMovil((e) => !e);
      }
   };

   return (
      <>
         <nav className={clas}>
            <section>
               <span onClick={() => setMostrarTipoUser(!mostrarTipoUser)}>
                  Registrarse
               </span>
               {mostrarTipoUser && <TipoUser {...datostipoUser} />}
            </section>

            <span onClick={() => handleSubmitAcceder()}>Acceder</span>

            <Link exact="true" to="/">
               Inicio
            </Link>
            <Link exact="true" to="/paciente">
               Mi perfil
            </Link>
            <Link to="/">Favoritos</Link>
            <Link exact="true" to="/agenda">
               Agenda
            </Link>
         </nav>

         <ModalFormRegistrer
            isOpen={isOpenModalRegister}
            closeModal={closeModalRegister}
         />

         <ModalFormAcces
            isOpen={isOpenModalAcces}
            closeModal={closeModalAcces}
         />

         <ModalRegisterDoc
            isOpen={isOpenModalRegisterDoc}
            closeModal={closeModalRegisterDoc}
         />
      </>
   );
};

export default Navbar;
