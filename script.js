// Load publications
function loadPublications() {
    const publicationsList = document.getElementById('publications-list');

    if (publications.length === 0) {
        publicationsList.innerHTML = '<p style="color: var(--text-secondary);">Publications will appear here once added to data.js</p>';
        return;
    }

    publications.forEach(pub => {
        const pubElement = document.createElement('div');
        pubElement.className = 'publication';

        // Build links HTML
        let linksHTML = '';
        if (pub.links && pub.links.length > 0) {
            linksHTML = '<div class="publication-links">';
            pub.links.forEach(link => {
                linksHTML += `<a href="${link.url}" target="_blank" class="publication-link">${link.label}</a>`;
            });
            linksHTML += '</div>';
        }

        pubElement.innerHTML = `
            <div class="publication-title">
                ${pub.links && pub.links.length > 0
                    ? `<a href="${pub.links[0].url}" target="_blank">${pub.title}</a>`
                    : pub.title}
            </div>
            <div class="publication-authors">${pub.authors}</div>
            <div class="publication-venue">${pub.venue}</div>
            <div class="publication-meta">
                <span class="publication-year">${pub.year}</span>
                ${pub.citations ? `<span class="publication-citations">Cited by ${pub.citations}</span>` : ''}
            </div>
            ${linksHTML}
        `;

        publicationsList.appendChild(pubElement);
    });
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadPublications();
});
