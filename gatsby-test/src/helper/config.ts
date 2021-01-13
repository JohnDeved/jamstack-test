export const NODE_ENV = process.env.NODE_ENV as 'development' | 'production'
export const isDevelopment = NODE_ENV === 'development'
export const isProduction = NODE_ENV === 'production'
