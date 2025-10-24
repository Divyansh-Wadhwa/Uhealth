// Performance Optimization Script for U-Health Website

// Lazy Loading Images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Preload Critical Resources
function preloadCriticalResources() {
    const criticalResources = [
        'assets/css/shared-header.css',
        'assets/css/responsive.css',
        'assets/js/cart-shared.js'
    ];

    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
    });
}

// Service Worker for Caching
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    }
}

// Critical CSS Inline
function loadNonCriticalCSS() {
    const nonCriticalCSS = [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
    ];

    nonCriticalCSS.forEach(css => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = css;
        link.media = 'print';
        link.onload = function () {
            this.media = 'all';
        };
        document.head.appendChild(link);
    });
}

// Image Optimization
function optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // Add loading="lazy" for modern browsers
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }

        // Add proper alt attributes if missing
        if (!img.hasAttribute('alt')) {
            img.setAttribute('alt', 'U-Health Product Image');
        }
    });
}

// Performance Monitoring
function trackPerformance() {
    // Track Core Web Vitals
    if ('web-vital' in window) {
        import('https://unpkg.com/web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(console.log);
            getFID(console.log);
            getFCP(console.log);
            getLCP(console.log);
            getTTFB(console.log);
        });
    }

    // Track page load time
    window.addEventListener('load', () => {
        const navigationTiming = performance.getEntriesByType('navigation')[0];
        const loadTime = navigationTiming.loadEventEnd - navigationTiming.loadEventStart;
        console.log('Page Load Time:', loadTime + 'ms');
    });
}

// Error Tracking
function setupErrorTracking() {
    window.addEventListener('error', (e) => {
        console.error('JavaScript Error:', {
            message: e.message,
            source: e.filename,
            line: e.lineno,
            column: e.colno,
            error: e.error
        });

        // Send to analytics service if configured
        if (typeof gtag !== 'undefined') {
            gtag('event', 'exception', {
                'description': e.message,
                'fatal': false
            });
        }
    });

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled Promise Rejection:', e.reason);
    });
}

// Initialize Performance Optimizations
document.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    optimizeImages();
    setupErrorTracking();
    trackPerformance();

    // Load non-critical resources after page load
    window.addEventListener('load', () => {
        preloadCriticalResources();
        loadNonCriticalCSS();
        registerServiceWorker();
    });
});

// Export functions for manual use
window.UHealthPerformance = {
    lazyLoadImages,
    preloadCriticalResources,
    registerServiceWorker,
    optimizeImages,
    trackPerformance
};
