const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const toggleIcon = document.getElementById('toggle-icon');

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    toggleIcon.classList.replace('fa-sun', 'fa-moon');
}

// Toggle theme function
toggleButton.addEventListener('click', () => {
    // Add smooth transition
    body.classList.add('transition');

    // Toggle dark class
    body.classList.toggle('dark');

    // Toggle sun/moon icon
    if (body.classList.contains('dark')) {
        toggleIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        toggleIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    }

    // Remove transition class after animation
    setTimeout(() => {
        body.classList.remove('transition');
    }, 500);
});
