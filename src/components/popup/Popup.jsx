import { motion, AnimatePresence } from "framer-motion";

export default function Popup({
    isOpen,
    onClose,

    title,
    description,

    image,
    images,
    buttonText,
}) {

    return (

        <AnimatePresence>

            {isOpen && (

                <motion.div

                    initial={{
                        opacity: 0,
                    }}

                    animate={{
                        opacity: 1,
                    }}

                    exit={{
                        opacity: 0,
                    }}

                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm"
                >

                    <motion.div

                        initial={{
                            scale: 0.8,
                            opacity: 0,
                            y: 30,
                        }}

                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0,
                        }}

                        exit={{
                            scale: 0.8,
                            opacity: 0,
                            y: 30,
                        }}

                        transition={{
                            type: "spring",
                            damping: 18,
                            stiffness: 200,
                        }}

                        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl"
                    >

                        {/* GLOW */}

                        <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative z-10">

                            <h2 className="text-2xl font-semibold">

                                {title}

                            </h2>
                            {image && (

                                <img
                                    src={image}
                                    alt={title}

                                    className="mb-5 max-h-[500px] w-full rounded-2xl bg-black/30 object-contain p-2"
                                />

                            )}

                            {images && (

                                <div className="mb-5 grid grid-cols-2 gap-3">

                                    {images.map((img, index) => (

                                        <img
                                            key={index}

                                            src={img}

                                            alt={title}

                                            className="rounded-2xl bg-black/30 object-contain p-2"
                                        />

                                    ))}

                                </div>

                            )}

                            <p className="mt-4 leading-relaxed text-zinc-400">

                                {description}

                            </p>

                            <button
                                onClick={onClose}

                                className="mt-8 w-full rounded-2xl border border-zinc-700 px-4 py-3 transition hover:border-white hover:bg-white hover:text-black"
                            >
                                {buttonText || "tutup"}
                            </button>

                        </div>

                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>
    );
}