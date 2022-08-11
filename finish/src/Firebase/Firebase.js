import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyC3eR3iKir7k8mEyS0BHVMNFgqkw_7fnDI",
    authDomain: "carsv2-6fe95.firebaseapp.com",
    databaseURL: "https://carsv2-6fe95-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "carsv2-6fe95",
    storageBucket: "carsv2-6fe95.appspot.com",
    messagingSenderId: "245252900258",
    appId: "1:245252900258:web:e239c745451557f9015efb",
    measurementId: "G-5P4Z1LD8XL"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export{
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};