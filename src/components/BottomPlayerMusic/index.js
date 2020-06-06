import React, { useState } from 'react';
import { usePlay } from '../../hooks/player';

import Icon from 'react-native-vector-icons/Feather';

import CircleLoad from '../../components/Progess';

import {
  Container,
  ButtonControllerMusic,
  TitleMusic,
  ControllerPlayerButton,
} from './styles';

const BottomPlayerMusic = () => {
  const { currentMusic, musicState, play, stop } = usePlay();

  function handlePlay() {
    play(currentMusic);
  }

  return (
    !!currentMusic.title && (
      <Container>
        <ButtonControllerMusic>
          {musicState === 'playing' && <CircleLoad />}

          {musicState === 'finish' || musicState === 'pause' ? (
            <ControllerPlayerButton onPress={handlePlay}>
              <Icon size={30} name="play-circle" color="#fff" />
            </ControllerPlayerButton>
          ) : (
            <ControllerPlayerButton onPress={stop}>
              <Icon size={30} name="pause-circle" color="#fff" />
            </ControllerPlayerButton>
          )}
        </ButtonControllerMusic>

        <TitleMusic>{currentMusic.title}</TitleMusic>
      </Container>
    )
  );
};

export default BottomPlayerMusic;
