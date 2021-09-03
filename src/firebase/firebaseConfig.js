import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBl4tcUmyIif_Rs7ohj9m0mwu8dZ7qlziE",
    authDomain: "practica-crud-54dab.firebaseapp.com",
    projectId: "practica-crud-54dab",
    storageBucket: "practica-crud-54dab.appspot.com",
    messagingSenderId: "171548276052",
    appId: "1:171548276052:web:526e4fb05f1d7b96dd04c1",
    measurementId: "G-1RSFTBLWZZ"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Referencia a la base de datos
const db = firebase.firestore();
//para permiter autenticaciómn con google
const google = new firebase.auth.GoogleAuthProvider();

//exportamos
export{
    db,
    google,
    firebase
}