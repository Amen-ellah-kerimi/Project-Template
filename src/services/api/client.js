/**
 * API Client
 * 
 * Centralized HTTP client with interceptors for request/response handling
 * Provides consistent error handling and authentication across the application
 */

class ApiClient {
  constructor(baseURL = '/api') {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
    
    // Request interceptors
    this.requestInterceptors = [];
    
    // Response interceptors
    this.responseInterceptors = [];
    
    // Error interceptors
    this.errorInterceptors = [];
  }

  /**
   * Add a request interceptor
   */
  addRequestInterceptor(interceptor) {
    this.requestInterceptors.push(interceptor);
  }

  /**
   * Add a response interceptor
   */
  addResponseInterceptor(interceptor) {
    this.responseInterceptors.push(interceptor);
  }

  /**
   * Add an error interceptor
   */
  addErrorInterceptor(interceptor) {
    this.errorInterceptors.push(interceptor);
  }

  /**
   * Apply request interceptors
   */
  async applyRequestInterceptors(config) {
    let modifiedConfig = { ...config };
    
    for (const interceptor of this.requestInterceptors) {
      modifiedConfig = await interceptor(modifiedConfig);
    }
    
    return modifiedConfig;
  }

  /**
   * Apply response interceptors
   */
  async applyResponseInterceptors(response) {
    let modifiedResponse = response;
    
    for (const interceptor of this.responseInterceptors) {
      modifiedResponse = await interceptor(modifiedResponse);
    }
    
    return modifiedResponse;
  }

  /**
   * Apply error interceptors
   */
  async applyErrorInterceptors(error) {
    let modifiedError = error;
    
    for (const interceptor of this.errorInterceptors) {
      modifiedError = await interceptor(modifiedError);
    }
    
    return modifiedError;
  }

  /**
   * Make HTTP request
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    // Prepare request configuration
    let config = {
      method: 'GET',
      headers: { ...this.defaultHeaders },
      ...options,
    };

    // Apply request interceptors
    config = await this.applyRequestInterceptors(config);

    try {
      // Make the request
      const response = await fetch(url, config);
      
      // Apply response interceptors
      const interceptedResponse = await this.applyResponseInterceptors(response);
      
      // Handle non-2xx responses
      if (!interceptedResponse.ok) {
        const error = new Error(`HTTP ${interceptedResponse.status}: ${interceptedResponse.statusText}`);
        error.status = interceptedResponse.status;
        error.response = interceptedResponse;
        throw error;
      }

      // Parse JSON response
      const data = await interceptedResponse.json();
      return data;
      
    } catch (error) {
      // Apply error interceptors
      const interceptedError = await this.applyErrorInterceptors(error);
      throw interceptedError;
    }
  }

  /**
   * GET request
   */
  get(endpoint, params = {}) {
    const queryString = new URLSearchParams(params).toString();
    const url = queryString ? `${endpoint}?${queryString}` : endpoint;
    
    return this.request(url, { method: 'GET' });
  }

  /**
   * POST request
   */
  post(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * PUT request
   */
  put(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  /**
   * PATCH request
   */
  patch(endpoint, data = {}) {
    return this.request(endpoint, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  /**
   * DELETE request
   */
  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }
}

// Create and configure the default API client
const apiClient = new ApiClient();

// Add authentication interceptor
apiClient.addRequestInterceptor(async (config) => {
  // Get auth token from localStorage or context
  const token = localStorage.getItem('authToken');
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

// Add response logging interceptor (development only)
if (process.env.NODE_ENV === 'development') {
  apiClient.addResponseInterceptor(async (response) => {
    console.log(`API Response: ${response.status} ${response.url}`);
    return response;
  });
}

// Add error handling interceptor
apiClient.addErrorInterceptor(async (error) => {
  // Handle specific error cases
  if (error.status === 401) {
    // Unauthorized - redirect to login
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  } else if (error.status === 403) {
    // Forbidden - show error message
    console.error('Access forbidden:', error.message);
  } else if (error.status >= 500) {
    // Server error - show generic error message
    console.error('Server error:', error.message);
  }
  
  return error;
});

export default apiClient;
