// Simulated behavior data
const behaviorReports = [
  {
    date: '2025-08-01',
    behavior: 'Was respectful to teachers',
    type: 'Positive'
  },
  {
    date: '2025-08-03',
    behavior: 'Late to class',
    type: 'Negative'
  },
  {
    date: '2025-08-05',
    behavior: 'Helped a classmate',
    type: 'Positive'
  }
];

const container = document.getElementById('report-container');

behaviorReports.forEach(report => {
  const entry = document.createElement('div');
  entry.className = 'report-entry';
  entry.innerHTML = `
    <h3>${report.date}</h3>
    <p><strong>Behavior:</strong> ${report.behavior}</p>
    <p><strong>Type:</strong> ${report.type}</p>
  `;
  container.appendChild(entry);
});