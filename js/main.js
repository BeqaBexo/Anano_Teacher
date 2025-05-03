function setLanguage(lang) {
  fetch(`lang/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      for (const key in data) {
        const el = document.getElementById(key);
        if (el) el.textContent = data[key];
      }
    });
}

window.onload = () => setLanguage('en');
