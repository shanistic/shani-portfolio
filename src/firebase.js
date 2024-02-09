import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAA3Vyx0xW8h_m8jMqllxDYIOv5bGR0UcU",
  authDomain: "shani-web-portfolio.firebaseapp.com",
  projectId: "shani-web-portfolio",
  storageBucket: "shani-web-portfolio.appspot.com",
  messagingSenderId: "919875686892",
  appId: "1:919875686892:web:3bbdd0c27171f66ef530c9",
  measurementId: "G-MQ9F3DFQF1"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
