// conjunction.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.conjunction-nav a');
    const sections = document.querySelectorAll('.conjunction-section');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            // Remove active classes
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active-section'));

            // Add active classes to clicked link and target section
            link.classList.add('active');
            document.getElementById(targetId).classList.add('active-section');
        });
    });
});
