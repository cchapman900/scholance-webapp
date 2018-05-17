interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'YfWGuRfIUTmPX8dhgqAfSr65HW68VrEM',
  domain: 'scholance.auth0.com',
  callbackURL: 'http://localhost:4200/callback',
  apiUrl: 'https://auth.scholance.com'
};
