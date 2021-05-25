import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Auth/AuthContext";

const RoutesPrivate = ({ component: Component, ...rest }) => {
   const { user } = useContext(AuthContext);

   return (
      <Route
         {...rest}
         component={(props) =>
            user.logged ? <Component {...props} /> : <Redirect to="/busqueda" />
         }
      />
   );
};

export default RoutesPrivate;
