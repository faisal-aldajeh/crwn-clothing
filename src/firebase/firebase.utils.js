import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
                apiKey            : "AIzaSyD_OhJEUxI1kBot4rcHq90ttmJ4dRIGtGA",
                authDomain        : "crwn-db-1234.firebaseapp.com",
                projectId         : "crwn-db-1234",
                storageBucket     : "crwn-db-1234.appspot.com",
                messagingSenderId : "1032334929118",
                appId             : "1:1032334929118:web:e87826e63125e19e45264f",
                measurementId     : "G-107RB4TJ1C"
             };
firebase.initializeApp(config);
export const auth      = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promot: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;