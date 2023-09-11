// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZJKkDTZ1aouwhnlaQZWRTcGr3jr3P8Wk",
  authDomain: "blogging-app-ef45d.firebaseapp.com",
  projectId: "blogging-app-ef45d",
  storageBucket: "blogging-app-ef45d.appspot.com",
  messagingSenderId: "1035334372003",
  appId: "1:1035334372003:web:6fc423e99c35d506d10d16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);