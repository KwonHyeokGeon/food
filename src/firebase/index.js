import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"



const firebaseConfig = {
  apiKey: process.env.VUE_APP_HIDDEN_KEY,
  authDomain: "project-b1ef0.firebaseapp.com",
  projectId: "project-b1ef0",
  storageBucket: "project-b1ef0.appspot.com",
  messagingSenderId: "655160831444",
  appId: "1:655160831444:web:9d45586fd7ab7d9171ba41"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth=firebase.auth();
const db = firebase.firestore();
const storage= firebase.storage();

export {auth,db,storage}
