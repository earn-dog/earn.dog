import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: Buffer.from(process.env.FIREBASE_API_KEY, "base64").toString(),
  authDomain: Buffer.from(
    process.env.FIREBASE_AUTH_DOMAIN,
    "base64"
  ).toString(),
  databaseURL: Buffer.from(
    process.env.FIREBASE_DATABASE_URL,
    "base64"
  ).toString(),
  projectId: Buffer.from(process.env.FIREBASE_PROJECT_ID, "base64").toString(),
  storageBucket: Buffer.from(
    process.env.FIREBASE_STORAGE_BUCKET,
    "base64"
  ).toString(),
  messagingSenderId: Buffer.from(
    process.env.FIREBASE_MESSAGING_SENDER_ID,
    "base64"
  ).toString(),
  appId: Buffer.from(process.env.FIREBASE_APP_ID, "base64").toString()
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
firebase.auth().useDeviceLanguage();

export { auth, firebase };
