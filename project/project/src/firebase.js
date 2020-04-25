import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAVBMa3M8dzPm6zTAV_Bx274ZPztMAyMLE",
  authDomain: "react-project-f5970.firebaseapp.com",
  databaseURL: "https://react-project-f5970.firebaseio.com",
  projectId: "react-project-f5970",
  storageBucket: "react-project-f5970.appspot.com",
  messagingSenderId: "71152263780",
  appId: "1:71152263780:web:af2fc546befa1270e7f571",
  measurementId: "G-PZK6SJHQN1",
};
firebase.initializeApp(config);

export default firebase;
