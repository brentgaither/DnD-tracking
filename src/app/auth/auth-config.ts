interface AuthConfig {
    CLIENT_ID: string;
    REDIRECT: string;
    SCOPE: string;
  }

  export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: '6',
    REDIRECT: 'http://127.0.0.1:8000/callback',
    SCOPE: ''
  };
