import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD2k6v8xT5Gjz9LsJTlIpu2WVPea_-dLqc",
  authDomain: "linkedin-clone-74c83.firebaseapp.com",
  projectId: "linkedin-clone-74c83",
  storageBucket: "linkedin-clone-74c83.appspot.com",
  messagingSenderId: "752468097355",
  appId: "1:752468097355:web:2e385abdcae19314be90ce",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();
export { auth, db, provider, storage };
