import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkle,
  Layers,
  Type,
  Aperture,
  Globe,
  Camera,
  Brush,
  Box,
  Wand2,
  Palette,
  PenTool
} from "lucide-react";

export const CreativeProfile: React.FC = () => {
  const careerTimeline = [
    { year: "2023-Now", role: "Freelance Growth Director", company: "Solo Lab" },
    { year: "2020-2023", role: "Head of Brand Experience", company: "Rove Studio" },
    { year: "2017-2020", role: "Senior Performance Architect", company: "Ember Works" }
  ];

  const marqueeRow1 = [
    { icon: Palette, name: "Palette" },
    { icon: Layers, name: "Layers" },
    { icon: PenTool, name: "PenTool" },
    { icon: Type, name: "Type" },
    { icon: Aperture, name: "Aperture" },
    { icon: Globe, name: "Globe" },
    { icon: Palette, name: "Palette" },
    { icon: Layers, name: "Layers" }
  ];

  const marqueeRow2 = [
    { icon: Camera, name: "Camera" },
    { icon: Brush, name: "Brush" },
    { icon: Box, name: "Box" },
    { icon: Wand2, name: "Wand2" },
    { icon: Camera, name: "Camera" },
    { icon: Brush, name: "Brush" },
    { icon: Box, name: "Box" },
    { icon: Wand2, name: "Wand2" }
  ];

  const duplicatedRow1 = [...marqueeRow1, ...marqueeRow1];
  const duplicatedRow2 = [...marqueeRow2, ...marqueeRow2];

  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-[#0a0a0a] text-white font-sans antialiased w-full px-4 sm:px-6 md:px-10 lg:px-14 py-24 lg:h-screen flex flex-col justify-between select-none relative z-10 border-t border-white/5" id="creative-profile">
      
      {/* Top Header Row */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 w-full">
        
        {/* Left Side Header Description */}
        <div className="max-w-3xl flex flex-col items-start gap-4 text-left">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-normal tracking-tight text-white select-none">
            Hi, I'm <span className="font-serif italic text-primary">Sagar Mondal</span>!
          </h2>
          <p className="text-sm md:text-[15px] leading-[1.6] text-white/60 max-w-2xl select-none">
            A Kolkata-based independent creator shaping sharp visual systems, web-ready products, and story-first campaigns. With a decade of craft behind me, I help ideas move with focus and intention.
          </p>
        </div>

        {/* Right Side Header Pill Button */}
        <a
          href="#inquiries"
          className="liquid-glass rounded-full px-6 py-3 shrink-0 text-xs sm:text-sm font-bold tracking-wider uppercase text-white hover:bg-white/5 transition-all duration-300 select-none flex items-center gap-2 hover:gap-3"
        >
          <span>Let's Team Up Today</span>
          <ArrowUpRight className="w-4 h-4 text-primary" strokeWidth={1.5} />
        </a>

      </div>

      {/* Grid Container (3 cols on lg, 2 on md, 1 on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 flex-grow w-full items-stretch">
        
        {/* COLUMN 1 - Career History Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase }}
          className="relative overflow-hidden rounded-2xl bg-black border border-white/5 shadow-2xl flex flex-col justify-between p-6 md:p-8 min-h-[360px] lg:h-full group hover:border-primary/20 transition-all duration-300"
        >
          {/* Background Loop Video */}
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-[0.25] group-hover:opacity-[0.35] transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-10 pointer-events-none" />

          {/* Top Label */}
          <div className="z-20 relative flex items-center justify-center gap-1.5 self-center">
            <Sparkle className="h-3 w-3 text-primary" strokeWidth={1.5} />
            <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-bold select-none">
              BACKGROUND
            </span>
            <Sparkle className="h-3 w-3 text-primary" strokeWidth={1.5} />
          </div>

          {/* Bottom Career Timeline */}
          <div className="z-20 relative flex flex-col gap-4 mt-auto w-full text-left">
            {careerTimeline.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[auto_auto_1fr_auto] gap-x-3 items-center text-xs sm:text-sm text-white/80"
              >
                {/* Year */}
                <span className="font-heading font-medium tracking-wide text-primary">
                  {item.year}
                </span>
                
                {/* Separator Node */}
                <Sparkle className="h-3 w-3 text-white/30 shrink-0" strokeWidth={1.5} />

                {/* Role */}
                <span className="font-semibold text-white truncate max-w-[140px] sm:max-w-none">
                  {item.role}
                </span>

                {/* Company */}
                <span className="text-white/45 italic font-light justify-self-end">
                  {item.company}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* COLUMN 2 - Client Voice & Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase, delay: 0.15 }}
          className="grid grid-rows-[auto_1fr] gap-4 md:gap-5 lg:h-full"
        >
          
          {/* Top Card: Client Voice */}
          <div className="rounded-2xl bg-[#1b080c] p-6 border border-primary/10 relative overflow-hidden noise-overlay shadow-2xl flex flex-col gap-5 hover:border-primary/30 transition-all duration-300 text-left">
            {/* Top Label */}
            <div className="flex items-center justify-start gap-1.5 relative z-10 select-none">
              <Sparkle className="h-3 w-3 text-primary" strokeWidth={1.5} />
              <span className="uppercase tracking-[0.22em] text-[10px] text-primary font-bold">
                CLIENT VOICE
              </span>
              <Sparkle className="h-3 w-3 text-primary" strokeWidth={1.5} />
            </div>

            {/* Quote Block */}
            <p className="text-[13px] sm:text-[13.5px] leading-[1.6] text-white/85 italic relative z-10 select-none font-normal text-justify">
              "Sagar Mondal and SquashCode reshaped our image with a degree of finesse and vision that surpassed what we'd hoped for. The process felt graceful, and the outcomes speak for themselves."
            </p>

            {/* Attribution footer */}
            <span className="text-[11px] text-white/60 tracking-wide mt-2 block relative z-10 select-none uppercase font-semibold">
              <strong className="text-white">Elena Brooks</strong>, Creative Director — Halcyon
            </span>
          </div>

          {/* Bottom Card: stats */}
          <div className="rounded-2xl bg-black border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center p-6 min-h-[180px] lg:h-full group hover:border-primary/20 transition-all duration-300">
            {/* Video Background */}
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-[0.2]"
            />
            <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

            <div className="z-20 relative flex flex-col items-center select-none text-center">
              {/* Huge Stat */}
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-heading font-light tracking-tight text-primary drop-shadow-[0_4px_16px_rgba(200,56,90,0.2)]">
                10M+
              </span>
              <span className="text-white/85 text-xs sm:text-sm font-medium uppercase tracking-widest mt-2">
                Revenue Raised for Startups
              </span>
            </div>
          </div>

        </motion.div>

        {/* COLUMN 3 - Stack & Reach Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: customEase, delay: 0.3 }}
          className="grid grid-rows-[1fr_auto] gap-4 md:gap-5 lg:h-full"
        >
          
          {/* Top Card: Daily Software Marquees */}
          <div className="rounded-2xl bg-black border border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between p-6 lg:h-full group hover:border-primary/20 transition-all duration-300 min-h-[220px]">
            {/* Background Loop Video */}
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-[0.18]"
            />

            {/* Label */}
            <div className="z-20 relative flex items-center justify-center gap-1.5 self-center">
              <Sparkle className="h-3 w-3 text-primary" strokeWidth={1.5} />
              <span className="uppercase tracking-[0.22em] text-[11px] text-white/70 font-bold select-none">
                DAILY SOFTWARE
              </span>
              <Sparkle className="h-3 w-3 text-primary" strokeWidth={1.5} />
            </div>

            {/* Marquees Content */}
            <div className="z-20 relative w-full flex flex-col gap-3 my-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              
              {/* Row 1: Left scrolling marquee */}
              <div className="flex w-max gap-3 animate-marquee-left">
                {duplicatedRow1.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={`r1-${idx}`}
                      className="liquid-glass h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center shrink-0 border border-white/5 text-white/80 hover:text-primary transition-colors duration-300"
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                    </div>
                  );
                })}
              </div>

              {/* Row 2: Right scrolling marquee */}
              <div className="flex w-max gap-3 animate-marquee-right">
                {duplicatedRow2.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={`r2-${idx}`}
                      className="liquid-glass h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center shrink-0 border border-white/5 text-white/80 hover:text-primary transition-colors duration-300"
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Bottom Card: Reach Me */}
          <div className="rounded-2xl bg-[#1b080c] p-6 border border-primary/10 relative overflow-hidden noise-overlay shadow-2xl flex items-center justify-between group hover:border-primary/30 transition-all duration-300 min-h-[110px] text-left">
            <div className="flex flex-col justify-center select-none relative z-10">
              <span className="uppercase tracking-[0.22em] text-[10px] text-primary font-bold mb-3 block">
                REACH ME
              </span>
              <span className="text-white font-bold text-sm sm:text-base leading-none block mb-1">
                contact@squashcode.com
              </span>
              <span className="text-white/60 text-xs sm:text-sm leading-none block font-light mt-1">
                +91 7044 242 693
              </span>
            </div>

            {/* Top-Right ArrowUpRight pill icon button */}
            <a
              href="#inquiries"
              className="w-10 h-10 rounded-full border border-white/10 bg-black/60 text-white flex items-center justify-center shrink-0 shadow-lg relative z-20 hover:bg-primary hover:text-black transition-all duration-300"
            >
              <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>

        </motion.div>

      </div>

    </section>
  );
};
