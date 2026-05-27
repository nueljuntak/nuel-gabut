import { useState } from "react";

import { AnimatePresence } from "framer-motion";

import Background from "./components/background/Background";

import ShootingStars from "./components/background/ShootingStars";

import OpeningScreen from "./components/opening/OpeningScreen";

import HomeScreen from "./components/home/HomeScreen";

import useAudio from "./hooks/useAudio";

export default function App() {

  const [entered, setEntered] =
    useState(false);

  const {
    playMusic,
    toggleMusic,
    isPlaying,
    
    volume,
    setVolume,
  } = useAudio();

  const handleEnter = async () => {

    setEntered(true);

    await playMusic();

  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">

      <Background />
      <ShootingStars />

      <AnimatePresence>

        {!entered && (
          <OpeningScreen
            onEnter={handleEnter}
          />
        )}

      </AnimatePresence>

      <HomeScreen
        entered={entered}
        toggleMusic={toggleMusic}
        isPlaying={isPlaying}
        volume={volume}
        setVolume={setVolume}
      />

    </main>
  );
}