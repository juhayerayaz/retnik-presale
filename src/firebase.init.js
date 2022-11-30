// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0cJqnhLdZXMYLymeSt4HNPKorlSlYtiI",
    authDomain: "retnik-presale.firebaseapp.com",
    projectId: "retnik-presale",
    storageBucket: "retnik-presale.appspot.com",
    messagingSenderId: "377930650975",
    appId: "1:377930650975:web:ce2fb1673d57c8df1e92ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;