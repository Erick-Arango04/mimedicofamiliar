import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthContext";
import { types } from "../../types/types";

const NavbarLogin = ({ clas }) => {
   const { user, dispatch } = useContext(AuthContext);

   return (
      <nav className={clas}>
         <Link exact="true" to="/home">
            Inicio
         </Link>
         <Link exact="true" to="/paciente">
            Mi perfil
         </Link>
         <Link to="/">Favoritos</Link>
         <Link exact="true" to="/agenda">
            Agenda
         </Link>
         <section className="userCorreoLoged">
            <span
               onClick={() =>
                  dispatch({
                     type: types.logout,
                  })
               }
            >
               Salir
            </span>
            <p>{user.name}</p>
         </section>
      </nav>
   );
};

export default NavbarLogin;
