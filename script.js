// Select the toggle button and body
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
}

// Function to toggle theme
toggleButton.addEventListener('click', () => {
    // Add smooth transition
    body.classList.add('transition');

    // Toggle dark class
    body.classList.toggle('dark');

    // Save current theme to localStorage
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    // Remove transition class after animation
    setTimeout(() => {
        body.classList.remove('transition');
    }, 500); // Matches CSS transition duration
});
