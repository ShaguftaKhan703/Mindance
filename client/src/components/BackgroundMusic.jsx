import React, { useState, useRef, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import musicFile from "../assets/audio/Ambient Music.mp3";
import "../assets/css/BackgroundMusic.css";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioElement = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const volume = event.target.value;
    setVolume(volume);
    audioElement.current.volume = volume;
  };

  return (
    <div className="volume">
      <button className="volumebtn" onClick={togglePlayPause}>
        {isPlaying ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
      {isPlaying && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      )}
      <audio ref={audioElement} src={musicFile} />
    </div>
  );
}

export default MusicPlayer;
