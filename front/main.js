// main.js
const btn = document.getElementById('btn');
const msg = document.getElementById('message');

btn.addEventListener('click', async () => {
  try {
    const response = await fetch('/api/hello');
    const data = await response.json();
    msg.textContent = data.message;
  } catch (err) {
    msg.textContent = 'Erreur : impossible de contacter le serveur.';
  }
});
