import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "../components/WordsPullUp";

export const Hero: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const navItems = [
    { label: "Our story", href: "#our-story" },
    { label: "Collective", href: "#features" },
    { label: "Workshops", href: "#workshops" },
    { label: "Programs", href: "#programs" },
    { label: "Inquiries", href: "#inquiries" }
  ];

  const customEase = [0.16, 1, 0.3, 1] as const;

  const fadeUpVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <section className="h-screen w-full p-4 md:p-6 relative select-none bg-black">
      {/* Inset container card */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2.2rem] overflow-hidden flex flex-col justify-between border border-white/5 shadow-2xl">
        
        {/* Background Video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Noise Overlay */}
        <div className="absolute inset-0 noise-overlay mix-blend-overlay pointer-events-none z-10 opacity-[0.7]" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none z-10" />

        {/* Hanging Navbar Pill */}
        <header className="absolute top-0 left-0 right-0 z-30 w-full flex justify-center pointer-events-none">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 shadow-2xl flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 pointer-events-auto border-b border-x border-white/5">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  color: hoveredIdx === index ? "#C8385A" : "rgba(255, 255, 255, 0.8)",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="text-[10px] sm:text-xs md:text-sm tracking-widest uppercase font-medium select-none"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        {/* Bottom Hero Content Grid */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-12 lg:p-16 z-20 w-full">
          <div className="grid grid-cols-12 gap-y-6 md:gap-8 items-end w-full">
            
            {/* Giant Title Left Column */}
            <div className="col-span-12 lg:col-span-8 overflow-visible flex flex-col items-start leading-[0.85]">
              <WordsPullUp
                text="SquashCode"
                showAsterisk={true}
                className="font-heading font-medium tracking-[-0.07em] text-white select-none text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7.5vw] 2xl:text-[7vw] leading-[0.85]"
              />
            </div>

            {/* Description & CTA Right Column */}
            <div className="col-span-12 lg:col-span-4 flex flex-col items-start gap-6 sm:gap-8 max-w-sm sm:max-w-md md:max-w-none">
              
              {/* Description paragraph */}
              <motion.p
                custom={0.5}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="text-primary/70 text-xs sm:text-sm md:text-base font-normal leading-[1.2] tracking-wide select-none"
              >
                SquashCode is a worldwide network of visual artists, filmmakers and storytellers bound not by place, status or labels but by passion and hunger to unlock potential through our unique perspectives.
              </motion.p>

              {/* Pill Button "Join the lab" */}
              <motion.a
                href="#inquiries"
                custom={0.7}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="bg-primary rounded-full pl-6 pr-2 py-2 flex items-center justify-between gap-6 group cursor-pointer hover:bg-primary/95 transition-all duration-300 shadow-xl border border-primary/10 select-none sm:py-2.5 hover:gap-8"
              >
                <span className="text-black font-semibold text-sm sm:text-base tracking-wider">
                  Join the lab
                </span>
                
                {/* Arrow Right Circle */}
                <div className="rounded-full bg-black w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-45 shrink-0 shadow-lg">
                  <ArrowRight className="text-[#C8385A] w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
              </motion.a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
