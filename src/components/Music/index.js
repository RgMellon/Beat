import React, { useEffect, useState, useMemo } from 'react';

import Icon from 'react-native-vector-icons/Feather';
import TrackPlayer, {
  useTrackPlayerEvents,
  TrackPlayerEvents,
  STATE_PLAYING,
} from 'react-native-track-player';

const events = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
  TrackPlayerEvents.REMOTE_PAUSE,
  TrackPlayerEvents.REMOTE_STOP,
];
// import playerHandler from '../../../player-handler';

import {
  Container,
  WrapperImage,
  ImageTrack,
  ContentMusic,
  MusicDuration,
  MusicName,
} from './styles';

function Music({ track }) {
  const [isPlay, setIsplay] = useState(false);

  useTrackPlayerEvents(events, async event => {
    const currentTrackPlay = await TrackPlayer.getCurrentTrack();

    if (event.state === 2 && currentTrackPlay === track.id) {
      setIsplay(false);
      return;
    }

    if (event.state === 3 && currentTrackPlay === track.id) {
      setIsplay(true);
      return;
    }
  });

  async function handlePlay() {
    await TrackPlayer.setupPlayer().then(async () => {
      TrackPlayer.updateOptions({
        capabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
        ],
        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
        ],
        stopWithApp: true,
      });

      await TrackPlayer.add({
        id: track.id,
        url: track.preview_url,
        title: track.name,
        artist: track.artists[0].name,
        artwork: track.album.images[0].url,
      });

      await TrackPlayer.play();
    });
  }

  async function handleStop() {
    await TrackPlayer.pause();
  }

  return (
    <Container onPress={!isPlay ? handlePlay : handleStop}>
      <WrapperImage>
        <ImageTrack source={{ uri: track.album.images[0].url }} />
        {!isPlay ? (
          <Icon
            size={35}
            name="play"
            color="#fff"
            style={{
              position: 'absolute',
              top: '10%',
              left: '20%',
            }}
          />
        ) : (
          <Icon
            size={35}
            name="pause"
            color="#fff"
            style={{
              position: 'absolute',
              top: '10%',
              left: '20%',
            }}
          />
        )}
      </WrapperImage>

      <ContentMusic>
        <MusicName numberOfLines={1}> {track.name} </MusicName>

        <MusicDuration>Duration : {track.duration_ms}</MusicDuration>
      </ContentMusic>
    </Container>
  );
}

export default Music;
