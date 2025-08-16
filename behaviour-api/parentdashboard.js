window.addEventListener('DOMContentLoaded', async () => {
  const list = document.getElementById('incidentsList');

  try {
    const res = await fetch('/api/incidents');
    const incidents = await res.json();
    list.innerHTML = '';

    if (incidents.length === 0) {
      list.innerHTML = '<li>No records found.</li>';
      return;
    }

    incidents.forEach(({ date, behavior, type }) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${date}</strong> - ${behavior} <em>[${type}]</em>`;
      list.appendChild(li);
    });
  } catch (err) {
    list.innerHTML = '<li>Error loading records.</li>';
    console.error(err);
  }
});