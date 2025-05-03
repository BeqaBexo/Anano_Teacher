document.addEventListener("DOMContentLoaded", () => {
    const sections = [
        { file: 'component/header.html', id: 'header-section' },
        { file: 'component/about.html', id: 'about-section' },
        { file: 'component/topics.html', id: 'topics-section' },
        { file: 'component/schedule.html', id: 'schedule-section' },
        { file: 'component/contact.html', id: 'contact-section' },
        { file: 'component/footer.html', id: 'footer-section' }
    ];

    sections.forEach(section => {
        fetch(section.file)
            .then(response => response.text())
            .then(html => {
                document.getElementById(section.id).innerHTML = html;
            })
            .catch(err => console.error(`Error loading ${section.file}:`, err));
    });
});
