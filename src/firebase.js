import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKzLRZhZag9BIQyPDc-yAz4fChaYGQIo4",
  authDomain: "app-ed93a.firebaseapp.com",
  databaseURL: "https://app-ed93a.firebaseio.com",
  projectId: "app-ed93a",
  storageBucket: "app-ed93a.appspot.com",
  messagingSenderId: "634037310553",
  appId: "1:634037310553:web:6623e7860f955eac400d48",
  measurementId: "G-R7LMXDC7X7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
