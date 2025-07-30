// 🔁 Load students from localStorage when page opens
window.addEventListener("load", function() {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.forEach(addStudentToUI);
});

// 👨‍🏫 Handle form submission and save student
document.getElementById("studentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const studentName = document.getElementById("studentInput").value.trim();
  if (studentName === "") return;

  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(studentName);
  localStorage.setItem("students", JSON.stringify(students));

  addStudentToUI(studentName);
  document.getElementById("studentInput").value = "";
});

// 🔎 Enable search
document.getElementById("searchInput").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  const students = document.querySelectorAll("#studentList li");

  students.forEach(function(student) {
    student.style.display = student.textContent.toLowerCase().includes(query) ? "block" : "none";
  });
});

// ➕ Add student to the list with delete button
function addStudentToUI(name) {
  const li = document.createElement("li");
  li.textContent = name;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.style.color = "red";
  deleteBtn.style.cursor = "pointer";

  deleteBtn.addEventListener("click", function() {
    if (confirm("ARE YOU SURE YOU WANT TO DELETE THIS STUDENT")) {
      li.remove();

      // Remove from localStorage
      const students = JSON.parse(localStorage.getItem("students")) || [];
      const updated = students.filter(student => student !== name);
      localStorage.setItem("students", JSON.stringify(updated));
    }
  });

  li.appendChild(deleteBtn);
  document.getElementById("studentList").appendChild(li);
}