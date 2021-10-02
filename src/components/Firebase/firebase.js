// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

 const config = {
    apiKey: "AIzaSyDRu_RcDneZSdolHqQMT10H8hzIVfkvWbE",
    authDomain: "harmonia-b9c29.firebaseapp.com",
    projectId: "harmonia-b9c29",
    storageBucket: "harmonia-b9c29.appspot.com",
    messagingSenderId: "472553065385",
    appId: "1:472553065385:web:a98cd290b40c36ca2252b8",
    measurementId: "G-7CX96MWYYK"
  };
  
class Firebase {
    constructor() {
        const app = initializeApp(config);
        this.auth = getAuth();
        this.db = getDatabase();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');
}

export default Firebase;