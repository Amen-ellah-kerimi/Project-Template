/**
 * Services Export
 * 
 * This file exports all services for easy importing
 * across the application.
 * 
 * Usage:
 * import { userService, storageService } from '@/services';
 * import apiClient from '@/services/api/client';
 */

export { default as apiClient } from './api/client';
export * as userService from './userService';
export * as storageService from './storageService';
