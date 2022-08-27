// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import getDatabase from "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyB7qs8dlT2oPvkMLdlhmjq_aHrcB4pI_ug",
  authDomain: "reach-project-3e2a0.firebaseapp.com",
  databaseURL: "https://reach-project-3e2a0-default-rtdb.firebaseio.com",
  projectId: "reach-project-3e2a0",
  storageBucket: "reach-project-3e2a0.appspot.com",
  messagingSenderId: "40905875998",
  appId: "1:40905875998:web:c453caacab53ff068a840f",
};

//databaseURL: "https://reach-project-3e2a0-default-rtdb.firebaseio.com",

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.database(app);
