import useResizeWindow from "../../Hooks/useResizeWindow";
import Navbar from "../../Routers/NavbarRoute/Navbar";
import NavbarMovil from "../../Routers/NavbarRoute/NavbarMovil";

const NavbarComplete = () => {
   const [widtWindow] = useResizeWindow();
   return widtWindow > 1000 ? <Navbar /> : <NavbarMovil />;
};

export default NavbarComplete;
