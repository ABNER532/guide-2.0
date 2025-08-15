// parents-view-folder/dashboard.js

document.addEventListener('DOMContentLoaded', () => {
  loadBehaviorReports();
});

async function loadBehaviorReports() {
  try {
    // 1) Fetch the submitted behaviour records from your API
    const res = await fetch('/api/incidents'); 
    if (!res.ok) throw new Error(res.statusText);
    const behaviorReports = await res.json();

    // 2) Render them and update the summary
    renderReports(behaviorReports);
    updateSummary(behaviorReports);
  } catch (err) {
    console.error('Error loading behaviour reports:', err);
    // Optionally, show an error message in the UI
  }
}

function renderReports(reports) {
  const container = document.getElementById('report-container');
  container.innerHTML = ''; // clear previous entries

  reports.forEach(report => {
    const entry = document.createElement('div');
    entry.className = 'report-entry';
    entry.innerHTML = `
      <h3>${new Date(report.date).toLocaleDateString()}</h3>
      <p><strong>Behavior:</strong> ${report.behavior || report.description}</p>
      <p><strong>Type:</strong> ${report.type}</p>
      ${report.teacherName ? `<p><strong>Teacher:</strong> ${report.teacherName}</p>` : ''}
    `;
    container.appendChild(entry);
  });
}

function updateSummary(reports) {
  // total number of records
  document.getElementById('totalIncidents').textContent = reports.length;

  // count of unique days
  const days = new Set(
    reports.map(r => new Date(r.date).toDateString())
  ).size;
  document.getElementById('uniqueDays').textContent = days;
}