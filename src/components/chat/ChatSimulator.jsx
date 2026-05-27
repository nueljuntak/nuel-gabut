import { useState } from "react";

import {
    motion,
    AnimatePresence,
} from "framer-motion";

export default function ChatSimulator({
    isOpen,
    onClose,

    playEffect,
}) {

    const [message, setMessage] =
        useState("");

    const [chatStage, setChatStage] =
        useState("input");

    const [isTyping, setIsTyping] =
        useState(false);

    const handleSend = () => {

        if (!message.trim()) return;

        setChatStage("sent");

        setIsTyping(true);

        setTimeout(() => {

            setIsTyping(false);

            setChatStage("blocked");

            playEffect(
                "/blocked.mp3"
            );

        }, 2000);
    };

    const handleClose = () => {

        setMessage("");

        setChatStage("input");

        setIsTyping(false);

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

                        className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl"
                    >

                        <h2 className="text-xl font-semibold">

                            chat simulator

                        </h2>

                        <div className="mt-6 rounded-2xl border border-zinc-800 bg-black/30 p-4">

                            {chatStage === "input" && (

                                <div>

                                    <p className="mb-4 text-zinc-400">

                                        ketik hai...

                                    </p>

                                    <input

                                        value={message}

                                        onChange={(e) =>
                                            setMessage(
                                                e.target.value
                                            )
                                        }

                                        placeholder="ketik sesuatu..."

                                        className="w-full rounded-xl border border-zinc-700 bg-transparent px-4 py-3 outline-none"
                                    />

                                    <button

                                        onClick={handleSend}

                                        className="mt-4 w-full rounded-xl border border-zinc-700 px-4 py-3 transition hover:border-white hover:bg-white hover:text-black"
                                    >

                                        kirim

                                    </button>

                                </div>

                            )}

                            {chatStage === "sent" && (

                                <div>

                                    <div className="ml-auto w-fit rounded-2xl bg-white px-4 py-2 text-black">

                                        {message}

                                    </div>

                                    {isTyping && (

                                        <div className="mt-4 w-fit rounded-2xl bg-zinc-800 px-4 py-3">

                                            <div className="flex items-center gap-2">

                                                <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400" />

                                                <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:0.2s]" />

                                                <div className="h-2 w-2 animate-bounce rounded-full bg-zinc-400 [animation-delay:0.4s]" />

                                            </div>

                                        </div>

                                    )}

                                </div>

                            )}

                            {chatStage === "blocked" && (

                                <div className="text-center">

                                    <img
                                        src="/blocked.jpg"

                                        className="mb-5 rounded-2xl"
                                    />

                                    <p className="text-lg font-semibold">

                                        anda telah diblokir.

                                    </p>

                                    <button

                                        onClick={handleClose}

                                        className="mt-5 w-full rounded-xl border border-zinc-700 px-4 py-3 transition hover:border-white hover:bg-white hover:text-black"
                                    >

                                        tutup

                                    </button>

                                </div>

                            )}

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>
    );
}