document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (menu && links) menu.addEventListener("click", () => links.classList.toggle("open"));

  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.getElementById("formSuccess").textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    let valid = true;

    if (name.length < 2) {
      document.getElementById("nameError").textContent = "Please enter your full name.";
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      valid = false;
    }
    if (subject.length < 3) {
      document.getElementById("subjectError").textContent = "Subject must contain at least 3 characters.";
      valid = false;
    }
    if (message.length < 10) {
      document.getElementById("messageError").textContent = "Message must contain at least 10 characters.";
      valid = false;
    }
    if (valid) {
      document.getElementById("formSuccess").textContent = "Message validated successfully! This demo form is ready to connect to a backend.";
      form.reset();
    }
  });
});