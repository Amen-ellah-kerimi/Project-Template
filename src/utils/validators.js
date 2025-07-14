/**
 * Validators Utility
 * 
 * Collection of validation functions for forms and data
 * Provides consistent validation logic across the application
 */

/**
 * Validate email address
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 */
export const validatePassword = (password) => {
  const result = {
    isValid: true,
    errors: [],
    strength: 'weak',
  };

  if (!password) {
    result.isValid = false;
    result.errors.push('Password is required');
    return result;
  }

  if (password.length < 8) {
    result.isValid = false;
    result.errors.push('Password must be at least 8 characters long');
  }

  if (!/[a-z]/.test(password)) {
    result.isValid = false;
    result.errors.push('Password must contain at least one lowercase letter');
  }

  if (!/[A-Z]/.test(password)) {
    result.isValid = false;
    result.errors.push('Password must contain at least one uppercase letter');
  }

  if (!/\d/.test(password)) {
    result.isValid = false;
    result.errors.push('Password must contain at least one number');
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    result.errors.push('Password should contain at least one special character');
  }

  // Calculate strength
  let strengthScore = 0;
  if (password.length >= 8) strengthScore++;
  if (password.length >= 12) strengthScore++;
  if (/[a-z]/.test(password)) strengthScore++;
  if (/[A-Z]/.test(password)) strengthScore++;
  if (/\d/.test(password)) strengthScore++;
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strengthScore++;

  if (strengthScore <= 2) result.strength = 'weak';
  else if (strengthScore <= 4) result.strength = 'medium';
  else result.strength = 'strong';

  return result;
};

/**
 * Validate phone number (US format)
 */
export const isValidPhoneNumber = (phone, format = 'US') => {
  const cleaned = phone.replace(/\D/g, '');

  if (format === 'US') {
    return cleaned.length === 10;
  }

  return cleaned.length >= 10 && cleaned.length <= 15;
};

/**
 * Validate URL
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate required field
 */
export const isRequired = (value) => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
};

/**
 * Validate minimum length
 */
export const hasMinLength = (value, minLength) => {
  if (typeof value !== 'string') return false;
  return value.length >= minLength;
};

/**
 * Validate maximum length
 */
export const hasMaxLength = (value, maxLength) => {
  if (typeof value !== 'string') return false;
  return value.length <= maxLength;
};

/**
 * Validate numeric value
 */
export const isNumeric = (value) => {
  return !isNaN(value) && !isNaN(parseFloat(value));
};

/**
 * Validate integer
 */
export const isInteger = (value) => {
  return Number.isInteger(Number(value));
};

/**
 * Validate positive number
 */
export const isPositive = (value) => {
  return isNumeric(value) && Number(value) > 0;
};

/**
 * Validate range
 */
export const isInRange = (value, min, max) => {
  const num = Number(value);
  return isNumeric(value) && num >= min && num <= max;
};

/**
 * Validate date
 */
export const isValidDate = (date) => {
  const dateObj = new Date(date);
  return dateObj instanceof Date && !isNaN(dateObj);
};

/**
 * Validate future date
 */
export const isFutureDate = (date) => {
  if (!isValidDate(date)) return false;
  return new Date(date) > new Date();
};

/**
 * Validate past date
 */
export const isPastDate = (date) => {
  if (!isValidDate(date)) return false;
  return new Date(date) < new Date();
};

/**
 * Validate credit card number (basic Luhn algorithm)
 */
export const isValidCreditCard = (cardNumber) => {
  const cleaned = cardNumber.replace(/\D/g, '');
  
  if (cleaned.length < 13 || cleaned.length > 19) {
    return false;
  }

  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

/**
 * Validate file type
 */
export const isValidFileType = (file, allowedTypes) => {
  if (!file || !file.type) return false;
  return allowedTypes.includes(file.type);
};

/**
 * Validate file size
 */
export const isValidFileSize = (file, maxSizeInBytes) => {
  if (!file || !file.size) return false;
  return file.size <= maxSizeInBytes;
};

/**
 * Generic form validator
 */
export const validateForm = (data, rules) => {
  const errors = {};
  let isValid = true;

  Object.keys(rules).forEach(field => {
    const fieldRules = rules[field];
    const value = data[field];
    const fieldErrors = [];

    fieldRules.forEach(rule => {
      if (typeof rule === 'function') {
        const result = rule(value);
        if (result !== true) {
          fieldErrors.push(result);
        }
      } else if (typeof rule === 'object') {
        const { validator, message } = rule;
        if (!validator(value)) {
          fieldErrors.push(message);
        }
      }
    });

    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors;
      isValid = false;
    }
  });

  return { isValid, errors };
};
