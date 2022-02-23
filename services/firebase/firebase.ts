// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDnaW72QQPtakmLCrdy84W1jaurDdA6ERg",
  authDomain: "conserva-em-familia.firebaseapp.com",
  databaseURL: "https://conserva-em-familia-default-rtdb.firebaseio.com",
  projectId: "conserva-em-familia",
  storageBucket: "conserva-em-familia.appspot.com",
  messagingSenderId: "95695275633",
  appId: "1:95695275633:web:8fdbdfec790f91f2c9bdd0",
  measurementId: "G-66F6FEW4SK",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const dbRef = ref(getDatabase());

export { dbRef, get, child };
