const express = require('express');
const cors    = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory incident store
let incidents = [
  { date: '2025-08-01', behavior: 'Was respectful to teachers', type: 'Positive' },
  { date: '2025-08-03', behavior: 'Late to class',          type: 'Negative' },
  { date: '2025-08-05', behavior: 'Helped a classmate',      type: 'Positive' }
];

// GET all incidents
app.get('/api/incidents', (req, res) => {
  res.json(incidents);
});

// POST a new incident
app.post('/api/incidents', (req, res) => {
  const newIncident = req.body;
  incidents.push(newIncident);
  res.status(201).json(newIncident);
});

// Start server
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});