import { auth, GithubAuthProvider, signInWithPopup, signOut } from './firebase-config.js';

document.getElementById('github-login').addEventListener('click', () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            document.getElementById('popupOverlay').style.display = 'none';
            document.getElementById('user-info').style.display = 'flex';
            document.getElementById('user-avatar').src = user.photoURL;
            document.getElementById('user-name').textContent = user.displayName;
        })
        .catch((error) => {
            console.error("Error during login:", error);
        });
});

document.getElementById('logout').addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            document.getElementById('github-login').style.display = 'block';
            document.getElementById('user-info').style.display = 'none';
        })
        .catch((error) => {
            console.error("Error during logout:", error);
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
