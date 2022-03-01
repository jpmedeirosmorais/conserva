// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDnaW72QQPtakmLCrdy84W1jaurDdA6ERg",
  authDomain: "conserva-em-familia.firebaseapp.com",
  databaseURL: "https://conserva-em-familia-default-rtdb.firebaseio.com",
  projectId: "conserva-em-familia",
  storageBucket: "conserva-em-familia.appspot.com",
  messagingSenderId: "95695275633",
  appId: "1:95695275633:web:8fdbdfec790f91f2c9bdd0",
  measurementId: "G-66F6FEW4SK"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const dbRef = ref(getDatabase());

export { dbRef, get, child };
