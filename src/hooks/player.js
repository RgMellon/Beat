import React, { createContext, useCallback, useState, useContext } from 'react';

import TrackPlayer, {
  useTrackPlayerEvents,
  TrackPlayerEvents,
} from 'react-native-track-player';

const events = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
];

const PlayContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playing, setPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState({});

  useTrackPlayerEvents(events, event => {
    if (event.state !== 3) {
      setPlaying(false);

      return;
    }

    setPlaying(true);
  });

  const play = useCallback(
    async music => {
      await TrackPlayer.setupPlayer({});

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

      await TrackPlayer.add(music);
      setCurrentMusic(music);
      await TrackPlayer.play().then();
    },

    [TrackPlayer, setCurrentMusic],
  );

  const stop = useCallback(async () => {
    await TrackPlayer.pause();
  }, [TrackPlayer]);

  return (
    <PlayContext.Provider
      value={{
        currentMusic,
        playing,
        play,
        stop,
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};

export function usePlay() {
  const context = useContext(PlayContext);

  if (!context) {
    throw Error('usePlay must be used within an PlayerProvider');
  }

  return context;
}
