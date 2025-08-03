console.log('Vite + Tailwind + JS funcionando!');

// Main application initialization
class App {
    constructor() {
        this.currentPage = this.getCurrentPage();
        this.init();
    }

    init() {
        console.log('Initializing application...');
        this.setupGlobalEventListeners();
        this.loadPageSpecificScripts();
    }

    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('dashboard')) return 'dashboard';
        if (path.includes('login')) return 'login';
        if (path.includes('register')) return 'register';
        if (path.includes('oauth')) return 'oauth';
        return 'home';
    }

    setupGlobalEventListeners() {
        // Global keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Alt + D for dashboard (if logged in)
            if (e.altKey && e.key === 'd') {
                if (this.isLoggedIn()) {
                    window.location.href = 'dashboard.html';
                }
            }
        });

        // Global error handling
        window.addEventListener('error', (e) => {
            console.error('Global error:', e.error);
        });
    }

    loadPageSpecificScripts() {
        switch (this.currentPage) {
            case 'dashboard':
                this.loadDashboardScript();
                break;
            case 'login':
                this.loadLoginScript();
                break;
            // Add other page scripts as needed
        }
    }

    loadDashboardScript() {
        if (document.querySelector('.dashboard-container')) {
            // Dashboard script will be loaded via script tag in HTML
            console.log('Dashboard page detected');
        }
    }

    loadLoginScript() {
        // Login specific functionality
        console.log('Login page detected');
    }

    isLoggedIn() {
        // Check if user is logged in (placeholder)
        return localStorage.getItem('userToken') !== null;
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    window.app = app;
});
