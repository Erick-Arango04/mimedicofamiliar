import { useEffect, useReducer } from "react";
import { AuthContext } from "./Auth/AuthContext";
import { authReducer } from "./Auth/AuthReducer";
import DashbordRoues from "./Routers/DashbordRoues";

const init = () =>
   JSON.parse(localStorage.getItem("user")) || { logged: false };

function App() {
   const [user, dispatch] = useReducer(authReducer, {}, init);

   useEffect(() => {
      localStorage.setItem("user", JSON.stringify(user));
   }, [user]);

   return (
      <>
         <AuthContext.Provider value={{ user, dispatch }}>
            <DashbordRoues />
         </AuthContext.Provider>
      </>
   );
}

export default App;
