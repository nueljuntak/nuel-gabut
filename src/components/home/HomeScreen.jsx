import { motion } from "framer-motion";

export default function HomeScreen({
  entered,

  toggleMusic,
  isPlaying,

  volume,
  setVolume,
}) {

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">

      {/* AUDIO PANEL */}

      <div className="absolute right-4 top-4 z-20 w-56 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4 backdrop-blur-xl">

        <p className="mb-3 text-sm text-zinc-400">
          audio ambience
        </p>

        <button
          onClick={toggleMusic}
          className="w-full rounded-xl border border-zinc-700 px-4 py-2 text-sm transition hover:border-white hover:bg-white hover:text-black"
        >
          {isPlaying
            ? "pause lagu"
            : "play lagu"}
        </button>

        <div className="mt-4">

          <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">

            <span>volume</span>

            <span>
              {Math.round(volume * 100)}%
            </span>

          </div>

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}

            onChange={(e) =>
              setVolume(
                Number(e.target.value)
              )
            }

            className="w-full cursor-pointer"
          />

        </div>

      </div>

      {/* HERO */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: entered ? 1 : 0,
          y: entered ? 0 : 40,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="max-w-2xl text-center"
      >

        <h2 className="text-4xl font-bold leading-tight md:text-6xl">

          selamat datang
          <br />

          di tempat penuh
          keputusan buruk.

        </h2>

        <p className="mt-5 text-sm leading-relaxed text-zinc-400 md:text-base">

          pencet apa aja.
          siapa tau hidupmu tiba-tiba membaik.

        </p>

      </motion.div>

    </section>
  );
}