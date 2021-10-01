// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
 } from "firebase/auth";

 const firebaseConfig = {
    apiKey: ***************, 
    authDomain: ***************,
    projectId: ***************,
    storageBucket: ***************,
    messagingSenderId: ***************,
    appId: ***************,
    measurementId: ***************
  };
  
class Firebase {
    constructor() {
        const app = initializeApp(firebaseConfig);
        this.auth = getAuth();
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
        createUserWithEmailAndPassword(this.auth, email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        signInWithEmailAndPassword(this.auth, email, password);
    doSignOut = () => {
        signOut(this.auth);
    };
    doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = (password) =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;