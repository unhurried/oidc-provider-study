const { Provider } = require('oidc-provider');
const configuration = {
  clients: [{
    client_id: 'abc',
    client_secret: 'xyz',
    scope: "openid offline_access s1 s2",
    grant_types: ["authorization_code", "refresh_token"],
    redirect_uris: ['http://localhost/callback'],
  }],
  scopes: ["openid", "offline_access", "s1", "s2"],
  claims: {c1: null, c2: null},
  acrValues: ["l1", "l2"],
  features: {
    claimsParameter: { enabled: true },
  },
};

const oidc = new Provider('http://localhost:3000', configuration);
const server = oidc.listen(3000, () => {
  console.log('oidc-provider listening on port 3000.');
});