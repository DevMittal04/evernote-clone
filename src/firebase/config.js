import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUzy7o1CvcucdJoF1MjQpRukEtfLdZkwU",
    authDomain: "evernote-clone-5d5f4.firebaseapp.com",
    projectId: "evernote-clone-5d5f4",
    storageBucket: "evernote-clone-5d5f4.appspot.com",
    messagingSenderId: "797683472975",
    appId: "1:797683472975:web:3f895171c2ccb10b38e83a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projFirestore = firebase.firestore();

  export { projFirestore };