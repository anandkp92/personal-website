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

        // Get the first link URL (either direct link or Google Scholar)
        const linkUrl = pub.links && pub.links.length > 0 ? pub.links[0].url : '';

        pubElement.innerHTML = `
            <div class="publication-title">
                ${linkUrl
                    ? `<a href="${linkUrl}" target="_blank">${pub.title}</a>`
                    : pub.title}
            </div>
            <div class="publication-info">
                ${pub.authors}${pub.venue ? ` • ${pub.venue}` : ''} • ${pub.year}
            </div>
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
