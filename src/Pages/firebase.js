import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCABfVKl7wkRpIRphTIVessbboVkX6Satc",
  authDomain: "my-login-app-b296a.firebaseapp.com",
  projectId: "my-login-app-b296a",
  storageBucket: "my-login-app-b296a.firebasestorage.app",
  messagingSenderId: "19247163219",
  appId: "1:19247163219:web:f43420bdeb0eabc0d163a6",
  // measurementId: "G-DY840280DG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user; // returns the signIn user
  } catch (error) {
    console.error("Google login failed:", error);
    throw error;
  }
};
