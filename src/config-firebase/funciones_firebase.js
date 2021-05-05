import firebase from "firebase/app";
import "firebase/auth";
import db from "./config_firebase";

export const login = (emailValue, passwordValue) => {
   //verificar que las cajas no esten vacias
   if (emailValue !== "" && passwordValue != "") {
      //funcion de firebase para poder iniciar sesion
      firebase
         .auth()
         .signInWithEmailAndPassword(emailValue, emailValue)
         .then((userCredential) => {
            //escuchador para revisar si el correo ya esta verificado
            firebase.auth().onAuthStateChanged((user) => {
               var uid = user.uid;
               var emailVerified = user.emailVerified;
               //comprobacion del correo verificado
               if (emailVerified == true) {
                  //te redirecciona al perfil
                  alert("Email verificado");
                  // window.location.href = "/perfil_paciente";
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

export const regis_google = () => {
   var provider = new firebase.auth.GoogleAuthProvider();
   firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
         firebase.auth().onAuthStateChanged((user) => {
            var uid = user.uid;
            var correo = result.user.email;
            var nombre = result.user.displayName;
            db.collection("Pacientes")
               .doc(uid)
               .set({
                  Email: correo,
                  Nombre: nombre,
                  TipoUsuario: "Paciente",
               })
               .then((docRef) => {
                  //console.log("Document written with ID: ", docRef.id);
                  window.location.href = "/perfil_paciente";
               })
               .catch((error) => {
                  console.error("Error adding document: ", error);
               });
         });

         // ...
      })
      .catch((error) => {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // The email of the user's account used.
         var email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential;
         // ...
      });
};
