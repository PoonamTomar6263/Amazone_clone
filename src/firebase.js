// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB2vypbEK1c-dc2y2bohMCDE_sVbgX4BEI",
    authDomain: "mye-clone.firebaseapp.com",
    projectId: "mye-clone",
    storageBucket: "mye-clone.appspot.com",
    messagingSenderId: "785141003568",
    appId: "1:785141003568:web:6d9fc3b4b0eab8af3384f5",
    measurementId: "G-BR0033QV26"
  };
//initialize the ap with firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
//initialise datatbase
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export{db,auth};