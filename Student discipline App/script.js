const studentForm = document.getElementById('studentForm');
const studentInput = document.getElementById('studentInput');
const studentList = document.getElementById('studentList');
const searchInput = document.getElementById('searchInput');

let students = JSON.parse(localStorage.getItem('students')) || [];

studentForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = studentInput.value.trim();

  if (name === '') return;

  const nameLower = name.toLowerCase();
  const alreadyExists = students.some(student => student.toLowerCase() === nameLower);

  if (alreadyExists) {
    alert(`"${name}" is already in the list.`);
    return;
  }

  students.push(name);
  localStorage.setItem('students', JSON.stringify(students));
  studentInput.value = '';
  renderStudents();
});

searchInput.addEventListener('input', renderStudents);

function renderStudents() {
  const query = searchInput.value.toLowerCase();
  studentList.innerHTML = '';
  students
    .filter(name => name.toLowerCase().includes(query))
    .forEach(name => {
      const li = document.createElement('li');
      li.textContent = name;
      studentList.appendChild(li);
    });
}

// Initial render on page load
renderStudents();