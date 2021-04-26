/* 
import { useState } from "react";
import Modal from "./Componentes/Modales/Modal"; */

import DashbordRoues from "./Routers/DashbordRoues";

function App() {
   /*  const [isOpenModal, setisOpenModal] = useState(false);

   const abrirModal = () => {
      setisOpenModal(!isOpenModal);
   };

   const cerrarModal = () => {
      setisOpenModal(false);
   };
 */
   return (
      <>
         <DashbordRoues />

         {/* <button onClick={() => abrirModal()}>Open Modal</button>
         <Modal isOpen={isOpenModal} cerrarModal={cerrarModal}>
            <h1>valor guardado en las props children</h1>
            <form action=""></form>
         </Modal> */}
      </>
   );
}

export default App;
