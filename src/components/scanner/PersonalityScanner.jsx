import {
    useState,
    useEffect,
} from "react";

import {
    motion,
    AnimatePresence,
} from "framer-motion";

export default function PersonalityScanner({
    isOpen,
    onClose,

    playEffect,
}) {

    const [loading, setLoading] =
        useState(true);
    useEffect(() => {

        if (isOpen) {

            startScanner();

        }

    }, [isOpen]);

    const [result, setResult] =
        useState(null);

    const generateResult = () => {

        return {

            badut:
                Math.floor(
                    Math.random() * 11
                ) + 90,

            misterius: 0,

            npc:
                Math.floor(
                    Math.random() * 21
                ) + 80,

            halu:
                Math.floor(
                    Math.random() * 6
                ) + 95,

            ngarep:
                Math.floor(
                    Math.random() * 6
                ) + 95,
        };
    };

    const startScanner = () => {

        setLoading(true);

        setResult(null);

        setTimeout(() => {

            setLoading(false);

            setResult(
                generateResult()
            );

            playEffect(
                "/scanner.mp3"
            );

        }, 2000);
    };

    return (

        <AnimatePresence>

            {isOpen && (

                <motion.div

                    initial={{ opacity: 0 }}

                    animate={{ opacity: 1 }}

                    exit={{ opacity: 0 }}

                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm"
                >

                    <motion.div

                        initial={{
                            scale: 0.8,
                            opacity: 0,
                            y: 20,
                        }}

                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0,
                        }}

                        exit={{
                            scale: 0.8,
                            opacity: 0,
                            y: 20,
                        }}

                        transition={{
                            type: "spring",
                            damping: 18,
                            stiffness: 200,
                        }}

                        className="w-full max-w-lg rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow-2xl"
                    >

                        <h2 className="text-xl font-semibold">

                            analisa kepribadian

                        </h2>

                        {loading ? (

                            <div className="mt-8">

                                <p className="mb-4 text-zinc-400">

                                    menganalisa kepribadian...

                                </p>

                                <div className="h-3 overflow-hidden rounded-full bg-zinc-800">

                                    <motion.div

                                        initial={{
                                            width: 0,
                                        }}

                                        animate={{
                                            width: "100%",
                                        }}

                                        transition={{
                                            duration: 2,
                                        }}

                                        className="h-full rounded-full bg-white"
                                    />

                                </div>

                            </div>

                        ) : (

                            <div className="mt-6">

                                <img
                                    src="/scanner.jpg"

                                    className="mb-4 max-h-[320px] w-full rounded-2xl object-contain"
                                />

                                <div className="mt-6 grid grid-cols-3 gap-3">

                                    <div className="rounded-xl border border-zinc-800 bg-black/20 p-3 text-center">

                                        <p className="text-xs text-zinc-500">

                                            tingkat badut

                                        </p>

                                        <p className="mt-1 font-mono text-lg font-bold">

                                            {result.badut}%

                                        </p>

                                    </div>

                                    <div className="rounded-xl border border-zinc-800 bg-black/20 p-3 text-center">

                                        <p className="text-xs text-zinc-500">

                                            aura misterius

                                        </p>

                                        <p className="mt-1 font-mono text-lg font-bold">

                                            {result.misterius}%

                                        </p>

                                    </div>

                                    <div className="rounded-xl border border-zinc-800 bg-black/20 p-3 text-center">

                                        <p className="text-xs text-zinc-500">

                                            energi npc

                                        </p>

                                        <p className="mt-1 font-mono text-lg font-bold">

                                            {result.npc}%

                                        </p>

                                    </div>

                                    <div className="rounded-xl border border-zinc-800 bg-black/20 p-3 text-center">

                                        <p className="text-xs text-zinc-500">

                                            deteksi halu

                                        </p>

                                        <p className="mt-1 font-mono text-lg font-bold">

                                            {result.halu}%

                                        </p>

                                    </div>

                                    <div className="rounded-xl border border-zinc-800 bg-black/20 p-3 text-center">

                                        <p className="text-xs text-zinc-500">

                                            tingkat ngarep

                                        </p>

                                        <p className="mt-1 font-mono text-lg font-bold">

                                            {result.ngarep}%

                                        </p>

                                    </div>

                                </div>

                                <button

                                    onClick={() => {

                                        onClose();

                                        startScanner();
                                    }}

                                    className="mt-6 w-full rounded-2xl border border-zinc-700 px-4 py-3 transition hover:border-white hover:bg-white hover:text-black"
                                >

                                    tutup

                                </button>

                            </div>

                        )}

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>
    );
}