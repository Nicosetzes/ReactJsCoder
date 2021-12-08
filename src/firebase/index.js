import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQzmO8T37H9gvYgPKlY_qM8VNYez5R48w",
  authDomain: "react-ecommerce-setzes.firebaseapp.com",
  projectId: "react-ecommerce-setzes",
  storageBucket: "react-ecommerce-setzes.appspot.com",
  messagingSenderId: "268408151501",
  appId: "1:268408151501:web:c74c29753dfe4bf38ef884",
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
