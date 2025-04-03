import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../../../Components/Header";

function Hero() {
  const targetDate = new Date("2025-05-02T00:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [scrambledText, setScrambledText] = useState("Rang-E-Chinar");
  const letters = "abcdefghijklmnopqrstuvwxyz-";
  const originalText = "Rang-E-Chinar";

  const scrambleText = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledText(
        originalText
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );
      if (iteration >= originalText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 50);
  }, []);

  useEffect(() => {
    scrambleText();
    const intervalId = setInterval(scrambleText, 10000);
    return () => clearInterval(intervalId);
  }, [scrambleText]);

  useEffect(() => {
    Aos.init({ duration: 1000, anchorPlacement: "top-center", mirror: true });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden font-playfair">
      <div className="absolute inset-0 w-full h-full"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10">
        <Header />
        <div className="pt-4 md:pt-32 p-7 md:p-32 text-white text-center">
          <div data-aos="fade-down" className="text-xl ss:text-2xl md:text-4xl font-quicksand text-white overflow-hidden">
            2<sup className="text-xl md:text-2xl">nd</sup> & 3<sup className="text-xl md:text-2xl">rd</sup> May 2025
          </div>

          <div className="mt-8 mb-12 flex justify-center items-center w-full overflow-hidden">
            <h1 
              className="mb-10 text-5xl ss:text-8xl sm:text-9xl md:text-9xl font-bold font-inter text-white tracking-wider overflow-visible "
              style={{ letterSpacing: '0.05em', maxWidth: '100%', lineHeight: '1.1' }}
            >
              {scrambledText}
            </h1>
          </div>

          <p className="mt-8 text-2xl ss:text-3xl font-semibold text-white font-quicksand">
            Greener Innovations: Engineering a Sustainable World
          </p>

          <div className="mt-10 md:mt-16 flex justify-center">
            <div className="w-full min-w-150 px-12 lg:px-40 flex flex-wrap gap-8 justify-between font-bold font-quicksand">
              {Object.entries(timeLeft).map(([unit, value], index) => (
                <div 
                  key={unit} 
                  data-aos="fade-down" 
                  data-aos-delay={index * 100} 
                  className="text-center"
                >
                  <div className="block text-6xl md:text-9xl font-semibold text-white font-playfair pb-3 md:pb-6">
                    {value}
                  </div>
                  <div className="block text-lg md:text-3xl text-white/80 font-quicksand uppercase">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Register Button Section Commented Out */}
          {/*
          <div className="mt-10 py-4 flex justify-center opacity-90">
            <Link 
              data-aos="fade-in" 
              data-aos-delay="500" 
              to="/register" 
              className="px-6 md:px-8 py-4 rounded-full text-md md:text-xl font-semibold bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 border-2 border-green-300 hover:border-green-400 hover:shadow-md hover:shadow-green-300/40 hover:scale-105 transition-all duration-300 flex items-center gap-3 font-quicksand group"
            >
            </Link>
          </div>
          */}

        </div>
      </div>
    </div>
  );
}

export default Hero;