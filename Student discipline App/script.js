// Login handling
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user === "teacher" && pass === "discipline123") {
      window.location.href = "dashboard.html";
    } else {
      alert("Incorrect login.");
    }
  });
}

// Record behavior
if (document.getElementById("behaviorForm")) {
  document.getElementById("behaviorForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const report = {
      student: document.getElementById("studentName").value,
      type: document.getElementById("behaviorType").value,
      desc: document.getElementById("description").value,
      date: document.getElementById("incidentDate").value
    };
    let reports = JSON.parse(localStorage.getItem("reports") || "[]");
    reports.push(report);
    localStorage.setItem("reports", JSON.stringify(reports));
    alert("Report saved!");
    e.target.reset();
  });
}

// View reports
if (document.getElementById("reportTable")) {
  let reports = JSON.parse(localStorage.getItem("reports") || "[]");
  const table = document.getElementById("reportTable");
  reports.forEach(r => {
    let row = table.insertRow();
    row.insertCell(0).innerText = r.student;
    row.insertCell(1).innerText = r.type;
    row.insertCell(2).innerText = r.desc;
    row.insertCell(3).innerText = r.date;
  });
}

// Manage students
if (document.getElementById("studentForm")) {
  const list = document.getElementById("studentList");
  const students = JSON.parse(localStorage.getItem("students") || "[]");
  students.forEach(name => {
    let li = document.createElement("li");
    li.innerText = name;
    list.appendChild(li);
  });

  document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("studentInput").value;
    students.push(name);
    localStorage.setItem("students", JSON.stringify(students));
    let li = document.createElement("li");
    li.innerText = name;
    list.appendChild(li);
    e.target.reset();
  });
}