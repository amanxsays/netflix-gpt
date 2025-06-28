// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6CYmAiV5yn2Chp3gW2tQVc6dfUq8ptPM",
  authDomain: "netflixgpt-aman.firebaseapp.com",
  projectId: "netflixgpt-aman",
  storageBucket: "netflixgpt-aman.firebasestorage.app",
  messagingSenderId: "746938451511",
  appId: "1:746938451511:web:5859f18bdb013e443ca1b2",
  measurementId: "G-YT80G3T2TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);