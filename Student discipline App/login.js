document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const enteredUsername = document.getElementById('username').value.trim();
    const enteredPassword = document.getElementById('password').value.trim();

    const storedUsername = localStorage.getItem('teacherUsername');
    const storedPassword = localStorage.getItem('teacherPassword');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
      alert("Login successful!");
      window.location.href = 'welcome-teacher.html';
    } else {
      alert("Invalid username or password.");
    }
  });
});