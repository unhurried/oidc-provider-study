const { Provider } = require('oidc-provider');
const configuration = {
  clients: [{
    client_id: 'abc',
    client_secret: 'xyz',
    redirect_uris: ['http://localhost/callback'],
  }]
};

const oidc = new Provider('http://localhost:3000', configuration);
const server = oidc.listen(3000, () => {
  console.log('oidc-provider listening on port 3000.');
});