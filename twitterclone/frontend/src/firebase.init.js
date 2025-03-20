import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdv0dyTYJe09oRbJaZ7Jh3rjW33JSFhkg",
  authDomain: "twitterxclone.firebaseapp.com",
  projectId: "twitterxclone",
  storageBucket: "twitterxclone.appspot.com",
  messagingSenderId: "666451950497",
  appId: "1:666451950497:web:bd4b48285faca7647429e0",
  measurementId: "G-84MP0CTWWK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
export default auth;  