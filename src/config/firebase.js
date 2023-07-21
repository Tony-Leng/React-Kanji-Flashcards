import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCOBHi4lBk24x4tTtqxyegfkvICfSu77Jk",
  authDomain: "jlpt-flashcards.firebaseapp.com",
  projectId: "jlpt-flashcards",
  storageBucket: "jlpt-flashcards.appspot.com",
  messagingSenderId: "1029473049774",
  appId: "1:1029473049774:web:f92092bae7b520bb03e13f",
  measurementId: "G-N15BEDDN38"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
