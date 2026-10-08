/* A switch script that toggles between light and dark themes
   Handles theme toggling using CSS custom properties (variables)
   Saves user preference in browser localStorage */

// Checks localStorage for perferred theme, and if it exists then apply it immediately 
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Get the toggle checkbox, if clicked then switch the theme and save the preference in localStorage
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        // Set checkbox state based on saved theme
        if (savedTheme === 'dark') {
            themeToggle.checked = true;
        }

        // Add event listener to switch theme on user click
        themeToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');    // Apply dark theme
                localStorage.setItem('theme', 'dark');                          // Saves perference 
            } else {
                document.documentElement.setAttribute('data-theme', 'light');   // Apply light theme
                localStorage.setItem('theme', 'light');                         // Saves preference
            }
        });
    }
});