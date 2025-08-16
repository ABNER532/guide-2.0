const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (username === '' || password === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Save teacher credentials (for demo purposes only — not secure!)
  localStorage.setItem('teacherUsername', username);
  localStorage.setItem('teacherPassword', password);

  // Redirect to dashboard
  window.location.href = 'teacher-dashboard.html';
});