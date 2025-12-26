document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const result = document.getElementById("result");

  if (name === "" || email === "" || message === "") {
    result.style.color = "red";
    result.textContent = "Tous les champs sont obligatoires";
    return;
  }

  if (!email.includes("@")) {
    result.style.color = "red";
    result.textContent = "Email invalide";
    return;
  }

  result.style.color = "green";
  result.textContent = "Message envoyé avec succès ";

  // reset formulaire
  this.reset();
});
