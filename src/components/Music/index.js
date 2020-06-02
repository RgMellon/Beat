import React, { useEffect, useState } from 'react';

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
  const [isPlay, setIsplay] = useState(false);

  async function handlePlay() {
    await TrackPlayer.setupPlayer().then(async () => {
      // Adds a track to the queue
      await TrackPlayer.add({
        id: track.id,
        url: track.preview_url,
        title: track.name,
        artist: track.artists[0].name,
        artwork: track.album.images[0].url,
      });

      await TrackPlayer.play();
    });

    // setIsplay(!isPlay);
  }

  // async function handleStop() {
  //   setIsplay(!isPlay);
  //   await TrackPlayer.pause();
  // }

  return (
    <Container onPress={handlePlay}>
      <WrapperImage>
        <ImageTrack source={{ uri: track.album.images[0].url }} />

        {/* {!isPlay ? ( */}
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
        {/* ) : (
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
        )} */}
      </WrapperImage>

      <ContentMusic>
        <MusicName numberOfLines={1}> {track.name} </MusicName>

        <MusicDuration>Duration : {track.duration_ms}</MusicDuration>
      </ContentMusic>
    </Container>
  );
}

export default Music;
