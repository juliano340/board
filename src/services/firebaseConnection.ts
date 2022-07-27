import firebase from "firebase";

import 'firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyAybntKbtqSwqG_48tS63kBspCAXpP8b3I",
    authDomain: "boardapp-b4420.firebaseapp.com",
    projectId: "boardapp-b4420",
    storageBucket: "boardapp-b4420.appspot.com",
    messagingSenderId: "407204554734",
    appId: "1:407204554734:web:0bb257a578b6ec699a90ff",
    measurementId: "G-D01NVDXCDD"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length) {
      const app = firebase.initializeApp(firebaseConfig);
  }

  export default firebase;