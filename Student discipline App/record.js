// Load saved behaviours
window.addEventListener("load", function() {
  const records = JSON.parse(localStorage.getItem("behaviourRecords")) || [];
  records.forEach(addRecordToUI);
});

// Handle form submission
document.getElementById("behaviourForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const type = document.getElementById("behaviourType").value;
  const notes = document.getElementById("notes").value.trim();
  const date = document.getElementById("date").value || new Date().toISOString().split("T")[0];

  if (!name || !type || !notes) return;

  const record = { name, type, notes, date };
  const saved = JSON.parse(localStorage.getItem("behaviourRecords")) || [];
  saved.push(record);
  localStorage.setItem("behaviourRecords", JSON.stringify(saved));

  addRecordToUI(record);

  // Clear form
  document.getElementById("behaviourForm").reset();
});

// Add record to UI
function addRecordToUI(record) {
  const li = document.createElement("li");
  li.textContent = `${record.date} - ${record.name} (${record.type}): ${record.notes}`;
  document.getElementById("behaviourList").appendChild(li);
}