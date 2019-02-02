import firebase from "firebase/app";
import "firebase/firestore";

var config = {
    apiKey: "AIzaSyACPZsC5-LVZ5qTrZK8QnsEDDwbC4sfgQI",
    authDomain: "bagdrop-eddd8.firebaseapp.com",
    databaseURL: "https://bagdrop-eddd8.firebaseio.com",
    projectId: "bagdrop-eddd8",
    storageBucket: "bagdrop-eddd8.appspot.com",
    messagingSenderId: "452602524862"
};
firebase.initializeApp(config);

export default firebase.firestore;