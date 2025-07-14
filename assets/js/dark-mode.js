// Dark Mode Toggle Functionality
(function() {
    'use strict';

    // Check for saved dark mode preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme on page load
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Create and insert the dark mode toggle button
    function createToggleButton() {
        const toggleButton = document.createElement('button');
        toggleButton.className = 'dark-mode-toggle';
        toggleButton.setAttribute('aria-label', 'Toggle dark mode');
        toggleButton.innerHTML = 'Dark Mode';
        
        // Insert the button into the page
        document.body.appendChild(toggleButton);
        
        return toggleButton;
    }

    // Toggle dark mode
    function toggleDarkMode() {
        const body = document.body;
        const isDarkMode = body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    }

    // Initialize when DOM is ready
    function init() {
        const toggleButton = createToggleButton();
        toggleButton.addEventListener('click', toggleDarkMode);
        
        // Update button text based on current mode
        function updateButtonText() {
            const isDarkMode = document.body.classList.contains('dark-mode');
            toggleButton.innerHTML = isDarkMode ? 'Light Mode' : 'Dark Mode';
        }
        
        // Initial button text update
        updateButtonText();
        
        // Update button text when mode changes
        toggleButton.addEventListener('click', function() {
            setTimeout(updateButtonText, 10); // Small delay to ensure class change is applied
        });
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})(); 