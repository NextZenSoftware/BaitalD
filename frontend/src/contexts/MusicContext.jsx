import React, { createContext, useState, useEffect } from "react";

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false); 
  const audio = React.useRef(new Audio("/audio/BT.mp3")); 

  const toggleMusic = () => {
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play(); 
    }
    setIsPlaying(!isPlaying); 
  };

  useEffect(() => {
    audio.current.loop = true; 

    return () => {
      audio.current.pause();
      audio.current = null; 
    };
  }, []);

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
};