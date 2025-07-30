document.getElementById("createAccountForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const newUser = document.getElementById("newUsername").value;
  const newPass = document.getElementById("newPassword").value;

  localStorage.setItem("savedUser", newUser);
  localStorage.setItem("savedPass", newPass);

  alert("Account created successfully!");
  window.location.href = "login.html"; // sends user to login page
});