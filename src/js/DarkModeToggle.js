// Dark Mode Toggle with localStorage persistence and system preference detection
import '@fortawesome/fontawesome-free/css/all.min.css';

class DarkModeToggle {
    constructor() {
        this.init();
    }

    init() {
        // Get saved theme or use system preference
        const savedTheme = this.getSavedTheme();
        this.setTheme(savedTheme, false);
        
        // Set up toggle button listener
        this.setupToggle();
        
        // Listen for system preference changes
        this.watchSystemPreference();
    }

    getSavedTheme() {
        const saved = localStorage.getItem('theme');
        if (saved) {
            return saved;
        }
        
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        
        return 'light';
    }

    setTheme(theme, save = true) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        
        if (save) {
            localStorage.setItem('theme', theme);
        }
        
        this.updateToggleButton(theme);
        
        // Dispatch custom event for other components
        window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
    }

    updateToggleButton(theme) {
        const button = document.getElementById('theme-toggle');
        if (!button) return;
        
        const icon = button.querySelector('.theme-icon');
        
        if (theme === 'dark') {
            // Light mode icon (sun) - shows when in dark mode to indicate switching to light
            icon.innerHTML = '<i class="fa-solid fa-sun"></i>';
            button.setAttribute('aria-label', 'Switch to light mode');
            button.setAttribute('title', 'Switch to light mode');
        } else {
            // Dark mode icon (moon) - shows when in light mode to indicate switching to dark
            icon.innerHTML = '<i class="fa-solid fa-moon"></i>';
            button.setAttribute('aria-label', 'Switch to dark mode');
            button.setAttribute('title', 'Switch to dark mode');
        }
    }

    toggleTheme() {
        const current = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    setupToggle() {
        const button = document.getElementById('theme-toggle');
        if (button) {
            button.addEventListener('click', () => this.toggleTheme());
        }
    }

    watchSystemPreference() {
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                // Only auto-switch if user hasn't manually set a preference
                if (!localStorage.getItem('theme')) {
                    this.setTheme(e.matches ? 'dark' : 'light', false);
                }
            });
        }
    }
}

// Initialize dark mode toggle when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new DarkModeToggle());
} else {
    new DarkModeToggle();
}

// Export for potential use in other scripts
export default DarkModeToggle;
