import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";
import Agenda from "../Componentes/Agenda/Agenda";
import PagePrincipal from "../Componentes/PagePrincipal/PagePrincipal";
import PerfilUsuario from "../Componentes/PerfilUsuario/PerfilUsuario";

const DashbordRoues = () => {
   return (
      <Router>
         <Switch>
            <Route exact path="/paciente" component={PerfilUsuario} />
            <Route exact path="/agenda" component={Agenda} />
            <Route exact path="/" component={PagePrincipal} />

            <Redirect to="/" />
         </Switch>
      </Router>
   );
};

export default DashbordRoues;
