
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2ou0nxbqLVoEh3rYOfu1VnsliEZrTMvc",
  authDomain: "netflix-clone-r-61b35.firebaseapp.com",
  projectId: "netflix-clone-r-61b35",
  storageBucket: "netflix-clone-r-61b35.appspot.com",
  messagingSenderId: "65207706331",
  appId: "1:65207706331:web:04b113f99a1ed0537f62fe"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);