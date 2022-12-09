import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAqOiKHkVvNS2lHeIgYXA5a3tBwCrXvu04",
    authDomain: "portfolio-linkedin-clone.firebaseapp.com",
    projectId: "portfolio-linkedin-clone",
    storageBucket: "portfolio-linkedin-clone.appspot.com",
    messagingSenderId: "172060837489",
    appId: "1:172060837489:web:8d01ca3bc7aa676ad3bdd0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;