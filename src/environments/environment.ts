// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  auth: {
    apiUrl: 'https://auth.dev-scholance.com',
    callbackURL: 'https://local.scholance:4200/callback',
    clientID: 'xIC1lXmLXBn1SPufKA7eSdiRSZXyytEm',
    domain: 'dev-scholance.auth0.com'
  },
  apiUri: 'https://inj6x6567k.execute-api.us-east-1.amazonaws.com/dev'
};
