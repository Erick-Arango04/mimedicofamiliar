import React from "react";
import Footer from "../Footer/Footer";
import NavbarComplete from "../NavbarComplete/NavbarComplete";
import NoAgendas from "./NoAgendas";

const Agenda = () => {
   return (
      <>
         <NavbarComplete />
         <section>
            <h1 className="titulo">
               Agenda<i className="ri-contacts-book-fill"></i>
            </h1>
            <article className="contenedor contentBlanco">
               <NoAgendas />
            </article>
         </section>

         <Footer />
      </>
   );
};

export default Agenda;
