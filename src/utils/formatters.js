/**
 * Formatters Utility
 * 
 * Collection of formatting functions for dates, numbers, strings, etc.
 * Provides consistent formatting across the application
 */

/**
 * Format date to human-readable string
 */
export const formatDate = (date, options = {}) => {
  const {
    locale = 'en-US',
    dateStyle = 'medium',
    timeStyle,
    includeTime = false,
  } = options;

  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!(dateObj instanceof Date) || isNaN(dateObj)) {
    return 'Invalid Date';
  }

  const formatOptions = { dateStyle };
  
  if (includeTime || timeStyle) {
    formatOptions.timeStyle = timeStyle || 'short';
  }

  return new Intl.DateTimeFormat(locale, formatOptions).format(dateObj);
};

/**
 * Format date to relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (date, locale = 'en-US') => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (!(dateObj instanceof Date) || isNaN(dateObj)) {
    return 'Invalid Date';
  }

  const now = new Date();
  const diffInSeconds = Math.floor((now - dateObj) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count >= 1) {
      const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
      return rtf.format(-count, interval.label);
    }
  }

  return 'just now';
};

/**
 * Format number with locale-specific formatting
 */
export const formatNumber = (number, options = {}) => {
  const {
    locale = 'en-US',
    style = 'decimal',
    minimumFractionDigits,
    maximumFractionDigits,
    currency = 'USD',
  } = options;

  const formatOptions = { style };

  if (style === 'currency') {
    formatOptions.currency = currency;
  }

  if (minimumFractionDigits !== undefined) {
    formatOptions.minimumFractionDigits = minimumFractionDigits;
  }

  if (maximumFractionDigits !== undefined) {
    formatOptions.maximumFractionDigits = maximumFractionDigits;
  }

  return new Intl.NumberFormat(locale, formatOptions).format(number);
};

/**
 * Format currency
 */
export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  return formatNumber(amount, { style: 'currency', currency, locale });
};

/**
 * Format percentage
 */
export const formatPercentage = (value, locale = 'en-US', decimals = 1) => {
  return formatNumber(value / 100, {
    style: 'percent',
    locale,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

/**
 * Format file size in human-readable format
 */
export const formatFileSize = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phoneNumber, format = 'US') => {
  const cleaned = phoneNumber.replace(/\D/g, '');

  if (format === 'US') {
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
  }

  return phoneNumber;
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text, maxLength, suffix = '...') => {
  if (!text || text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Capitalize first letter of each word
 */
export const titleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

/**
 * Convert camelCase to Title Case
 */
export const camelToTitle = (str) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
};

/**
 * Format duration in seconds to human-readable format
 */
export const formatDuration = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};
