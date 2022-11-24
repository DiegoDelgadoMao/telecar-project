// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { collection, getDocs} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsw7PgNwMfhYpp7nKF6tP1l8_hSLG4uok",
  authDomain: "fir-javascript-970a3.firebaseapp.com",
  projectId: "fir-javascript-970a3",
  storageBucket: "fir-javascript-970a3.appspot.com",
  messagingSenderId: "700348786192",
  appId: "1:700348786192:web:0640ee7de06497e0108c95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//get documents

