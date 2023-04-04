// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"



// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAIcbXbnaqOaDVbpYcKbsB3pbNoFcZVymQ",
  authDomain: "lactive.firebaseapp.com",
  projectId: "lactive",
  storageBucket: "lactive.appspot.com",
  messagingSenderId: "1048506300027",
  appId: "1:1048506300027:web:c2420eaca043c5a77614de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
