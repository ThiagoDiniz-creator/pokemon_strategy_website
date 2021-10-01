import firebase from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDwzcE4OWOIapeMOh6mMtT8LQIEliHqSyI",
  authDomain: "pokemon-strategy-2e00d.firebaseapp.com",
  projectId: "pokemon-strategy-2e00d",
  storageBucket: "pokemon-strategy-2e00d.appspot.com",
  messagingSenderId: "210237919859",
  appId: "1:210237919859:web:7b4833ea0395ee513a5006",
};
const auth = getAuth(), provider = GoogleAuthProvider;
provider.setCustomParameters({
    "prompt" : "login_with_google"
});

const signInWithGoogle = () => signInWithPopup(auth, provider);

firebase.initializeApp(config);
