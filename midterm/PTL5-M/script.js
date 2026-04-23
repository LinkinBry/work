const userForm = document.getElementById('userForm');
const passwordField = document.getElementById('password');
const eyeOpen = document.getElementById('eyeOpen');
const eyeClosed = document.getElementById('eyeClosed');
const togglePass = document.getElementById('togglePass');

const validUser = "Bryan";
const validPass = "244466666";

userForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = passwordField.value;

  if (username === validUser && password === validPass) {
    alert("Login successful!");
  } else {
    alert("Invalid username or password. Try again.");
  }
});

togglePass.addEventListener('click', function() {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    eyeOpen.style.display = "none";
    eyeClosed.style.display = "inline";
  } else {
    passwordField.type = "password";
    eyeOpen.style.display = "inline";
    eyeClosed.style.display = "none";
  }
});
