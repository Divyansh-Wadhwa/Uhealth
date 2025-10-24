// U-Health Website Configuration
const CONFIG = {
    // Environment Settings
    ENVIRONMENT: 'production', // 'development' or 'production'

    // Site Settings
    SITE: {
        NAME: 'U-Health',
        DOMAIN: 'u-health.com',
        BASE_URL: 'https://u-health.com',
        DESCRIPTION: 'Your trusted source for women\'s health and wellness products',
        KEYWORDS: 'women\'s health, sanitary pads, tampons, menstrual cups, period calculator',
        AUTHOR: 'U-Health Team'
    },

    // Cart Settings
    CART: {
        STORAGE_KEY: 'cart',
        MAX_QUANTITY_PER_ITEM: 10,
        CURRENCY: '₹',
        FREE_SHIPPING_THRESHOLD: 500
    },

    // Payment Settings
    PAYMENT: {
        ACCEPTED_CARDS: ['visa', 'mastercard', 'amex', 'discover'],
        TEST_MODE: false, // Set to true for testing
        CURRENCY: 'INR'
    },

    // Analytics (replace with your actual IDs)
    ANALYTICS: {
        GOOGLE_ANALYTICS_ID: 'UA-XXXXXXXXX-X',
        FACEBOOK_PIXEL_ID: 'XXXXXXXXXXXXXXXXX'
    },

    // Contact Information
    CONTACT: {
        EMAIL: 'info@u-health.com',
        SUPPORT_EMAIL: 'support@u-health.com',
        PHONE: '+91-800-UHEALTH',
        ADDRESS: {
            STREET: '123 Health Street',
            CITY: 'Mumbai',
            STATE: 'Maharashtra',
            ZIP: '400001',
            COUNTRY: 'India'
        }
    },

    // Social Media Links
    SOCIAL: {
        FACEBOOK: 'https://facebook.com/uhealth',
        INSTAGRAM: 'https://instagram.com/uhealth',
        TWITTER: 'https://twitter.com/uhealth',
        LINKEDIN: 'https://linkedin.com/company/uhealth'
    },

    // API Endpoints (for future use)
    API: {
        BASE_URL: 'https://api.u-health.com/v1',
        PRODUCTS: '/products',
        ORDERS: '/orders',
        USERS: '/users'
    },

    // Feature Flags
    FEATURES: {
        PERIOD_CALCULATOR: true,
        LIVE_CHAT: false,
        REVIEWS: true,
        WISHLIST: false,
        NEWSLETTER: true
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
