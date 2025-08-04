const toggleButton = document.getElementById("toggle-dark-mode");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Cambiar texto del botón
    if (body.classList.contains("dark-mode")) {
      toggleButton.textContent = "☀️ Modo Claro";
    } else {
      toggleButton.textContent = "🌓 Modo Oscuro";
    }
  });