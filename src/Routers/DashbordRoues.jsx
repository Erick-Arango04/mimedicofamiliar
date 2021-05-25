import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PagePrincipal from "../Componentes/PagePrincipal/PagePrincipal";
import RoutesUser from "./RoutesUser";
import RoutesPrivate from "./RoutesPrivate";

const DashbordRoues = () => {
   return (
      <Router>
         <Switch>
            <Route exact path="/busqueda" component={PagePrincipal} />
            <RoutesPrivate path="/" component={RoutesUser} />
         </Switch>
      </Router>
   );
};

export default DashbordRoues;
