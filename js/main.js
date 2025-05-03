let currentLang = 'ka'; // Default

function toggleLanguage() {
    currentLang = currentLang === 'ka' ? 'en' : 'ka';
    setLanguage(currentLang);
    const langIcon = document.getElementById('langToggle');
    langIcon.src = currentLang === 'ka' ? 'images/en_flag.png' : 'images/ka_flag.png';
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
    document.getElementById('langToggle').src = 'images/en_flag.png';
};
