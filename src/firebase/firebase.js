
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDxbUouKuI1oWGRtXtJpr22czWuEyMYAU8",
  authDomain: "filmyverse-cc6e8.firebaseapp.com",
  projectId: "filmyverse-cc6e8",
  storageBucket: "filmyverse-cc6e8.appspot.com",
  messagingSenderId: "647633557723",
  appId: "1:647633557723:web:23add8c57339b58b7214fe"
};


const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);
export const moviesRef =collection(db,"movies");
export const reviewsRef =collection(db,"reviews");
export const usersRef =collection(db,"users");
export default app;