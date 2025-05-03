function setLanguage(lang) {
    fetch(`lang/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            for (const key in data) {
                const el = document.getElementById(key);
                if (el) el.textContent = data[key];
            }

            // Update lang and icon
            document.documentElement.lang = lang;
            localStorage.setItem('preferredLang', lang);

            const langBtn = document.getElementById('langToggle');
            langBtn.textContent = lang === 'ka' ? '🇬🇧' : '🇬🇪';
        })
        .catch(err => console.error('Error loading language file:', err));
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('preferredLang') || 'ka';
    const newLang = currentLang === 'ka' ? 'en' : 'ka';
    setLanguage(newLang);
}

window.onload = () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ka';
    setLanguage(savedLang);
};
