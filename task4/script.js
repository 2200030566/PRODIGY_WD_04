function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}

function toggleProjectDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    }
}

// Set default active section
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});
