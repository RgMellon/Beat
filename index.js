/**
 * @format
 */

import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';

import playerHandler from './player-handler';

import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

TrackPlayer.registerEventHandler(playerHandler);
// TrackPlayer.registerEventHandler(trackplayer);

// TrackPlayer.registerPlaybackService(() => require('./service'));
