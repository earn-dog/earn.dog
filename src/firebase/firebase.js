import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
  apiKey: Buffer.from(process.env.FIREBASE_API_KEY, "base64").toString(),
  authDomain: Buffer.from(
    process.env.FIREBASE_AUTH_DOMAIN,
    "base64"
  ).toString(),
  databaseURL: Buffer.from(
    process.env.FIREBASE_DATABASE_URL,
    "base64"
  ).toString(),
  projectId: Buffer.from(
    process.env.FIREBASE_DATABASE_URL,
    "base64"
  ).toString(),
  storageBucket: Buffer.from(
    process.env.FIREBASE_PROJECT_ID,
    "base64"
  ).toString(),
  messagingSenderId: Buffer.from(
    process.env.FIREBASE_STORAGE_BUCKET,
    "base64"
  ).toString(),
  appId: Buffer.from(process.env.FIREBASE_APP_ID, "base64").toString()
};

const devConfig = {
  apiKey: Buffer.from(process.env.FIREBASE_API_KEY_DEV, "base64").toString(),
  authDomain: Buffer.from(
    process.env.FIREBASE_AUTH_DOMAIN_DEV,
    "base64"
  ).toString(),
  databaseURL: Buffer.from(
    process.env.FIREBASE_DATABASE_URL_DEV,
    "base64"
  ).toString(),
  projectId: Buffer.from(
    process.env.FIREBASE_PROJECT_ID_DEV,
    "base64"
  ).toString(),
  storageBucket: Buffer.from(
    process.env.FIREBASE_STORAGE_BUCKET_DEV,
    "base64"
  ).toString(),
  messagingSenderId: Buffer.from(
    process.env.FIREBASE_MESSAGING_SENDER_ID_DEV,
    "base64"
  ).toString(),
  appId: Buffer.from(process.env.FIREBASE_APP_ID_DEV, "base64").toString()
};

// FIREBASE_API_KEY_DEV
// FIREBASE_AUTH_DOMAIN_DEV
// FIREBASE_DATABASE_URL_DEV
// FIREBASE_PROJECT_ID_DEV
// FIREBASE_STORAGE_BUCKET_DEV
// FIREBASE_MESSAGING_SENDER_ID_DEV
// FIREBASE_APP_ID_DEV

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/plus.login");

export { db, auth, provider };
