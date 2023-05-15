import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyA0D32XxxNGYiuP3HErXInsjbx-G4NLANM",
  authDomain: "template-5867e.firebaseapp.com",
  projectId: "template-5867e",
  storageBucket: "template-5867e.appspot.com",
  messagingSenderId: "289607732672",
  appId: "1:289607732672:web:1ee95691de7a2fecf0cc25"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();
const db = firebase.firestore();
const storage= firebase.storage();

export {auth,db,storage}
