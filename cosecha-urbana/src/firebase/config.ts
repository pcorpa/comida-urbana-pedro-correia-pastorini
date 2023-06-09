// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Constants from "expo-constants";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Constants?.manifest?.extra?.firebaseApiKey,
  authDomain: Constants?.manifest?.extra?.firebaseAuthDomain,
  databaseURL: Constants?.manifest?.extra?.firebaseDatabaseURL,
  projectId: Constants?.manifest?.extra?.firebaseProjectId,
  storageBucket: Constants?.manifest?.extra?.firebaseStorageBucket,
  messagingSenderId: Constants?.manifest?.extra?.firebaseMessagingSenderId,
  appId: Constants?.manifest?.extra?.firebaseAppId,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseDB = getFirestore(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
