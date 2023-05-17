// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMIbRHGGTix3UfQYLaAOq9RLV-usbJ0yA",
  authDomain: "toy-marketplace-5ed0a.firebaseapp.com",
  projectId: "toy-marketplace-5ed0a",
  storageBucket: "toy-marketplace-5ed0a.appspot.com",
  messagingSenderId: "91838682136",
  appId: "1:91838682136:web:f3e0ab5471daba69b21f6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app