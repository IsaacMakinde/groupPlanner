// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAw6IdvS2zglB1iakZol8yUQHIQuLWXNHM",
  authDomain: "planner-426320.firebaseapp.com",
  projectId: "planner-426320",
  storageBucket: "planner-426320.appspot.com",
  messagingSenderId: "936081665578",
  appId: "1:936081665578:web:c404f4d4ae247cf0db1d53",
  measurementId: "G-13C9ZS3SSE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
