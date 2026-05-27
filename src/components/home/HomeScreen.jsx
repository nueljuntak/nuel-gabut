import { motion } from "framer-motion";
import cardsData from "../../data/cardsData";
import { useState } from "react";
import rizzResults from "../../data/content/rizz";
import Popup from "../popup/Popup";
import InteractiveCard from "../cards/InteractiveCard";
import janganSteps from "../../data/content/jangan";
import ChatSimulator from "../chat/ChatSimulator";
import PersonalityScanner from "../scanner/PersonalityScanner";
import MotivationPaywall from "../motivation/MotivationPaywall";

export default function HomeScreen({
    entered,

    toggleMusic,
    isPlaying,

    volume,
    setVolume,

    playEffect,
}) {
    const [selectedCard, setSelectedCard] =
        useState(null);
    const [popupContent, setPopupContent] =
        useState(null);
    const [janganStep, setJanganStep] =
        useState(0);
    const [showLovePopup, setShowLovePopup] =
        useState(false);
    const [showChatSimulator, setShowChatSimulator] =
        useState(false);
    const [showScanner, setShowScanner] =
        useState(false);
    const [showMotivation, setShowMotivation] = useState(false);

    const [runButtonPosition, setRunButtonPosition] =
        useState({
            x: 0,
            y: 0,
        });
    const handleCardClick = (card) => {
        if (card.title === "motivasi hari ini") {
            setShowMotivation(true);
            return;
        }
        if (
            card.title ===
            "analisa kepribadian"
        ) {

            setShowScanner(true);

            return;
        }
        if (card.title === "chat simulator") {

            setShowChatSimulator(true);

            return;
        }
        if (card.title === "cari pasangan") {

            setShowLovePopup(true);

            setSelectedCard(card);

            return;
        }
        if (card.title === "jangan dipencet") {

            const firstStep =
                janganSteps[0];

            setPopupContent(firstStep);

            setJanganStep(0);

            playEffect(firstStep.sound);

            setSelectedCard(card);

            return;
        }

        if (card.title === "tes rizz") {

            const randomResult =
                rizzResults[
                Math.floor(
                    Math.random() *
                    rizzResults.length
                )
                ];

            setPopupContent(randomResult);
            playEffect(randomResult.sound);

        } else {

            setPopupContent({
                title: card.title,
                description:
                    card.description,
            });

        }

        setSelectedCard(card);
    };
    const handlePopupNext = () => {

        if (
            selectedCard?.title !==
            "jangan dipencet"
        ) {

            setSelectedCard(null);

            return;
        }

        const nextStep =
            janganStep + 1;

        if (
            nextStep >=
            janganSteps.length
        ) {

            setSelectedCard(null);

            setJanganStep(0);

            return;
        }

        const currentData =
            janganSteps[nextStep];

        setJanganStep(nextStep);

        setPopupContent(currentData);

        playEffect(currentData.sound);
    };
    const moveRunButton = () => {

        const randomX =
            Math.floor(
                Math.random() * 200
            ) - 100;

        const randomY =
            Math.floor(
                Math.random() * 200
            ) - 100;

        setRunButtonPosition({
            x: randomX,
            y: randomY,
        });
    };
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
                className="max-w-2xl text-center mb-10"
            >

                <h2 className="text-2xl font-semibold leading-tight md:text-4xl">

                    selamat datang
                    <br />

                    di tempat penuh
                    keputusan buruk.

                </h2>

                <p className="mt-4 text-sm leading-relaxed text-zinc-500 md:text-base">

                    pencet apa aja.
                    siapa tau hidupmu tiba-tiba membaik.

                </p>
                <div className="mt-14 grid w-full max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

                    {cardsData.map((card) => (

                        <InteractiveCard
                            key={card.id}

                            title={card.title}

                            description={card.description}

                            onClick={() =>
                                handleCardClick(card)
                            }
                        />

                    ))}

                </div>

            </motion.div>
            <Popup


                isOpen={selectedCard !== null}

                onClose={handlePopupNext}

                title={popupContent?.title}

                description={
                    popupContent?.description
                }

                image={popupContent?.image}

                images={popupContent?.images}

                buttonText={
                    popupContent?.buttonText
                }

            />
            {showLovePopup && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm">

                    <div className="relative w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-6">

                        <h2 className="text-2xl font-semibold">

                            apakah kamu yakin?

                        </h2>

                        <p className="mt-3 text-zinc-400">

                            sistem mendeteksi potensi badut.

                        </p>

                        <div className="relative mt-10 flex items-center justify-center gap-5">

                            {/* BUTTON GAJADI */}

                            <button

                                onClick={() => {

                                    setPopupContent({

                                        title:
                                            "keputusan bijak",

                                        description:
                                            "sistem menyetujui keputusanmu.",

                                        image:
                                            "/pasangan1.jpg",

                                        buttonText:
                                            "tutup",
                                    });

                                    playEffect(
                                        "/pasangan1.mp3"
                                    );

                                    setShowLovePopup(false);
                                    setSelectedCard({
                                        title: "hasil pasangan",
                                    });
                                }}

                                className="rounded-2xl border border-zinc-700 px-5 py-3 transition hover:border-white hover:bg-white hover:text-black"
                            >

                                gajadi

                            </button>

                            {/* BUTTON KABUR */}

                            <button

                                onMouseEnter={
                                    moveRunButton
                                }

                                style={{
                                    transform:
                                        `translate(${runButtonPosition.x}px, ${runButtonPosition.y}px)`,
                                }}

                                className="rounded-2xl border border-red-500 px-5 py-3 text-red-400 transition duration-200"
                            >

                                klik untuk dapat pasangan

                            </button>

                        </div>

                    </div>

                </div>

            )}
            <ChatSimulator

                isOpen={showChatSimulator}

                onClose={() =>
                    setShowChatSimulator(false)
                }

                playEffect={playEffect}

            />
            <PersonalityScanner

                isOpen={showScanner}

                onClose={() =>
                    setShowScanner(false)
                }

                playEffect={playEffect}

            />
            <MotivationPaywall
                isOpen={showMotivation}
                onClose={() => setShowMotivation(false)}
                playEffect={playEffect}
            />
        </section>
    );
}