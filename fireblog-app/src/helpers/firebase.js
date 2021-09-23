import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB5U7wcCL9JfODpySRWeOmFJUbPKqYn7iI",
  authDomain: "fasebook-68c35.firebaseapp.com",
  projectId: "fasebook-68c35",
  storageBucket: "fasebook-68c35.appspot.com",
  messagingSenderId: "54940915076",
  appId: "1:54940915076:web:c224a64be6c754f7abf9d1"
};

const app = initializeApp(firebaseConfig);

export const createUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log("kullanıcı kayıt oldu");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("kullanıcı kayıt hatası");

      
    });
};

export const logIn = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const continueWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const userObserver = (setCurrentUser, setPending) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      setCurrentUser(user);
      setPending(false)
    
    } else {
      setCurrentUser(null)
      setPending(false)
  };
});
}

export const logOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
 