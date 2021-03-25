import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC74fMrZNsdHcw8d_ARB8yZjA3Mx9scMfs",
  authDomain: "paaskejakten.firebaseapp.com",
  projectId: "paaskejakten",
  storageBucket: "paaskejakten.appspot.com",
  messagingSenderId: "502027333519",
  appId: "1:502027333519:web:fd2ce889f904c63765a5fa",
  measurementId: "G-F0E3EVSM25",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
let authProvider = new firebase.auth.GoogleAuthProvider();

export { auth, authProvider };
