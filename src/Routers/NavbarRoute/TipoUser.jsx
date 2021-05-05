import React from "react";

const TipoUser = (props) => {
   const {
      clastipoUserMobile,
      openModalRegister,
      setTipoUser,
      settouchMenuMovil,
   } = props;

   const handleClick = () => {
      setTipoUser((e) => !e);
      openModalRegister();

      if (settouchMenuMovil !== null) {
         settouchMenuMovil((e) => !e);
      }
   };

   return (
      <>
         <article className={clastipoUserMobile}>
            <span
               onClick={() => {
                  handleClick();
               }}
            >
               Paciente
            </span>
            <span>Mèdico</span>
         </article>
      </>
   );
};

export default TipoUser;
