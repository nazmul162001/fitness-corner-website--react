import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBypVGSM-A3UUAJFAMBTPQwmTjZdrIe7cY",
  authDomain: "fitness-corner-93736.firebaseapp.com",
  projectId: "fitness-corner-93736",
  storageBucket: "fitness-corner-93736.appspot.com",
  messagingSenderId: "898051496707",
  appId: "1:898051496707:web:fe3fda35d0696e322de736"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
