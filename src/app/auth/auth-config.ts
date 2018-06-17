interface AuthConfig {
    CLIENT_ID: string;
    REDIRECT: string;
    SCOPE: string;
    RESPONSE_TYPE: string;
    AUTHENTICATION_SERVER: string;
  }

  export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: '1',
    REDIRECT: 'http://localhost:4200/callback',
    SCOPE: '',
    RESPONSE_TYPE: 'token',
    AUTHENTICATION_SERVER: 'http://127.0.0.1:8000/oauth/authorize'
  };
