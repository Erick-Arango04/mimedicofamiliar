import { Link } from "react-router-dom";
import ModalFormAcces from "../../Componentes/Modales/ModalFormAcces";
import ModalFormRegistrer from "../../Componentes/Modales/ModalFormRegistrer";
import { useModal } from "../../Hooks/useModal";

const Navbar = ({ clas = "menu", setTouch = null }) => {
   // Hook modal
   const [
      isOpenModalRegister,
      openModalRegister,
      closeModalRegister,
   ] = useModal(false);

   const [isOpenModalAcces, openModalAcces, closeModalAcces] = useModal(false);

   /**
    * *Mostrar los formularios de registro
    */

   const handleViewModal = (setValue) => {
      // Recibimos un callback que actualizara el valor para saber si se muestra el modal
      if (setTouch === null) {
         setValue();
      } else {
         setTouch((e) => !e);
         setValue();
      }
   };

   return (
      <>
         <nav className={clas}>
            <span onClick={() => handleViewModal(openModalRegister)}>
               Registrarse
            </span>
            <span onClick={() => handleViewModal(openModalAcces)}>Acceder</span>
            <Link to="/">Inicio</Link>
            <Link to="/">Mi perfil</Link>
            <Link to="/">Favoritos</Link>
            <Link to="/">Agenda</Link>
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
