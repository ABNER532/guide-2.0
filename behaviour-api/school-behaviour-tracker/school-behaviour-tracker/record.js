document.getElementById('recordForm').addEventListener('submit', async e => {
  e.preventDefault();

  const date = document.getElementById('date').value;
  const behavior = document.getElementById('behavior').value.trim();
  const type = document.getElementById('type').value;

  try {
    const res = await fetch('/api/incidents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date, behavior, type })
    });

    if (!res.ok) throw new Error('Failed to submit');
    alert('Behaviour recorded!');
    e.target.reset();
  } catch (err) {
    alert('Error submitting behaviour');
    console.error(err);
  }
});