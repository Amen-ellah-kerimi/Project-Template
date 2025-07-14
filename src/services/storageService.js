/**
 * Storage Service
 * 
 * Service for handling client-side storage operations
 * Provides a unified interface for localStorage, sessionStorage, and cookies
 */

/**
 * localStorage utilities
 */
export const localStorage = {
  /**
   * Get item from localStorage with JSON parsing
   */
  get: (key, defaultValue = null) => {
    try {
      if (typeof window === 'undefined') return defaultValue;
      
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  },

  /**
   * Set item in localStorage with JSON stringification
   */
  set: (key, value) => {
    try {
      if (typeof window === 'undefined') return;
      
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  },

  /**
   * Remove item from localStorage
   */
  remove: (key) => {
    try {
      if (typeof window === 'undefined') return;
      
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  },

  /**
   * Clear all localStorage
   */
  clear: () => {
    try {
      if (typeof window === 'undefined') return;
      
      window.localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  },

  /**
   * Check if localStorage is available
   */
  isAvailable: () => {
    try {
      if (typeof window === 'undefined') return false;
      
      const test = '__localStorage_test__';
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
      return true;
    } catch (error) {
      return false;
    }
  },
};

/**
 * sessionStorage utilities
 */
export const sessionStorage = {
  /**
   * Get item from sessionStorage with JSON parsing
   */
  get: (key, defaultValue = null) => {
    try {
      if (typeof window === 'undefined') return defaultValue;
      
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading sessionStorage key "${key}":`, error);
      return defaultValue;
    }
  },

  /**
   * Set item in sessionStorage with JSON stringification
   */
  set: (key, value) => {
    try {
      if (typeof window === 'undefined') return;
      
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting sessionStorage key "${key}":`, error);
    }
  },

  /**
   * Remove item from sessionStorage
   */
  remove: (key) => {
    try {
      if (typeof window === 'undefined') return;
      
      window.sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing sessionStorage key "${key}":`, error);
    }
  },

  /**
   * Clear all sessionStorage
   */
  clear: () => {
    try {
      if (typeof window === 'undefined') return;
      
      window.sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing sessionStorage:', error);
    }
  },
};

/**
 * Cookie utilities
 */
export const cookies = {
  /**
   * Get cookie value
   */
  get: (name) => {
    if (typeof document === 'undefined') return null;
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
    
    return null;
  },

  /**
   * Set cookie
   */
  set: (name, value, options = {}) => {
    if (typeof document === 'undefined') return;
    
    const {
      expires,
      maxAge,
      domain,
      path = '/',
      secure = false,
      sameSite = 'Lax',
    } = options;

    let cookieString = `${name}=${value}; path=${path}`;

    if (expires) {
      cookieString += `; expires=${expires.toUTCString()}`;
    }

    if (maxAge) {
      cookieString += `; max-age=${maxAge}`;
    }

    if (domain) {
      cookieString += `; domain=${domain}`;
    }

    if (secure) {
      cookieString += '; secure';
    }

    cookieString += `; samesite=${sameSite}`;

    document.cookie = cookieString;
  },

  /**
   * Remove cookie
   */
  remove: (name, options = {}) => {
    cookies.set(name, '', {
      ...options,
      expires: new Date(0),
    });
  },
};

/**
 * Unified storage interface
 */
export const storage = {
  /**
   * Get item with fallback chain: localStorage -> sessionStorage -> cookies
   */
  get: (key, defaultValue = null) => {
    // Try localStorage first
    if (localStorage.isAvailable()) {
      const value = localStorage.get(key);
      if (value !== null) return value;
    }

    // Try sessionStorage
    const sessionValue = sessionStorage.get(key);
    if (sessionValue !== null) return sessionValue;

    // Try cookies
    const cookieValue = cookies.get(key);
    if (cookieValue !== null) {
      try {
        return JSON.parse(cookieValue);
      } catch {
        return cookieValue;
      }
    }

    return defaultValue;
  },

  /**
   * Set item in localStorage with sessionStorage fallback
   */
  set: (key, value) => {
    if (localStorage.isAvailable()) {
      localStorage.set(key, value);
    } else {
      sessionStorage.set(key, value);
    }
  },

  /**
   * Remove item from all storage types
   */
  remove: (key) => {
    localStorage.remove(key);
    sessionStorage.remove(key);
    cookies.remove(key);
  },
};
