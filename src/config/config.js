export const develop = 'http://localhost:3000';
export const production = '';
export const version_api = 'v1';

// Stores Variables
export const STORE_NAV = 'NAVIGATION'
export const STORE_SOCIAL_NAV = 'SOCIALMEDIA'

let api;

if(process.env.NODE_ENV !== 'development') {
  api = production;
} else {
  api = develop;
}

export const server_api = api;
