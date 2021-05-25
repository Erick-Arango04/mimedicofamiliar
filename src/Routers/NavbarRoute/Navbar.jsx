import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
import ModalFormAcces from "../../Componentes/Modales/ModalFormAcces";
import ModalRegisterDoc from "../../Componentes/Modales/RegisterDocs/ModalRegisterDoc";
import ModalFormRegistrer from "../../Componentes/Modales/RegisterUser.jsx/ModalFormRegistrer";
import { useModal } from "../../Hooks/useModal";
import NavbarLogin from "./NavbarLogin";
import TipoUser from "./TipoUser";

const Navbar = ({
   clas = "menu",
   settouchMenuMovil = null,
   clastipoUserMobile = "tipoUser",
}) => {
   const [mostrarTipoUser, setMostrarTipoUser] = useState(false);
   const { user } = useContext(AuthContext);
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

   if (user.logged) {
      return <NavbarLogin clas={clas} />;
   }

   return (
      <>
         <nav className={clas}>
            <Link exact="true" to="/">
               ¿Quienes Somos?
            </Link>
            <Link exact="true" to="/">
               Preguntas Frecuentes
            </Link>
            <Link exact="true" to="/">
               Contactanos
            </Link>

            <section>
               <span onClick={() => setMostrarTipoUser(!mostrarTipoUser)}>
                  Registrarse
               </span>
               {mostrarTipoUser && <TipoUser {...datostipoUser} />}
            </section>

            <span onClick={() => handleSubmitAcceder()}>Acceder</span>
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
