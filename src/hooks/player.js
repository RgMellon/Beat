import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import TrackPlayer from 'react-native-track-player';

const PlayContext = createContext();

export const PlayerProvider = ({ children }) => {
  // const [selectedMusic, setSelectedMusic] = useState({});
  const [currentMusic, setCurrentMusic] = useState({});
  const [musicState, setMusicState] = useState('');

  const play = useCallback(
    async music => {
      await TrackPlayer.setupPlayer({
        // playBuffer: 5,
        // minBuffer: 10,
      });

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

  const setStateMusic = useCallback(state => {
    setMusicState(state);
  });

  return (
    <PlayContext.Provider
      value={{
        setStateMusic,
        musicState,
        currentMusic,
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
