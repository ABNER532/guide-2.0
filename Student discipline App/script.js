// script.js

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // 1. Read and trim inputs
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  // 2. Grab the users map
  const users = JSON.parse(localStorage.getItem('users') || '{}');

  // 3. Validate
  if (users[username] === password) {
    // success: save current user and go to dashboard
    localStorage.setItem('currentUser', username);
    alert('Login successful!');
    window.location.href = 'dashboard.html';
  } else {
    // fail
    alert('Invalid username or password.');
  }
});