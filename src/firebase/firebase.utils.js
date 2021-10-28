import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDoc, setDoc, doc, getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDwzcE4OWOIapeMOh6mMtT8LQIEliHqSyI",
  authDomain: "pokemon-strategy-2e00d.firebaseapp.com",
  projectId: "pokemon-strategy-2e00d",
  storageBucket: "pokemon-strategy-2e00d.appspot.com",
  messagingSenderId: "210237919859",
  appId: "1:210237919859:web:7b4833ea0395ee513a5006",
};
export const app = initializeApp(config),
  auth = getAuth(),
  provider = new GoogleAuthProvider(),
  firestore = getFirestore(app);

export const createUserProfileDocument = async (user) => {
  if (user !== null) {
    const docRef = await doc(firestore, "users/" + user.uid);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists) {
      setDoc(docRef, {
        name: user.displayName,
        email: user.email,
      });
    }
  }
};
export const signInWithGoogle = () => signInWithPopup(auth, provider);
