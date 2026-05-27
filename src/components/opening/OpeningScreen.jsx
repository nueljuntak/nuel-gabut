import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OpeningScreen({
  onEnter,
}) {
  const [progress, setProgress] =
    useState(0);

  const [failed, setFailed] =
    useState(false);

  const [showEnter, setShowEnter] =
    useState(false);

  useEffect(() => {

    const duration = 3000;

    const intervalTime = 50;

    const increment =
      100 / (duration / intervalTime);

    const interval = setInterval(() => {

      setProgress((prev) => {

        if (prev >= 100) {

          clearInterval(interval);

          setTimeout(() => {
            setFailed(true);
          }, 300);

          setTimeout(() => {
            setFailed(false);
            setShowEnter(true);
          }, 1400);

          return 100;
        }

        return prev + increment;
      });

    }, intervalTime);

    return () => clearInterval(interval);

  }, []);

  return (
    <motion.section
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
      className="absolute inset-0 z-20 flex items-center justify-center"
    >
      <div className="w-full max-w-md px-8 text-center">

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-5xl font-bold tracking-tight"
        >
          gabut.
        </motion.h1>

        {!showEnter && (
          <>
            <p className="mt-6 text-zinc-400">

              {!failed
                ? "menghubungkan ke kehidupan percintaan..."
                : "gagal."}

            </p>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">

              <motion.div
                className="h-full bg-white"
                animate={{
                  width: `${progress}%`,
                }}
              />

            </div>
          </>
        )}

        {showEnter && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-8"
          >
            <p className="mb-6 text-zinc-400">
              mencoba mode halu...
            </p>

            <button
              onClick={onEnter}
              className="rounded-full border border-zinc-700 px-6 py-3 transition hover:scale-105 hover:border-white hover:bg-white hover:text-black"
            >
              masuk
            </button>
          </motion.div>
        )}

      </div>
    </motion.section>
  );
}