function setLanguage(lang) {
    fetch(`lang/${lang}.json`)
        .then(res => {
            if (!res.ok) throw new Error(`Failed to load ${lang}.json`);
            return res.json();
        })
        .then(data => {
            for (const key in data) {
                const el = document.getElementById(key);
                if (el) el.textContent = data[key];
            }
            document.documentElement.lang = lang;
            localStorage.setItem('preferredLang', lang);
        })
        .catch(err => {
            console.error('Error loading language file:', err);
        });
}

window.onload = () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ka';
    setLanguage(savedLang);
};
