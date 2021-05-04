import Formulario from "../Form/Formulario";
import NavbarComplete from "../NavbarComplete/NavbarComplete";
import "../Styles/Header.css";

const img = require.context("../../Img", true);

const Header = () => {
   return (
      <header className="head">
         <NavbarComplete />
         <section>
            <img src={img("./medico-header.svg").default} alt="" />
            <h1>Mi Médico Familiar</h1>
         </section>
         <Formulario />
      </header>
   );
};

export default Header;
