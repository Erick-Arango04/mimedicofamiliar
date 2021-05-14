import React from "react";

const TipoUser = (props) => {
   const {
      clastipoUserMobile,
      openModalRegister,
      openModalRegisterDoc,
      setMostrarTipoUser,
      settouchMenuMovil,
   } = props;

   const handleClick = (callback) => {
      setMostrarTipoUser((e) => !e);
      callback();

      if (settouchMenuMovil !== null) {
         settouchMenuMovil((e) => !e);
      }
   };

   return (
      <>
         <article className={clastipoUserMobile}>
            <span onClick={() => handleClick(openModalRegister)}>Paciente</span>
            <span onClick={() => handleClick(openModalRegisterDoc)}>
               Médico
            </span>
         </article>
      </>
   );
};

export default TipoUser;
