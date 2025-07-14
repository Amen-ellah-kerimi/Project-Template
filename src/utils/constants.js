/**
 * Constants
 * 
 * Application-wide constants and configuration values
 * Centralized location for all constant values used across the app
 */

/**
 * API Configuration
 */
export const API = {
  BASE_URL: process.env.REACT_APP_API_BASE_URL || '/api',
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
};

/**
 * Authentication
 */
export const AUTH = {
  TOKEN_KEY: 'authToken',
  REFRESH_TOKEN_KEY: 'refreshToken',
  USER_KEY: 'currentUser',
  SESSION_TIMEOUT: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
};

/**
 * Local Storage Keys
 */
export const STORAGE_KEYS = {
  THEME: 'app_theme',
  LANGUAGE: 'app_language',
  USER_PREFERENCES: 'user_preferences',
  CART: 'shopping_cart',
  RECENT_SEARCHES: 'recent_searches',
};

/**
 * UI Constants
 */
export const UI = {
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
  },
  ANIMATION_DURATION: {
    FAST: 150,
    NORMAL: 300,
    SLOW: 500,
  },
  Z_INDEX: {
    DROPDOWN: 1000,
    STICKY: 1020,
    FIXED: 1030,
    MODAL_BACKDROP: 1040,
    MODAL: 1050,
    POPOVER: 1060,
    TOOLTIP: 1070,
    TOAST: 1080,
  },
};

/**
 * Form Validation
 */
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\+?[\d\s\-\(\)]+$/,
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 30,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
};

/**
 * Date and Time
 */
export const DATE_TIME = {
  FORMATS: {
    DATE: 'YYYY-MM-DD',
    TIME: 'HH:mm:ss',
    DATETIME: 'YYYY-MM-DD HH:mm:ss',
    DISPLAY_DATE: 'MMM DD, YYYY',
    DISPLAY_DATETIME: 'MMM DD, YYYY HH:mm',
  },
  TIMEZONES: {
    UTC: 'UTC',
    EST: 'America/New_York',
    PST: 'America/Los_Angeles',
    GMT: 'Europe/London',
  },
};

/**
 * HTTP Status Codes
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

/**
 * Error Messages
 */
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access denied.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  GENERIC_ERROR: 'Something went wrong. Please try again.',
};

/**
 * Success Messages
 */
export const SUCCESS_MESSAGES = {
  SAVE_SUCCESS: 'Changes saved successfully.',
  DELETE_SUCCESS: 'Item deleted successfully.',
  CREATE_SUCCESS: 'Item created successfully.',
  UPDATE_SUCCESS: 'Item updated successfully.',
  LOGIN_SUCCESS: 'Welcome back!',
  LOGOUT_SUCCESS: 'You have been logged out.',
  REGISTER_SUCCESS: 'Account created successfully.',
};

/**
 * Application Routes
 */
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  ABOUT: '/about',
  CONTACT: '/contact',
  NOT_FOUND: '/404',
};

/**
 * User Roles and Permissions
 */
export const ROLES = {
  ADMIN: 'admin',
  MODERATOR: 'moderator',
  USER: 'user',
  GUEST: 'guest',
};

export const PERMISSIONS = {
  READ: 'read',
  WRITE: 'write',
  DELETE: 'delete',
  ADMIN: 'admin',
};

/**
 * Pagination
 */
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [5, 10, 20, 50, 100],
  MAX_PAGE_SIZE: 100,
};

/**
 * Feature Flags
 */
export const FEATURES = {
  DARK_MODE: true,
  NOTIFICATIONS: true,
  ANALYTICS: process.env.NODE_ENV === 'production',
  BETA_FEATURES: process.env.NODE_ENV === 'development',
};

/**
 * Social Media Links
 */
export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/yourapp',
  FACEBOOK: 'https://facebook.com/yourapp',
  LINKEDIN: 'https://linkedin.com/company/yourapp',
  GITHUB: 'https://github.com/yourapp',
  INSTAGRAM: 'https://instagram.com/yourapp',
};

/**
 * Contact Information
 */
export const CONTACT = {
  EMAIL: 'contact@yourapp.com',
  PHONE: '+1 (555) 123-4567',
  ADDRESS: '123 Main St, City, State 12345',
  SUPPORT_EMAIL: 'support@yourapp.com',
};
