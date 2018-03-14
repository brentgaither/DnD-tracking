interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
  }

  export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: '3',
    CLIENT_DOMAIN: '127.0.0.1:8000', // e.g., you.auth0.com
    AUDIENCE: 'http://localhost:3001',
    REDIRECT: 'http://localhost:4200/callback',
    SCOPE: ''
  };
