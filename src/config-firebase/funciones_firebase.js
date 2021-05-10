import firebase from "firebase/app";
import "firebase/auth";
import db from "./config_firebase";

export const login = (emailValue, passwordValue) => {
   firebase
      .auth()
      .signInWithEmailAndPassword(emailValue, passwordValue)
      .then((userCredential) => {
         //escuchador para revisar si el correo ya esta verificado
         firebase.auth().onAuthStateChanged((user) => {
            let uid = user.uid;
            let emailVerified = user.emailVerified;
            if (emailVerified == true) {
               let docRef = db.collection("Usuarios").doc(uid);
               docRef
                  .get()
                  .then((doc) => {
                     if (doc.exists) {
                        console.log("Document data:", doc.data().TipoUsuario);
                        const tipo = doc.data().TipoUsuario;
                        if (tipo == "Paciente") {
                           alert("Inicio un paciente");
                           window.location.href = "/perfil_paciente";
                        } else if (tipo == "Doctor") {
                           alert("Inicio un doctor");
                           window.location.href = "/perfil_doctor";
                        }
                     } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                     }
                  })
                  .catch((error) => {
                     console.log("Error getting document:", error);
                  });
            } else {
               alert("El email del usuario no esta verificado");
            }
         });
      })
      .catch((error) => {
         alert("Usuario o contraseña incorrecta");
         let errorCode = error.code;
         let errorMessage = error.message;
      });
};

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

export const regis_google = () => {
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
         let errorCode = error.code;
         let errorMessage = error.message;
         // The email of the user's account used.
         let email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         let credential = error.credential;
         // ...
      });
};

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
                  Contrasena: contraseña,
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
                     .catch(function (error) {});
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
