import { useEffect, useRef, useState } from "react";

export default function useAudio() {

  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] =
    useState(false);

  const [volume, setVolume] =
    useState(0.5);

  useEffect(() => {

    audioRef.current = new Audio(
      "/lagu.mp3"
    );

    audioRef.current.loop = true;

    audioRef.current.volume = volume;

    return () => {
      audioRef.current.pause();
    };

  }, []);

  useEffect(() => {

    if (audioRef.current) {
      audioRef.current.volume = volume;
    }

  }, [volume]);

  const playMusic = async () => {

    try {

      await audioRef.current.play();

      setIsPlaying(true);

    } catch (error) {

      console.log(
        "autoplay diblok browser:",
        error
      );

    }
  };

  const pauseMusic = () => {

    audioRef.current.pause();

    setIsPlaying(false);

  };

  const toggleMusic = () => {

    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  return {
    playMusic,
    pauseMusic,
    toggleMusic,
    isPlaying,

    volume,
    setVolume,
  };
}