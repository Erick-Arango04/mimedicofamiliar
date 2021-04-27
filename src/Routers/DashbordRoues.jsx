import React from "react";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";
import PagePrincipal from "../Componentes/PagePrincipal/PagePrincipal";

const DashbordRoues = () => {
   return (
      <Router>
         <Switch>
            <Route exact path="/paciente">
               <h1>Paciente</h1>
            </Route>
            <Route exact path="/" component={PagePrincipal} />

            <Redirect to="/" />
         </Switch>
      </Router>
   );
};

export default DashbordRoues;
