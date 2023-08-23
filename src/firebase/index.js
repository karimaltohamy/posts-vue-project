import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyACPHhZk0xjP4l_Q6OdSUgaQhBo3mr8hrs",
  authDomain: "vue-router-auth-2e2ef.firebaseapp.com",
  projectId: "vue-router-auth-2e2ef",
  storageBucket: "vue-router-auth-2e2ef.appspot.com",
  messagingSenderId: "2012959059",
  appId: "1:2012959059:web:3ba683b1c573a2948611a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}