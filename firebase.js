import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI1J0_2OaXqssrebHhi8LctY7W2Q2mu-o",
    authDomain: "codefest-ab76b.firebaseapp.com",
    projectId: "codefest-ab76b",
    storageBucket: "codefest-ab76b.appspot.com",
    messagingSenderId: "999440521581",
    appId: "1:999440521581:web:057e7039c95157716c2264",
    measurementId: "G-PJPHR5QYBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, GithubAuthProvider, signInWithPopup, signOut };
    