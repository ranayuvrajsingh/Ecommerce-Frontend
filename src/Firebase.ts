import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBtlYpYyOFQQrxYyheX81V-k9ThxAFeZOM",
  authDomain: "ecommerce-mern-2024.firebaseapp.com",
  projectId: "ecommerce-mern-2024",
  storageBucket: "ecommerce-mern-2024.appspot.com",
  messagingSenderId: "838001306727",
  appId: "1:838001306727:web:ba7869e147b1e7ddea38c2",
  measurementId: "G-KVX85YFHNT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
