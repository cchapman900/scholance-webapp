import { environment } from '../../../environments/environment';

interface AuthConfig {
  apiUrl: string;
  callbackURL: string;
  clientID: string;
  domain: string;
}

export const AUTH_CONFIG: AuthConfig = {
  apiUrl: environment.auth.apiUrl,
  clientID: environment.auth.clientID,
  domain: environment.auth.domain,
  callbackURL: environment.auth.callbackURL
};
