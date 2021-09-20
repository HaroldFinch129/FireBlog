
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5U7wcCL9JfODpySRWeOmFJUbPKqYn7iI",
  authDomain: "fasebook-68c35.firebaseapp.com",
  projectId: "fasebook-68c35",
  storageBucket: "fasebook-68c35.appspot.com",
  messagingSenderId: "54940915076",
  appId: "1:54940915076:web:c224a64be6c754f7abf9d1"
};


const app = initializeApp(firebaseConfig);

export const createUser = (email,password) => {


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });


}

export const login = (email, password) => {

}

export const continueWithGoogle = () => {

}

export const userObserver = (setCurrentUser) => {

}
export const logOut = () => {

}
