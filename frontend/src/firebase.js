import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCzIg1FKgVd4hMgQj5Su7f9qOZon3mrOc",
  authDomain: "video-c65f9.firebaseapp.com",
  projectId: "video-c65f9",
  storageBucket: "video-c65f9.appspot.com",
  messagingSenderId: "417605509094",
  appId: "1:417605509094:web:0869d33512e05034028027"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;


