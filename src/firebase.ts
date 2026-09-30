import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTPNO9Pg05JQ6Q-GEo7ilQkAPe87V6zj0",
  authDomain: "internship2-219e1.firebaseapp.com",
  projectId: "internship2-219e1",
  storageBucket: "internship2-219e1.firebasestorage.app",
  messagingSenderId: "313139152632",
  appId: "1:313139152632:web:41cfd4c4d41cd9115a9d0d",
  measurementId: "G-E2DPXNT03D"
};

const app = initializeApp(firebaseConfig);

export default getAuth(app);