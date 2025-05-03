document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");
  loadLanguage(langSelect.value);

  langSelect.addEventListener("change", (e) => {
    loadLanguage(e.target.value);
  });
});

function loadLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      // Set text content from JSON
      for (const key in data) {
        const el = document.getElementById(key);
        if (el) el.textContent = data[key];
      }
    })
    .catch(err => console.error("Error loading language file:", err));
}
