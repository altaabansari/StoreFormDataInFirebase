import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBT_qCpaWjGuu__Ijg9_eDU4GmpNRvoYU4",
  authDomain: "fir-practise25march.firebaseapp.com",
  projectId: "fir-practise25march",
  storageBucket: "fir-practise25march.appspot.com",
  messagingSenderId: "791906839590",
  appId: "1:791906839590:web:d342ccad9b9ea140a48ae7",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
