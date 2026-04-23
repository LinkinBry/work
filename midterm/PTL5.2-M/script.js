const userForm = document.getElementById('userForm');
const passwordField = document.getElementById('password');
const eyeOpen = document.getElementById('eyeOpen');
const eyeClosed = document.getElementById('eyeClosed');
const togglePass = document.getElementById('togglePass');
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("registeredUser", username);
    localStorage.setItem("registeredPass", password);

    alert("Registration successful! You can now log in.");
    window.location.href = "login.html";
  });

  const regPasswordField = document.getElementById("regPassword");
  const confirmPasswordField = document.getElementById("confirmPassword");
  const regEyeOpen = document.getElementById("eyeOpenReg");
  const regEyeClosed = document.getElementById("eyeClosedReg");
  const toggleRegPass = document.getElementById("toggleRegPass");

  toggleRegPass.addEventListener("click", function() {
    if (regPasswordField.type === "password" && confirmPasswordField.type === "password") {
      regPasswordField.type = "text";
      confirmPasswordField.type = "text";
      regEyeOpen.style.display = "none";
      regEyeClosed.style.display = "inline";
    } else {
      regPasswordField.type = "password";
      confirmPasswordField.type = "password";
      regEyeOpen.style.display = "inline";
      regEyeClosed.style.display = "none";
    }
  });
}

if (userForm) {
  userForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = passwordField.value;

    const registeredUser = localStorage.getItem("registeredUser");
    const registeredPass = localStorage.getItem("registeredPass");

    if (username === registeredUser && password === registeredPass) {
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
}

function handleCredentialResponse(response) {
  console.log("Google ID Token: " + response.credential);
  alert("Account login successful!");
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "175457495993-adp8j8d69m4ef058pfja7biobhc1i5dm.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("googleLogin"),
    { theme: "outline", size: "large" }
  );
};
