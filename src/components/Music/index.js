import React, { useState, useCallback, useMemo } from 'react';

import { usePlay } from '../../hooks/player';

import Icon from 'react-native-vector-icons/Feather';

import TrackPlayer from 'react-native-track-player';

import {
  Container,
  WrapperImage,
  ImageTrack,
  ContentMusic,
  MusicDuration,
  MusicName,
} from './styles';

function Music({ track }) {
  const { play, stop, playing } = usePlay();

  const [playThisMusic, setPlayThisMusic] = useState(false);

  useMemo(async () => {
    const currentTrackPlay = await TrackPlayer.getCurrentTrack();
    if (playing && currentTrackPlay === track.id) {
      setPlayThisMusic(true);
      return;
    }
    setPlayThisMusic(false);
  }, [playing, TrackPlayer, setPlayThisMusic]);

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
    <Container onPress={!playThisMusic ? handlePlay : handleStop}>
      <WrapperImage>
        <ImageTrack source={{ uri: track.album.images[0].url }} />
        {!playThisMusic ? (
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
