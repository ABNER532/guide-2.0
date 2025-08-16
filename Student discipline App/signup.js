// signup.js

document.getElementById('createAccountForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('newUsername').value.trim();
  const password = document.getElementById('newPassword').value;

  // load existing users or start fresh
  const users = JSON.parse(localStorage.getItem('users') || '{}');

  // prevent overwriting an existing account
  if (users[username]) {
    alert('Username already exists. Please choose another.');
    return;
  }

  // add the new user and persist
  users[username] = password;
  localStorage.setItem('users', JSON.stringify(users));

  alert('Account created! Please log in.');
  window.location.href = 'teacherlogin.html';
});