import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBUQZ79riLMkJJwSsRet6ShN0yBUNOyxgI",
  authDomain: "react-b1b8d.firebaseapp.com",
  databaseURL: "https://react-b1b8d.firebaseio.com",
  projectId: "react-b1b8d",
  storageBucket: "react-b1b8d.appspot.com",
  messagingSenderId: "611271909761",
  appId: "1:611271909761:web:82d563ec53c1b02fc50880",
  measurementId: "G-PP7WNYFYK4"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
