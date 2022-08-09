import firebase from 'firebase';
import 'firebase/firestore';

const apiKey=process.env.FB_API_KEY
const authDomain=process.env.FB_AUTH_DOMAIN
const projectId=process.env.FB_PROJECT_ID
const storageBucket=process.env.FB_STORAGE_BUCKET
const messagingSenderId=process.env.FB_MESSAGING_SENDER_ID
const appId=process.env.FB_APP_ID
const measurementId=process.env.FB_MEASUREMENT_ID

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};
  
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;