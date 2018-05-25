interface AuthConfig {
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
  }

  export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: '1',
    CLIENT_SECRET: 'h66OoiATZDbE0x9iVpBV4G3KV44qHn5231v9XYlr', // e.g., you.auth0.com
    AUDIENCE: 'http://localhost:3001',
    REDIRECT: 'http://localhost:4200/callback',
    SCOPE: ''
  };
