let currentLang = 'ka'; // Default language

function toggleLanguage() {
    currentLang = currentLang === 'ka' ? 'en' : 'ka';
    setLanguage(currentLang);
    const langIcon = document.getElementById('langToggle');
    langIcon.src = currentLang === 'ka' ? 'assets/images/en_flag.png' : 'assets/images/ka_flag.png';
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

window.onload = () => {
    setLanguage(currentLang);
    const langIcon = document.getElementById('langToggle');
    langIcon.src = currentLang === 'ka' ? 'assets/images/en_flag.png' : 'assets/images/ka_flag.png';
};
