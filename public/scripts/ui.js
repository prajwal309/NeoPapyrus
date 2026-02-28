document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("settingsBtn");
  const panel = document.getElementById("settingsPanel");
  const levelButtons = document.querySelectorAll(".segmented button");
  const eqToggle = document.getElementById("eqToggle");

  // Toggle settings panel
  btn.onclick = () => {
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  };

  // Close when clicking outside
  document.addEventListener("click", e => {
    if (!panel.contains(e.target) && !btn.contains(e.target)) {
      panel.style.display = "none";
    }
  });

  // Level switching
  levelButtons.forEach(button => {
    button.onclick = () => {
      levelButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      const level = button.dataset.level;

      document.querySelectorAll("[class^='level-']").forEach(el => {
        el.style.display = "none";
      });

      document.querySelectorAll(`.level-${level}`).forEach(el => {
        el.style.display = "block";
      });
    };
  });

  // Equation toggle
  eqToggle.onchange = () => {
    document.querySelectorAll(".katex").forEach(eq => {
      eq.style.display = eqToggle.checked ? "inline-block" : "none";
    });
  };

});