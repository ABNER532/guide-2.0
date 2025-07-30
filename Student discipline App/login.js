document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const inputUser = document.getElementById("username").value;
  const inputPass = document.getElementById("password").value;

  const storedUser = localStorage.getItem("savedUser");
  const storedPass = localStorage.getItem("savedPass");

  if (inputUser === storedUser && inputPass === storedPass) {
    alert("Login successful!");
    window.location.href = "dashboard.html"; // replace with your next page
  } else {
    alert("Login failed. Check your username or password.");
  }
});