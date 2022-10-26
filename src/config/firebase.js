// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrtwLTiIliTusAHMBmzxF4zHrOkqCPXaE",
  authDomain: "prakicu-c794c.firebaseapp.com",
  projectId: "prakicu-c794c",
  storageBucket: "prakicu-c794c.appspot.com",
  messagingSenderId: "201020294907",
  appId: "1:201020294907:web:f0a49d1038f72fb4b6925e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
