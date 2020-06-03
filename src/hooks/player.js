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
  const [selectedMusic, setSelectedMusic] = useState({});
  const [currentMusic, setCurrentMusic] = useState(false);

  const setMusic = useCallback(async music => {
    setSelectedMusic(music);
  }, []);

  const play = useCallback(
    async music => {
      await TrackPlayer.setupPlayer({
        playBuffer: 5,
        minBuffer: 10,
      }).then(async () => {
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

        await TrackPlayer.play();
        setCurrentMusic(true);
      });
    },

    [TrackPlayer, setCurrentMusic],
  );

  const stop = useCallback(async () => {
    await TrackPlayer.pause();
  }, [TrackPlayer]);

  return (
    <PlayContext.Provider
      value={{
        setMusic,
        selectedMusic,
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
