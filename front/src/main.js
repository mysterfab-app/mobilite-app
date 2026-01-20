fetch("/api/health")
  .then(res => res.json())
  .then(data => {
    document.getElementById("app").innerText = "Mobilité App – API OK";
  })
  .catch(err => {
    document.getElementById("app").innerText = "Mobilité App – erreur API";
  });
