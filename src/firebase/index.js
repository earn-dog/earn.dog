import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseDevConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const firebaseProdConfig = {};

const firebaseStagingConfig = {};

const config =
  process.env.NODE_ENV === "production"
    ? firebaseProdConfig
    : process.env.NODE_ENV === "staging"
    ? firebaseStagingConfig
    : firebaseDevConfig;

firebase.initializeApp(config);

export default firebase;
