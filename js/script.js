// Accessible Mobile Navigation & Keyboard Control
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav');

    if (menuToggle && nav) {
        menuToggle.setAttribute('aria-expanded', 'false');
        
        menuToggle.addEventListener('change', () => {
            const isExpanded = menuToggle.checked;
            menuToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
        });

        // Close on Escape key press
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menuToggle.checked) {
                menuToggle.checked = false;
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.focus();
            }
        });

        // Close menu when clicking a navigation link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (menuToggle.checked) {
                    menuToggle.checked = false;
                    menuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
});
