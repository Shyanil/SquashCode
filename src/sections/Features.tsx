import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "../components/WordsPullUpMultiStyle";

export const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const headerLine1 = [
    {
      text: "Studio-grade workflows for visionary creators.",
      className: "text-primary font-normal"
    }
  ];

  const headerLine2 = [
    {
      text: "Built for pure vision. Powered by art.",
      className: "text-gray-500 font-normal"
    }
  ];

  const cardEase = [0.22, 1, 0.36, 1] as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: cardEase,
      },
    },
  };

  return (
    <section className="min-h-screen relative py-24 px-4 sm:px-6 bg-black select-none" id="features">
      {/* Subtle Fractal Noise Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header Title */}
        <div className="text-center mb-16 sm:mb-20 flex flex-col gap-3">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <WordsPullUpMultiStyle segments={headerLine1} />
          </div>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            <WordsPullUpMultiStyle segments={headerLine2} />
          </div>
        </div>

        {/* 4-Column Card Grid */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px] w-full"
        >
          {/* Card 1 - Video Card */}
          <motion.div
            variants={cardVariants}
            className="relative overflow-hidden rounded-2xl border border-white/5 shadow-2xl flex flex-col justify-end p-6 group h-[400px] lg:h-full transition-all duration-300 hover:border-primary/20"
          >
            {/* Background Video */}
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none group-hover:scale-105 transition-transform duration-700"
            />
            {/* Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 noise-overlay opacity-[0.3] mix-blend-overlay pointer-events-none z-10" />

            {/* Bottom text */}
            <div className="z-20 relative">
              <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide select-none">
                Your creative canvas.
              </h3>
            </div>
          </motion.div>

          {/* Card 2 - "Project Storyboard." */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl border border-white/5 bg-[#212121] p-6 sm:p-8 flex flex-col justify-between group shadow-2xl h-[400px] lg:h-full transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex flex-col gap-6">
              {/* Header Icon & Number */}
              <div className="flex items-center justify-between">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                  alt="Storyboard Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover border border-white/10 group-hover:scale-105 transition-transform duration-300"
                />
                <span className="text-primary/30 font-serif italic text-lg sm:text-xl font-bold select-none">
                  01
                </span>
              </div>

              {/* Title & Checklist */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide select-none">
                  Project Storyboard.
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "Timeline arrangement",
                    "Audio-visual syncing",
                    "Scene transitions",
                    "Collaborative edits"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 select-none">
                      <Check className="text-primary w-4 h-4 shrink-0" />
                      <span className="text-gray-400 text-xs sm:text-sm font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Learn More rotated link */}
            <a
              href="#pricing"
              className="flex items-center gap-1.5 text-primary text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors duration-300 hover:text-white self-start"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>

          {/* Card 3 - "Smart Critiques." */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl border border-white/5 bg-[#212121] p-6 sm:p-8 flex flex-col justify-between group shadow-2xl h-[400px] lg:h-full transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex flex-col gap-6">
              {/* Header Icon & Number */}
              <div className="flex items-center justify-between">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                  alt="Smart Critiques Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover border border-white/10 group-hover:scale-105 transition-transform duration-300"
                />
                <span className="text-primary/30 font-serif italic text-lg sm:text-xl font-bold select-none">
                  02
                </span>
              </div>

              {/* Title & Checklist */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide select-none">
                  Smart Critiques.
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "Real-time frame critiques",
                    "Visual composition metrics",
                    "Contrast & lighting warnings"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 select-none">
                      <Check className="text-primary w-4 h-4 shrink-0" />
                      <span className="text-gray-400 text-xs sm:text-sm font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Learn More rotated link */}
            <a
              href="#pricing"
              className="flex items-center gap-1.5 text-primary text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors duration-300 hover:text-white self-start"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>

          {/* Card 4 - "Immersion Capsule." */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl border border-white/5 bg-[#212121] p-6 sm:p-8 flex flex-col justify-between group shadow-2xl h-[400px] lg:h-full transition-all duration-300 hover:border-primary/20"
          >
            <div className="flex flex-col gap-6">
              {/* Header Icon & Number */}
              <div className="flex items-center justify-between">
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                  alt="Immersion Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover border border-white/10 group-hover:scale-105 transition-transform duration-300"
                />
                <span className="text-primary/30 font-serif italic text-lg sm:text-xl font-bold select-none">
                  03
                </span>
              </div>

              {/* Title & Checklist */}
              <div className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide select-none">
                  Immersion Capsule.
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "Silence distracting alerts",
                    "Binaural ambient sounds",
                    "Schedule visual flow sync"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 select-none">
                      <Check className="text-primary w-4 h-4 shrink-0" />
                      <span className="text-gray-400 text-xs sm:text-sm font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Learn More rotated link */}
            <a
              href="#pricing"
              className="flex items-center gap-1.5 text-primary text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors duration-300 hover:text-white self-start"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
