import apiClient from './api/client';

/**
 * User Service
 * 
 * Service for handling user-related API operations
 * Provides methods for authentication, profile management, and user data
 */

/**
 * Authenticate user with email and password
 */
export const login = async (email, password) => {
  try {
    const response = await apiClient.post('/auth/login', {
      email,
      password,
    });
    
    // Store auth token
    if (response.token) {
      localStorage.setItem('authToken', response.token);
    }
    
    return response;
  } catch (error) {
    throw new Error(error.message || 'Login failed');
  }
};

/**
 * Register a new user
 */
export const register = async (userData) => {
  try {
    const response = await apiClient.post('/auth/register', userData);
    
    // Store auth token if provided
    if (response.token) {
      localStorage.setItem('authToken', response.token);
    }
    
    return response;
  } catch (error) {
    throw new Error(error.message || 'Registration failed');
  }
};

/**
 * Logout user
 */
export const logout = async () => {
  try {
    await apiClient.post('/auth/logout');
  } catch (error) {
    console.error('Logout error:', error);
  } finally {
    // Always remove token from localStorage
    localStorage.removeItem('authToken');
  }
};

/**
 * Get current user profile
 */
export const getCurrentUser = async () => {
  try {
    const response = await apiClient.get('/user/profile');
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch user profile');
  }
};

/**
 * Update user profile
 */
export const updateProfile = async (profileData) => {
  try {
    const response = await apiClient.put('/user/profile', profileData);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to update profile');
  }
};

/**
 * Change user password
 */
export const changePassword = async (currentPassword, newPassword) => {
  try {
    const response = await apiClient.post('/user/change-password', {
      currentPassword,
      newPassword,
    });
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to change password');
  }
};

/**
 * Request password reset
 */
export const requestPasswordReset = async (email) => {
  try {
    const response = await apiClient.post('/auth/forgot-password', { email });
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to request password reset');
  }
};

/**
 * Reset password with token
 */
export const resetPassword = async (token, newPassword) => {
  try {
    const response = await apiClient.post('/auth/reset-password', {
      token,
      newPassword,
    });
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to reset password');
  }
};

/**
 * Upload user avatar
 */
export const uploadAvatar = async (file) => {
  try {
    const formData = new FormData();
    formData.append('avatar', file);
    
    const response = await apiClient.request('/user/avatar', {
      method: 'POST',
      body: formData,
      headers: {
        // Remove Content-Type header to let browser set it with boundary
      },
    });
    
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to upload avatar');
  }
};

/**
 * Get user by ID
 */
export const getUserById = async (userId) => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch user');
  }
};

/**
 * Search users
 */
export const searchUsers = async (query, options = {}) => {
  try {
    const params = {
      q: query,
      ...options,
    };
    
    const response = await apiClient.get('/users/search', params);
    return response;
  } catch (error) {
    throw new Error(error.message || 'Failed to search users');
  }
};
