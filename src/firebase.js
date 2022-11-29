// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDoc,collection,getFirestore,doc,getDocs} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const db = getFirestore(app);
// Traer un solo producto
export async function getProduct(id){
  const docget = doc(db,'products',id)
  const docpro = await getDoc(docget)
  return docpro.data();
}
//Traer varios Productos
export async function getAllproducts(){
  const get = collection(db,'products')
  const getDoc = await getDocs(get)
  return getDoc.data();
}
