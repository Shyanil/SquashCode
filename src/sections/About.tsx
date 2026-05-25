import React from "react";
import { motion } from "framer-motion";
import SagarCEOPng from "../assets/Sagar_CEO.png";

export const About: React.FC = () => {
  const customEase = [0.16, 1, 0.3, 1] as const;

  const fadeUpVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (delay: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration: 0.8,
        ease: customEase,
      },
    }),
  };

  return (
    <section className="bg-black py-24 px-6 md:px-12 relative overflow-hidden select-none" id="our-story">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Welcome Section Header */}
        <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
          <motion.span
            custom={0.1}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4 block"
          >
            Who We Are
          </motion.span>
          
          <motion.h2
            custom={0.2}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading font-medium tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
          >
            Welcome to <span className="text-primary font-bold">SquashCode</span>
          </motion.h2>

          <motion.p
            custom={0.3}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-serif italic text-primary text-xl sm:text-2xl md:text-3xl font-light mb-6 tracking-wide"
          >
            digital growth & marketing company in kolkata
          </motion.p>

          <motion.p
            custom={0.4}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed font-normal tracking-wide"
          >
            We are architects of performance marketing. By combining analytical discipline with raw creative genius, we engineer high-converting digital funnels that exponentially grow brand revenue without wasting capital.
          </motion.p>
        </div>

        {/* CEO Sagar Spotlight Grid Card */}
        <div className="rounded-[2.5rem] bg-[#0A0A0A] border border-white/5 p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-3xl">
          {/* Fractal Noise Overlay on the card */}
          <div className="absolute inset-0 noise-overlay opacity-[0.05] pointer-events-none mix-blend-overlay" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEase }}
              className="lg:col-span-5 w-full flex justify-center"
            >
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-primary/20 shadow-2xl group hover:border-primary/50 transition-colors duration-500 bg-neutral-900">
                
                {/* Glow Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
                
                <img
                  src={SagarCEOPng}
                  alt="Sagar Mondal, CEO of SquashCode"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Corner Accent Labels */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-center bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10 select-none">
                  <div className="flex flex-col text-left">
                    <span className="text-white font-bold text-sm tracking-wide">Sagar Mondal</span>
                    <span className="text-[10px] text-primary font-medium tracking-wider uppercase">Founder & CEO</span>
                  </div>
                  <span className="text-white/30 text-xs font-serif italic uppercase">SquashCode</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Content & Inspired Quote */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col justify-center items-start text-left"
            >
              <span className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase mb-4 select-none">
                Leadership Statement
              </span>

              {/* Big Editorial Quote */}
              <blockquote className="text-white text-xl sm:text-2xl md:text-3xl font-light leading-snug tracking-wide mb-8 select-none">
                "Growth is <span className="font-serif italic text-primary">never a coincidence</span>. It is the raw convergence of forces working together—where cutting-edge analytical technology, robust creative designs, and <span className="font-serif italic text-primary">rigorous marketing pipelines</span> merge to scale ordinary ventures into undisputed industry leaders."
              </blockquote>

              {/* Signature Info */}
              <div className="flex flex-col">
                <span className="font-heading font-medium text-white text-lg tracking-wide uppercase">
                  Sagar Mondal
                </span>
                <span className="text-xs text-primary font-bold tracking-widest uppercase mt-1">
                  Founder & Chief Executive Officer, SquashCode
                </span>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
