import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "PASTE_YOUR_REAL_KEY_HERE",
  authDomain: "yourproject.firebaseapp.com",
  projectId: "yourproject",
  storageBucket: "yourproject.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "XXXXXXXXXXXXX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
