import React from "react";
import Footer from "../Footer/Footer";
import NavbarComplete from "../NavbarComplete/NavbarComplete";
import AntecedentesSalud from "./AntecedentesSalud";
import DatosUsuario from "./DatosUsuario";
import VariablesSalud from "./VariablesSalud";

const PerfilUsuario = () => {
   return (
      <>
         <NavbarComplete />
         <section>
            <h1 className="titulo">
               Mi perfil <i className="ri-user-heart-fill"></i>
            </h1>
            <article className="contenedor contentBlanco">
               <DatosUsuario />
               <VariablesSalud />
               <AntecedentesSalud />
               <button className="btn-principal seconbtn">Editar Perfil</button>
            </article>

            <Footer />
         </section>
      </>
   );
};

export default PerfilUsuario;
