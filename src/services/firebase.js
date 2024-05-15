import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnnhD1Y3dDiNKgTMghTWAwyo26AeNrzXU",
  authDomain: "cac-weatherapp.firebaseapp.com",
  projectId: "cac-weatherapp",
  storageBucket: "cac-weatherapp.appspot.com",
  messagingSenderId: "418578308824",
  appId: "1:418578308824:web:3a9d58dc444682f21781ad"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db };
