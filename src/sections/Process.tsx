import React from "react";
import { motion } from "framer-motion";
import { Eye, UserPlus, Heart, Sparkles } from "lucide-react";

export const Process: React.FC = () => {
  const stepsList = [
    {
      id: "proc-attract",
      num: "01",
      icon: Eye,
      title: "Attracting Users",
      subLabel: "plan and design",
      description: "We create buyer personas, identify early adopters, and target them with the right channels."
    },
    {
      id: "proc-acquire",
      num: "02",
      icon: UserPlus,
      title: "Acquiring Customers",
      subLabel: "development and testing",
      description: "By using a variety of hacks across the marketing funnel, upGrowth converts visitors into leads."
    },
    {
      id: "proc-retain",
      num: "03",
      icon: Heart,
      title: "Retaining Customers",
      subLabel: "delivery and marketing",
      description: "Our intent is to optimise customer experience by enhancing user engagement and driving conversations."
    }
  ];

  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-black py-24 px-6 md:px-12 border-t border-white/5 relative z-10 select-none" id="our-process">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
            Our Method
          </span>
          <h2 className="font-heading font-medium tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
            Take a <span className="font-serif italic text-primary">Sneak-Peek</span> in Our Process
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto tracking-wide">
            For you to trust us with your business, it’s important that you know how we work on every single growth marketing project that we execute.
          </p>
        </div>

        {/* 3-Step Funnel Road-map Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-stretch w-full relative">
          
          {/* Decorative Pink Connecting Line (Only visible on large viewports) */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 z-0 pointer-events-none" />

          {stepsList.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: customEase, delay: index * 0.15 }}
                className="flex flex-col items-center text-center p-6 bg-[#080808] border border-white/5 rounded-3xl relative z-10 shadow-2xl group hover:border-primary/20 transition-all duration-300"
              >
                {/* Number Badge & Circle Icon node */}
                <div className="relative mb-6">
                  {/* Floating Step Number */}
                  <span className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold flex items-center justify-center select-none shadow-md">
                    {step.num}
                  </span>

                  <div className="w-22 h-22 rounded-full border border-white/5 bg-black text-primary flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:border-primary/30 relative">
                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-full border border-primary/0 group-hover:border-primary/20 group-hover:scale-110 transition-all duration-500" />
                    <IconComponent className="w-8 h-8" />
                  </div>
                </div>

                {/* Sub-label Category Tag */}
                <span className="flex items-center gap-1 text-primary text-[10px] font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                  <Sparkles className="w-3 h-3" />
                  {step.subLabel}
                </span>

                {/* Title & Description */}
                <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide mb-3 select-none">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-normal leading-relaxed text-justify px-2">
                  {step.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
