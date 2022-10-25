// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsEBJxtqr4Ujhkgy6zsaUxxuQ9R-Hodjo",
  authDomain: "red-code-client.firebaseapp.com",
  projectId: "red-code-client",
  storageBucket: "red-code-client.appspot.com",
  messagingSenderId: "968853282049",
  appId: "1:968853282049:web:628945fe8efff4435f4f00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;