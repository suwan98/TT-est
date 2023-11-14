import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAVZQGLaCPlIWguScscLY6XZBd_OD1UUGk",
  authDomain: "ttest-4485e.firebaseapp.com",
  projectId: "ttest-4485e",
  storageBucket: "ttest-4485e.appspot.com",
  messagingSenderId: "394097606937",
  appId: "1:394097606937:web:9e524a738949ea85618588",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
