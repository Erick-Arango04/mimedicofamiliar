import { useState } from "react";
import { Link } from "react-router-dom";
import ModalFormAcces from "../../Componentes/Modales/ModalFormAcces";
import ModalFormRegistrer from "../../Componentes/Modales/ModalFormRegistrer";
import { useModal } from "../../Hooks/useModal";
import TipoUser from "./TipoUser";

const Navbar = ({
   clas = "menu",
   settouchMenuMovil = null,
   clastipoUserMobile = "tipoUser",
}) => {
   const [tipoUser, setTipoUser] = useState(false);

   const [isOpenModalAcces, openModalAcces, closeModalAcces] = useModal(false);

   const [
      isOpenModalRegister,
      openModalRegister,
      closeModalRegister,
   ] = useModal(false);

   const datostipoUser = {
      clastipoUserMobile,
      openModalRegister,
      settouchMenuMovil,
      setTipoUser,
   };

   const handleSubmit = () => {
      setTipoUser(false);
      openModalAcces();
      if (settouchMenuMovil !== null) {
         settouchMenuMovil((e) => !e);
      }
   };

   return (
      <>
         <nav className={clas}>
            <section>
               <span onClick={() => setTipoUser(!tipoUser)}>Registrarse</span>
               {tipoUser && <TipoUser {...datostipoUser} />}
            </section>

            <span onClick={() => handleSubmit()}>Acceder</span>

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
      </>
   );
};

export default Navbar;
