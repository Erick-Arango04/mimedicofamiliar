import firebase from "firebase/app";
import "firebase/auth";
import db from "./config_firebase";

export const recuperarContraseña = (email) => {
   firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
         // Email sent.
         alert("Se envio un correo para restablecer tu contraseña");
         window.location.href = "/";
      })
      .catch(function (error) {
         alert(error);
      });
};

/* export const regis_google = () => {
   let provider = new firebase.auth.GoogleAuthProvider();
   firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
         firebase.auth().onAuthStateChanged((user) => {
            let uid = user.uid;
            let correo = result.user.email;
            let nombre = result.user.displayName;
            db.collection("Pacientes")
               .doc(uid)
               .set({
                  Email: correo,
                  Nombre: nombre,
                  TipoUsuario: "Paciente",
               })
               .then(() => {
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
         let errorCode = error.code;
         let errorMessage = error.message;
         // The email of the user's account used.
         let email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         let credential = error.credential;
         // ...
      });
}; */

export const registrar = (correo, contraseña) => {
   firebase
      .auth()
      .createUserWithEmailAndPassword(correo, contraseña)
      .then(() => {
         firebase.auth().onAuthStateChanged((user) => {
            let uid = user.uid;
            db.collection("Usuarios")
               .doc(uid)
               .set({
                  Nombre: "",
                  ApellidoPaterno: "",
                  ApellidoMaterno: "",
                  Telefono: "",
                  Pais: "",
                  Estado: "",
                  Fecha: "",
                  Email: correo,
                  TipoUsuario: "Paciente",
               })
               .then(() => {
                  alert("datos agregados a la base de datos");
                  let user = firebase.auth().currentUser;

                  user
                     .sendEmailVerification()
                     .then(function () {
                        window.location.href = "/";
                     })
                     .catch(function () {});
               })
               .catch((error) => {
                  console.error("Error adding document: ", error);
                  alert(error);
               });
         });
      })
      .catch(function (error) {
         let errorCode = error.code;
         let errorMessage = error.message;
         alert(errorMessage);
         alert(errorCode);
      });
};

export const registrarDoc = (
   nombre,
   apellidoPaterno,
   apellidoMaterno,
   especialidad,
   cedula,
   telefono,
   pais,
   estado,
   email,
   password
) => {
   let hoy = new Date();
   let fechainscripcion =
      hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getUTCFullYear();
   let terminoinscripcion =
      hoy.getDate() +
      "-" +
      (hoy.getMonth() + 1 + 3) +
      "-" +
      hoy.getUTCFullYear();

   firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
         alert("Usuario registrado");
         //observador para poder ingresar los datos a firestore de firebase
         firebase.auth().onAuthStateChanged((user) => {
            let uid = user.uid;
            db.collection("Usuarios")
               .doc(uid)
               .set({
                  Nombre: nombre,
                  ApellidoPaterno: apellidoPaterno,
                  ApellidoMaterno: apellidoMaterno,
                  Especialidad: especialidad,
                  Cedla: cedula,
                  Telefono: telefono,
                  Pais: pais,
                  Estado: estado,
                  Email: email,
                  TipoUsuario: "Doctor",
                  Fechainscripcion: fechainscripcion,
                  Terminoinscripcion: terminoinscripcion,
               })
               .then(() => {
                  alert("datos agregados a la base de datos");
                  alert(
                     "Usuario registrado tienes 3 meses gratis de inscripcion"
                  );
                  let user = firebase.auth().currentUser;
                  user
                     .sendEmailVerification()
                     .then(function () {
                        // Email sent.
                        window.location.href = "/";
                     })
                     .catch(function () {
                        // An error happened.
                     });
               })
               .catch((error) => {
                  console.error("Error adding document: ", error);
                  alert(error);
               });
         });
      })
      .catch(function (error) {
         let errorCode = error.code;
         let errorMessage = error.message;
         alert(errorMessage);
         alert(errorCode);
         // ..
      });
};
