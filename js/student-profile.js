document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sidebar nav ul li');
    const sections = document.querySelectorAll('.profile-section');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.classList.add('hidden'));

            // Show selected section
            const targetId = link.querySelector('a').getAttribute('href').substring(1);
            document.getElementById(targetId).classList.remove('hidden');
        });
    });

    // Profile Edit Functionality
    const editProfileBtn = document.querySelector('.user-actions .btn-primary');
    editProfileBtn.addEventListener('click', () => {
        alert('Profile editing feature coming soon!');
    });
});
