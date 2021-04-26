import { Link } from "react-router-dom";
import "../../Componentes/Styles/Navbar.css";

const Navbar = () => {
   return (
      <nav className="menu">
         <Link exact to="/">
            Registrarse
         </Link>
         <Link exact to="/">
            Acceder
         </Link>
         <Link exact to="/">
            Inicio
         </Link>
         <Link exact to="/">
            Mi perfil
         </Link>
         <Link exact to="/">
            Favoritos
         </Link>
         <Link exact to="/">
            Agenda
         </Link>
      </nav>
   );
};

export default Navbar;
