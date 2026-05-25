import React from "react";
import { motion } from "framer-motion";

export const Stats: React.FC = () => {
  const statsList = [
    { value: "124+", label: "Projects Completed", id: "stat-projects" },
    { value: "14+", label: "Industry Experts", id: "stat-experts" },
    { value: "05+", label: "Years of Experience", id: "stat-years" },
    { value: "03+", label: "Prestigious Awards", id: "stat-awards" }
  ];

  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-black py-24 px-6 md:px-12 border-t border-white/5 relative z-10 select-none" id="our-stats">
      <div className="max-w-7xl mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading Copy */}
          <div className="lg:col-span-5 text-left flex flex-col items-start gap-4">
            <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase block">
              Our Achievements
            </span>
            <h2 className="font-heading font-medium tracking-tight text-white text-3xl sm:text-4xl md:text-5xl leading-[1.1]">
              Experience <span className="font-serif italic text-primary">emerging growth</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed tracking-wide mt-2">
              Get result-oriented strategies and work delivered for your business from the best growth marketing company in Kolkata.
            </p>
          </div>

          {/* Right Column: Numbers Grid */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
              {statsList.map((stat, i) => (
                <motion.div
                  key={stat.id}
                  id={stat.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: customEase, delay: i * 0.1 }}
                  className="rounded-2xl border border-white/5 bg-[#0B0B0B] p-6 sm:p-8 flex flex-col justify-center items-start relative overflow-hidden group hover:border-primary/20 shadow-2xl"
                >
                  {/* Subtle pink card aura on hover */}
                  <div className="absolute inset-0 bg-primary/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Giant Glowing Counter Number */}
                  <span className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold tracking-tight text-primary select-none drop-shadow-[0_4px_12px_rgba(237,67,107,0.15)] mb-2">
                    {stat.value}
                  </span>

                  {/* Description label */}
                  <span className="text-white font-medium text-xs sm:text-sm tracking-wide select-none">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
