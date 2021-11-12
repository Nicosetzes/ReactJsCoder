import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYuEO8iR5gJXfr99iGZkuoFpWBe4_kXx4",
  authDomain: "setzes-ecommerce.firebaseapp.com",
  projectId: "setzes-ecommerce",
  storageBucket: "setzes-ecommerce.appspot.com",
  messagingSenderId: "470904018720",
  appId: "1:470904018720:web:8fd9769c7b6451fa06a945",
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
