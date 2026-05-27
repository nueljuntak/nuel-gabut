import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MotivationPaywall({
    isOpen,
    onClose,
    playEffect,
}) {
    const [stage, setStage] = useState("paywall");
    // paywall | fail

    const handleSubscribe = () => {
        playEffect("/motivasi.mp3");

        setTimeout(() => {
            setStage("fail");
            playEffect("/miskin.mp3");
        }, 800);
    };

    const handleClose = () => {
        setStage("paywall");
        onClose();
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
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-5 shadow-2xl"
                    >

                        <h2 className="text-xl font-semibold">
                            motivasi hari ini
                        </h2>

                        {stage === "paywall" && (
                            <div className="mt-6 text-center">

                                <p className="text-zinc-400 leading-relaxed">
                                    motivasi terkunci. <br />
                                    subscribe Rp100 miliar untuk membuka.
                                </p>

                                <img
                                    src="/motivasi.jpg"
                                    className="mt-5 max-h-[260px] w-full object-contain rounded-2xl"
                                />

                                <button
                                    onClick={handleSubscribe}
                                    className="mt-6 w-full rounded-2xl border border-zinc-700 px-4 py-3 transition hover:border-white hover:bg-white hover:text-black"
                                >
                                    subscribe sekarang
                                </button>

                                <button
                                    onClick={handleClose}
                                    className="mt-3 w-full text-sm text-zinc-500 hover:text-white"
                                >
                                    tutup
                                </button>
                            </div>
                        )}

                        {stage === "fail" && (
                            <div className="mt-6 text-center">

                                <p className="text-lg font-semibold">
                                    transaksi gagal.
                                </p>
                                <img
                                    src="/miskin.jpg"
                                    className="mt-5 max-h-[260px] w-full object-contain rounded-2xl"
                                />

                                <p className="mt-2 text-zinc-400">
                                    rekening anda menertawakan keputusan ini.
                                </p>

                                <button
                                    onClick={handleClose}
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