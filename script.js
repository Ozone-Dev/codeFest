function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}

// Timer functionality
let initialTime = 45 * 60; // Convert 45 minutes to seconds
let timerElement = document.getElementById("timer");

function updateTime() {
    let minutes = Math.floor(initialTime / 60);
    let seconds = initialTime % 60;
    minutes = minutes.toString().padStart(2, "0"); // Add leading zero for single-digit minutes
    seconds = seconds.toString().padStart(2, "0"); // Add leading zero for single-digit seconds
    timerElement.textContent = `${minutes}:${seconds}`;

    if (initialTime > 0) {
        if (initialTime <= 5 * 60 && initialTime % 60 === 0) { // Warn from 40 minutes onwards
            alert(`Warning! Only ${initialTime / 60} minutes left. Please submit your code.`);
        }
        initialTime--;
    } else {
        alert("Time's Up!");
        document.getElementById('submit-btn').disabled = true; // Disable the submit button
    }

    setTimeout(updateTime, 1000); // Update timer every second
}

updateTime(); // Start the timer on page load

// Form submission handling
let codeForm = document.getElementById("code-form"); // Reference the code form

function submitCode(event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Get code from textareas
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;

    // Implement your logic to submit the code (e.g., send to server, display output)
    console.log("Submitting code:");
    console.log("HTML:", htmlCode);
    console.log("CSS:", cssCode);
    console.log("JS:", jsCode);

    // If the timer is still running, allow submission
    if (initialTime > 0) {
        document.getElementById('save-code').click();
    } else {
        alert("Cannot submit code after the timer has ended.");
    }
}

codeForm.addEventListener("submit", submitCode); // Add submit event listener

// Popup and form switching
function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}

function switchForm(formType) {
    const loginBox = document.querySelector('.login-form');
    const signupBox = document.querySelector('.signup-form');
    
    if (formType === 'signup') {
        loginBox.style.display = 'none'; // Hide login form
        signupBox.style.display = 'block'; // Show signup form
    } else {
        loginBox.style.display = 'block'; // Show login form
        signupBox.style.display = 'none'; // Hide signup form
    }
}

function closePopupWindow() {
    const overlay = document.getElementById("popupOverlay");
    overlay.classList.remove('show');
}

// Form validation
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    return re.test(email);
}

function validatePassword(password) {
    // At least 6 characters long
    return password.length >= 6;
}

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (!validateEmail(email)) {
        alert('Invalid email address.');
        return;
    }

    if (!validatePassword(password)) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Handle user registration with Firebase Authentication
    // Your Firebase registration code here
});
