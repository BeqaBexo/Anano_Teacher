let currentLang = localStorage.getItem('language') || 'ka'; // Default is 'ka'

function toggleLanguage() {
    currentLang = currentLang === 'ka' ? 'en' : 'ka';
    setLanguage(currentLang);
    localStorage.setItem('language', currentLang); // Save to localStorage
    updateLangIcon();
}

function setLanguage(lang) {
    fetch(`lang/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            for (const key in data) {
                const el = document.getElementById(key);
                if (el) el.textContent = data[key];
            }
        })
        .catch(err => console.error('Language switch failed:', err));
}

function updateLangIcon() {
    const langIcon = document.getElementById('langToggle');
    langIcon.src = currentLang === 'ka' ? 'assets/images/en_flag.png' : 'assets/images/ka_flag.png';
}

window.onload = () => {
    setLanguage(currentLang);
    updateLangIcon();
};
