// 🔁 Load students into dropdown
window.addEventListener("load", function() {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const dropdown = document.getElementById("studentDropdown");

  students.forEach(function(name) {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    dropdown.appendChild(option);
  });

  const behaviourRecords = JSON.parse(localStorage.getItem("behaviour")) || [];
  behaviourRecords.forEach(addBehaviourToUI);
});

// ➕ Record behaviour
document.getElementById("behaviourForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const student = document.getElementById("studentDropdown").value;
  const note = document.getElementById("behaviourInput").value.trim();
  if (!student || !note) return;

  const record = `${student}: ${note}`;
  const saved = JSON.parse(localStorage.getItem("behaviour")) || [];
  saved.push(record);
  localStorage.setItem("behaviour", JSON.stringify(saved));

  addBehaviourToUI(record);
  document.getElementById("behaviourInput").value = "";
});

// ➕ Show behaviour note
function addBehaviourToUI(text) {
  const li = document.createElement("li");
  li.textContent = text;
  document.getElementById("behaviourList").appendChild(li);
}