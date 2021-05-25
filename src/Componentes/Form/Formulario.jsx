import React, { useRef } from "react";
import db from "../../config-firebase/config_firebase";

import "firebase/auth";

const Formulario = () => {
   const refSelectEstado = useRef();
   const refSelectEspecialidad = useRef();
   const refSelectConsulta = useRef();

   const obtenerEstado = (params) => {
      db.collection("Administrador")
         .doc("Estado")
         .onSnapshot((doc) => {
            Object.keys(doc.data()).forEach(function (indice) {
               refSelectEstado.current.options[indice] = new Option(
                  doc.data()[indice]
               );
            });
         });
   };

   const ObtenerEspecialidad = (params) => {
      db.collection("Administrador")
         .doc("Especialidades")
         .onSnapshot((doc) => {
            Object.keys(doc.data()).forEach(function (valor, indice, array) {
               refSelectEspecialidad.current.options[indice] = new Option(
                  doc.data()[indice]
               );
            });
         });
   };

   obtenerEstado();
   ObtenerEspecialidad();

   return (
      <form className="contenedor">
         <section className="contenedorInput">
            <select
               ref={refSelectEspecialidad}
               className="inputFotm"
               name=""
               id=""
            >
               <optgroup label="Especialidad"></optgroup>
            </select>
            <i className="ri-contacts-book-fill"></i>
         </section>

         <section className="contenedorInput">
            <select ref={refSelectEstado} className="inputFotm" name="" id="">
               <optgroup label="Estado"></optgroup>
            </select>
            <i className="ri-user-location-fill"></i>
         </section>

         <section ref={refSelectConsulta} className="contenedorInput">
            <select className="inputFotm" name="" id="">
               <option value="">Linea</option>
               <option value="">Presencial</option>
            </select>
            <i className="ri-user-fill"></i>
         </section>

         <button
            className="btn-principal"
            onClick={(e) => {
               e.preventDefault();
            }}
         >
            Comenzar
         </button>
      </form>
   );
};

export default Formulario;
