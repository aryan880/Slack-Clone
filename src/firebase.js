import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJ09rTv4WDVckDt9BDBX6OxSn3QSwpqx0",
  authDomain: "slack-clone-f6ae0.firebaseapp.com",
  databaseURL: "https://slack-clone-f6ae0.firebaseio.com",
  projectId: "slack-clone-f6ae0",
  storageBucket: "slack-clone-f6ae0.appspot.com",
  messagingSenderId: "137092609670",
  appId: "1:137092609670:web:2459457e094b0671fb8307",
  measurementId: "G-1Q7PV100Q0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;
