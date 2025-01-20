import React, { useContext } from "react";
import { MusicContext } from "../../contexts/MusicContext";


const MusicControl = () => {
  const { isPlaying, toggleMusic } = useContext(MusicContext);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        className="bg-green-500 hover:bg-green-600 transition-all duration-500 text-white px-4 py-2 rounded shadow"
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
};

export default MusicControl;