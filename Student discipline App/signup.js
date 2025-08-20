document.addEventListener('DOMContentLoaded', function () {
const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('newUsername').value.trim();
    const password = document.getElementById('newPassword').value.trim();

    if (username && password) {
      localStorage.setItem('teacherUsername', username);
      localStorage.setItem('teacherPassword', password);

      alert("Account created successfully! Please log in.");
      window.location.href = 'teacherlogin.html'; // ✅ Redirect to login page
    } else {
      alert("Please fill in both fields.");
    }
  });
});