import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GithubAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCM0wHWsNMXFi4LifegT1FgveE3ZXqITqI",
    authDomain: "codefest-76404.firebaseapp.com",
    projectId: "codefest-76404",
    storageBucket: "codefest-76404.appspot.com",
    messagingSenderId: "813056506838",
    appId: "1:813056506838:web:3183d1e6d53eb2a212c277",
    measurementId: "G-M2D7G8P1XB"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// GitHub provider setup
const provider = new GithubAuthProvider();

document.getElementById('github-login').addEventListener('click', () => {
    console.log("GitHub login button clicked"); // Log when button is clicked
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("GitHub sign-in successful"); // Log when sign-in is successful
            const user = result.user;
            document.getElementById('popupOverlay').style.display = 'none';
            document.getElementById('user-info').style.display = 'flex';
            document.getElementById('user-avatar').src = user.photoURL;
            document.getElementById('user-name').textContent = user.displayName;
        })
        .catch((error) => {
            console.error("Error during login:", error); // Log any errors
        });
});

document.getElementById('logout').addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            console.log("User signed out"); // Log when sign-out is successful
            document.getElementById('github-login').style.display = 'block';
            document.getElementById('user-info').style.display = 'none';
        })
        .catch((error) => {
            console.error("Error during logout:", error); // Log any errors
        });
});

document.getElementById('save-code').addEventListener('click', () => {
    const user = auth.currentUser;
    if (user) {
        const htmlCode = document.getElementById('html-code').value;
        const cssCode = document.getElementById('css-code').value;
        const jsCode = document.getElementById('js-code').value;

        db.collection('users').doc(user.uid).collection('code').add({
            html: htmlCode,
            css: cssCode,
            js: jsCode,
            timestamp: new Date()
        }).then(() => {
            alert('Code saved successfully!');
        }).catch((error) => {
            console.error("Error saving code:", error);
        });
    } else {
        alert('Please login to save your code.');
    }
});

function togglePopup() {
    document.getElementById('popupOverlay').classList.add('show');
}

function closePopupWindow() {
    document.getElementById('popupOverlay').classList.remove('show');
}

export { auth, db, GithubAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
