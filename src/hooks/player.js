import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

const PlayContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [selectedMusic, setSelectedMusic] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  const setMusic = useCallback(async music => {
    setSelectedMusic(music);
  }, []);

  const playingMusic = useCallback(playing => {
    setIsPlaying(playing);
  }, []);

  return (
    <PlayContext.Provider
      value={{ setMusic, selectedMusic, isPlaying, playingMusic }}
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
