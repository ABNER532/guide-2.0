console.log("Hello from server.js!");
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let incidents = [];

app.post('/api/incidents', (req, res) => {
  const { date, behavior, type } = req.body;
  if (!date || !behavior || !type) {
    return res.status(400).send('All fields are required.');
  }
  incidents.push({ date, behavior, type });
  res.status(201).json({ message: 'Recorded successfully' });
});

app.get('/api/incidents', (req, res) => {
  res.json(incidents);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});