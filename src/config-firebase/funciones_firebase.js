const login = (emailValue, passwordValue) => {
   //verificar que las cajas no esten vacias
   if (emailValue !== "" && passwordValue != "") {
      //funcion de firebase para poder iniciar sesion
      firebase
         .auth()
         .signInWithEmailAndPassword(correo, password)
         .then((userCredential) => {
            //escuchador para revisar si el correo ya esta verificado
            firebase.auth().onAuthStateChanged((user) => {
               var uid = user.uid;
               var emailVerified = user.emailVerified;
               //comprobacion del correo verificado
               if (emailVerified == true) {
                  //te redirecciona al perfil
                  alert("Email verificado");
                  window.location.href = "/perfil_paciente";
               } else {
                  alert("El email del usuario no esta verificado");
               }
            });
         })
         .catch((error) => {
            alert("Usuario o contraseña incorrecta");
            var errorCode = error.code;
            var errorMessage = error.message;
         });
   } else {
      alert("los campos no deben de estar vacios");
   }
};
