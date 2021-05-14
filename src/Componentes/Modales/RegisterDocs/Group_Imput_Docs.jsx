import React from "react";
import Input from "../../Form/Input";

const Group_Imput_Docs = ({ values, manejadorInput }) => {
   return (
      <>
         <Input
            value={values}
            placeholder="Nombre(s)"
            name="nombre"
            mensaje={["ejemplo Erick Fernando"]}
            manejadorInput={manejadorInput}
            icono={<i className="ri-user-fill"></i>}
         />

         <br />
         <Input
            value={values}
            placeholder="Apellido Paterno"
            name="apellidoPaterno"
            mensaje={["ejemplo Gonzales"]}
            manejadorInput={manejadorInput}
            icono={<i className="ri-user-fill"></i>}
         />
         <br />

         <Input
            value={values}
            placeholder="Apellido Materno"
            name="apellidoMaterno"
            mensaje={["ejemplo Perez"]}
            manejadorInput={manejadorInput}
            icono={<i className="ri-user-fill"></i>}
         />
         <br />
         <Input
            value={values}
            placeholder="Especialidad"
            name="especialidad"
            mensaje={["ejemplo Gastroenterelogo"]}
            manejadorInput={manejadorInput}
            icono={<i className="ri-award-line"></i>}
         />
         <br />
         <Input
            value={values}
            placeholder="Cedula"
            name="cedula"
            mensaje={[""]}
            manejadorInput={manejadorInput}
            icono={<i className="ri-award-line"></i>}
         />
         <br />
         <Input
            value={values}
            placeholder="Telefono"
            name="telefono"
            mensaje={["ejemplo 3456789647"]}
            manejadorInput={manejadorInput}
            icono={<i className="ri-phone-fill"></i>}
         />
         <br />
         <Input
            value={values}
            placeholder="Pais"
            name="pais"
            mensaje={["ejemplo México"]}
            manejadorInput={manejadorInput}
            icono={<i className="ri-map-pin-user-fill"></i>}
         />
         <br />
         <Input
            value={values}
            placeholder="Estado"
            name="estado"
            mensaje={["ejemplo Oaxaca"]}
            manejadorInput={manejadorInput}
            icono={<i className="ri-map-pin-user-fill"></i>}
         />

         <br />

         <Input
            value={values}
            placeholder="Email"
            name="email"
            mensaje={["ejemplo User234@gmail.com"]}
            manejadorInput={manejadorInput}
            icono={<i className="ri-mail-fill"></i>}
         />

         <Input
            value={values}
            name="password"
            placeholder="Password"
            tipo="password"
            mensaje={[
               "Minimo 8 caracteres",
               "Maximo 15",
               "Al menos una letra mayúscula",
               "Al menos una letra minucula",
               "Al menos un dígito",
               "No espacios en blanco",
               "Al menos 1 caracter especial($@$!%*?&)",
            ]}
            manejadorInput={manejadorInput}
            icono={<i className="ri-lock-password-fill"></i>}
         />
      </>
   );
};

export default Group_Imput_Docs;
