// teacherlogin.js

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  // load the users map
  const users = JSON.parse(localStorage.getItem('users') || '{}');

  // validate credentials
  if (users[username] === password) {
    localStorage.setItem('currentUser', username);
    alert('Login successful!');
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid username or password.');
  }
});