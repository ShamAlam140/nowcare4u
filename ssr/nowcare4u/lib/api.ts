// API configuration for development and production
const isDevelopment = process.env.NODE_ENV === 'development';

// In development, use the proxy (/api)
// In production, use the full backend URL
export const API_BASE_URL = isDevelopment
    ? 'https://nowcare4u.onrender.com/api'
    : 'https://nowcare4u.onrender.com/api';

/**
 * Helper function to build API URLs
 * Automatically handles development vs production environments
 * @param path - API path (with or without leading slash)
 * @returns Full API URL
 * @example buildApiUrl('/admin/login') or buildApiUrl('admin/login')
 */
export const buildApiUrl = (path: string): string => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${API_BASE_URL}/${cleanPath}`;
};

/**
 * Server-side API URL - always uses full URL for SSR
 */
export const SERVER_API_BASE_URL = 'https://nowcare4-u-production-acbz.vercel.app/api';

export const buildServerApiUrl = (path: string): string => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${SERVER_API_BASE_URL}/${cleanPath}`;
};

export default API_BASE_URL;
