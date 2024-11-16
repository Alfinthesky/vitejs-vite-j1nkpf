export const APP_CONFIG = {
  API_TIMEOUT: 15000,
  DEBOUNCE_DELAY: 300,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_FILE_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  CACHE_TTL: 5 * 60 * 1000, // 5 minutes
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  SETTINGS: '/settings',
} as const;