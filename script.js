function run(){
  let htmlCode= document.getElementById("html-code").value;
  let cssCode= document.getElementById("css-code").value;
  let jsCode= document.getElementById("js-code").value;
  let output= document.getElementById("output");
  let myText=document.querySelector("#html-code").value;
  console.log(myText);

  output.contentDocument.body.innerHTML = htmlCode +"<style>" + cssCode + "</style>";
  output.contentWindow.eval(jsCode);
}

// Timer functionality
let initialTime = 45 * 60; // Convert 45 minutes to seconds (45 * 60)
let timerElement = document.getElementById("timer");

function updateTime() {
  let minutes = Math.floor(initialTime / 60);
  let seconds = initialTime % 60;
  minutes = minutes.toString().padStart(2, "0"); // Add leading zero for single-digit minutes
  seconds = seconds.toString().padStart(2, "0"); // Add leading zero for single-digit seconds
  timerElement.textContent = `${minutes}:${seconds}`;

  if (initialTime > 0) {
    initialTime--;
  } else {
    // Handle timer completion (e.g., disable editing, display alert)
    alert("Time's Up!"); // Example log message
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
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePasswords(password, confirmPassword) {
  return password === confirmPassword;
}

function validateForm(formId) {
  const form = document.getElementById(formId);
  const email = form.querySelector('#signupEmail').value;
  const password = form.querySelector('#signupPassword').value;
  const confirmPassword = form.querySelector('#signupConfirmPassword').value;

  if (!validateEmail(email)) {
    alert('Please enter a valid email.');
    return false;
  }

  if (!validatePasswords(password, confirmPassword)) {
    alert('Passwords do not match.');
    return false;
  }

  return true;
}
