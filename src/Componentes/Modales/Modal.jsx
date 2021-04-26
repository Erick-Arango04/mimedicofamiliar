import React from "react";
import "../Styles/Modal.css";

const Modal = ({ isOpen, cerrarModal }) => {
   return (
      <section className={`modal ${isOpen && "mostrar"}`}>
         <h1>Hola</h1>
         <button onClick={() => cerrarModal()}>Cerrar</button>
      </section>
   );
};

export default Modal;
