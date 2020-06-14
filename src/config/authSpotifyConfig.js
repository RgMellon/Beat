export default {
  clientId: '2bb1d40417954d3d9294b99c740ee2f4',
  clientSecret: '999476a5e31c46c09dde7b6dcda07f81',
  redirectUrl: 'musicapp:/oauth',
  scopes: [
    'user-read-email',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-read-private',
    'user-follow-read',
    'user-library-read',
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};
