import { environment } from '../../../environments/environment';

interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: environment.auth.clientID,
  domain: 'scholance.auth0.com',
  callbackURL: environment.auth.callbackURL,
  apiUrl: 'https://auth.scholance.com'
};
