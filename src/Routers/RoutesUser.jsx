import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Agenda from "../Componentes/Agenda/Agenda";
import PagePrincipal from "../Componentes/PagePrincipal/PagePrincipal";
import PerfilUsuario from "../Componentes/PerfilUsuario/PerfilUsuario";

const RoutesUser = () => {
   return (
      <Switch>
         <Route exact path="/" component={PagePrincipal} />
         <Route exact path="/paciente" component={PerfilUsuario} />
         <Route exact path="/agenda" component={Agenda} />
         <Redirect to="/" />
      </Switch>
   );
};

export default RoutesUser;
