import { motion } from "framer-motion";

export default function InteractiveCard({
    title,
    description,
    onClick,
}) {

    return (
        <motion.button
            onClick={onClick}
            whileHover={{
                y: -8,
                scale: 1.02,
            }}

            whileTap={{
                scale: 0.98,
            }}

            className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 text-left backdrop-blur-xl transition"

        >

            {/* GLOW */}

            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            </div>

            <div className="relative z-10">

                <h3 className="text-xl font-semibold">

                    {title}

                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-400">

                    {description}

                </p>

            </div>

        </motion.button>
    );
}