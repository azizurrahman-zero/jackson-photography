// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4j6lbIBCyamIUiIyMDb77qp6fhrH3eDE",
    authDomain: "jackson-photography-zero.firebaseapp.com",
    projectId: "jackson-photography-zero",
    storageBucket: "jackson-photography-zero.appspot.com",
    messagingSenderId: "276438805130",
    appId: "1:276438805130:web:b9661c59b727aec4b99b73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;