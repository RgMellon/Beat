import React, { useState, useCallback, useEffect, useMemo } from 'react';

import { usePlay } from '../../hooks/player';

import Icon from 'react-native-vector-icons/Feather';

import TrackPlayer, {
  useTrackPlayerEvents,
  TrackPlayerEvents,
} from 'react-native-track-player';

import {
  Container,
  WrapperImage,
  ImageTrack,
  ContentMusic,
  MusicDuration,
  MusicName,
} from './styles';

const events = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
  // TrackPlayerEvents.REMOTE_PAUSE,
  // TrackPlayerEvents.REMOTE_STOP,
];

function Music({ track }) {
  // useEffect(() => {
  //   console.log('rendeer');
  // }, []);
  console.log('render');

  const { play, stop, setStateMusic } = usePlay();

  const [isPlaying, setIsPlaying] = useState(false);

  useTrackPlayerEvents(events, async event => {
    console.log(event);
    const currentTrackPlay = await TrackPlayer.getCurrentTrack();

    if (event.state === 0) {
      setIsPlaying(false);
      return;
    }

    if (event.state === 1 && currentTrackPlay === track.id) {
      setIsPlaying(false);
      setStateMusic('finish');
      return;
    }

    if (event.state === 2 && currentTrackPlay === track.id) {
      setIsPlaying(false);
      setStateMusic('pause');

      return;
    }

    if (event.state === 3 && currentTrackPlay === track.id) {
      // setCurrentMusic(true);
      setIsPlaying(true);
      setStateMusic('playing');

      return;
    }
  });

  const handlePlay = useCallback(() => {
    const music = {
      id: track.id,
      url: track.preview_url,
      title: track.name,
      artist: track.artists[0].name,
      artwork: track.album.images[0].url,
    };

    play(music);
  });

  const handleStop = useCallback(() => {
    stop();
  });

  return (
    <Container onPress={!isPlaying ? handlePlay : handleStop}>
      <WrapperImage>
        <ImageTrack source={{ uri: track.album.images[0].url }} />
        {!isPlaying ? (
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
