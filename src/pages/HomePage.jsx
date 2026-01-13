import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import BestSellers from "../components/BestSellers";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  const handleStart = () => {
    const video = document.getElementById("introVideo");
    video.play();
    setVideoStarted(true);

    // Hide intro after 9s
    setTimeout(() => {
      setShowIntro(false);
    }, 9000);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen pb-10">
      {showIntro ? (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50 flex justify-center items-center">
          <video
            id="introVideo"
            className="w-full overflow-y-hidden h-full object-cover"
            loop
          >
            <source src="/assets/videos/3otor2.mp4" type="video/mp4" />
          </video>
          {!videoStarted && (
            <button
              onClick={handleStart}
              className="absolute px-8 py-4 text-lg font-semibold bg-amber-500/90 text-black rounded-xl shadow-xl hover:bg-amber-600 transition-all"
            >
              Enter
            </button>
          )}
        </div>
      ) : (
        <>
          <HeroSection />
          <Categories />
          <BestSellers />
        </>
      )}
    </div>
  );
}
