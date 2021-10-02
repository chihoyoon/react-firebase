// Import the functions you need from the SDKs you need
import app from "firebase/app";
import 'firebase/auth';

 const config = {
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
        app.initializeApp(config);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;