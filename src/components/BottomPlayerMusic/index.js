import React from 'react';
import { usePlay } from '../../hooks/player';
import { useTrackPlayerProgress } from 'react-native-track-player';

import Icon from 'react-native-vector-icons/Feather';

import { View, Text } from 'react-native';

import { Container, ButtonControllerMusic, TitleMusic } from './styles';

const BottomPlayerMusic = () => {
  const { currentMusic } = usePlay();
  const { position, bufferedPosition, duration } = useTrackPlayerProgress();

  return (
    currentMusic && (
      <Container>
        <ButtonControllerMusic>
          <Icon size={30} name="pause-circle" color="#fff" />
          {/* {!isPlaying ? (
            <Icon size={30} name="play-circle" color="#fff" />
          ) : (

          )} */}
        </ButtonControllerMusic>

        {/* <View>
          <Text>
            Track progress: {position} seconds out of {duration} total
          </Text>
          <Text>
            Buffered progress: {bufferedPosition} seconds buffered out of{' '}
            {duration} total
          </Text>
        </View> */}

        <TitleMusic>
          {duration} / {position}
        </TitleMusic>
      </Container>
    )
  );
};

export default BottomPlayerMusic;
