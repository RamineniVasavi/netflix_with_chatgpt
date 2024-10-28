// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzRYa5qsujQe-AGlJP1_bQ4QKJd0q7MyM",
  authDomain: "netflixchatgpt-9b0cf.firebaseapp.com",
  projectId: "netflixchatgpt-9b0cf",
  storageBucket: "netflixchatgpt-9b0cf.appspot.com",
  messagingSenderId: "46211805453",
  appId: "1:46211805453:web:f6f1428b9ad92435240044",
  measurementId: "G-PGHYME8SE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);