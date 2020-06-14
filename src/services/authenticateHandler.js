import { authorize, refresh } from 'react-native-app-auth';

class AuthenticationHandler {
  constructor() {
    this.spotifyAuthConfig = {
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
  }

  async onLogin() {
    try {
      // console.log(this.spotifyAuthConfig);
      const result = await authorize(this.spotifyAuthConfig);
      alert(JSON.stringify(result));
      console.log(result);
      return result;
    } catch (error) {
      console.log('-------------error------------');
      // alert('doai');
      console.log(JSON.stringify(error));
    }
  }

  async refreshLogin(refreshToken) {
    const result = await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
    return result;
  }
}

const authHandler = new AuthenticationHandler();

export default authHandler;
