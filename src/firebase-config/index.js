import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhXj5iWRvBrj4uKPXbYYN9pIn-c1bLWlQ",
  authDomain: "sample3-36801.firebaseapp.com",
  projectId: "sample3-36801",
  storageBucket: "sample3-36801.firebasestorage.app",
  messagingSenderId: "48450131549",
  appId: "1:48450131549:web:71143d5febed3544ed1fb4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

async function loginUsingEmailAndPassword(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
}

async function registerUsingEmailAndPassword(name, email, password) {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
  }
}

function logout() {
  signOut(auth);
}

export {
  auth,
  loginUsingEmailAndPassword,
  logout,
  registerUsingEmailAndPassword,
};
