// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
import {getFirestore}from "firebase/firestore";
import "firebase/firestore"
import firebase from 'firebase/app'
// import { getFirestore, collection, getDocs } from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import {initializeApp} from "firebase-admin";
// import {getFirestore} from "firebase-admin/lib/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsaNTR65tPGBMTx99rAE43vX1j1kRzMVQ",
  authDomain: "reacttodo-28370.firebaseapp.com",
  projectId: "reacttodo-28370",
  storageBucket: "reacttodo-28370.appspot.com",
  messagingSenderId: "924426394210",
  appId: "1:924426394210:web:63b9a5f7f6fe422eb3cf3b"
};

// import firebase from 'firebase';

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyCsaNTR65tPGBMTx99rAE43vX1j1kRzMVQ",
//     authDomain: "reacttodo-28370.firebaseapp.com",
//     projectId: "reacttodo-28370",
//     storageBucket: "reacttodo-28370.appspot.com",
//     messagingSenderId: "924426394210",
//     appId: "1:924426394210:web:63b9a5f7f6fe422eb3cf3b"
// })
// const db = firebaseApp.firestore();
// const db = initializeApp(firebase);
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()
export default db;