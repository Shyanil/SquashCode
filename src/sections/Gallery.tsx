import React from "react";
import { motion } from "framer-motion";
import DashboardPng from "../assets/marketing_lab_dashboard.png";
import CreativePng from "../assets/creative_brand_visuals.png";
import { Sparkles, ArrowRight } from "lucide-react";

export const Gallery: React.FC = () => {
  const showcaseItems = [
    {
      id: "showcase-dashboard",
      title: "Performance Campaign Analytics Lab",
      category: "Predictive Analytics",
      description: "Harnessing 3D dashboard projections to map conversion tracks, audience engagement indices, and algorithmic ROI forecasting in real-time.",
      image: DashboardPng
    },
    {
      id: "showcase-creative",
      title: "Visual Brand Aesthetics Canvas",
      category: "Creative Automation",
      description: "Fusing premium graphic design elements with digital campaign assets to deliver localized, high-converting social designs.",
      image: CreativePng
    }
  ];

  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-black py-24 px-6 md:px-12 border-t border-white/5 relative z-10 select-none" id="our-lab">
      {/* Background Glow */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-left max-w-3xl flex flex-col gap-4">
          <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase flex items-center gap-1.5 select-none">
            <Sparkles className="w-3.5 h-3.5" />
            AI Campaign Laboratory
          </span>
          <h2 className="font-heading font-medium tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            Where predictive metrics meet <span className="font-serif italic text-primary">raw creative aesthetics</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed tracking-wide">
            We deploy sophisticated design modeling and data funnels to pre-test visual engagement, analyze user paths, and curate viral digital layouts before they are launched.
          </p>
        </div>

        {/* 2-Column Split Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 w-full items-stretch">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEase, delay: index * 0.15 }}
              className="rounded-[2rem] bg-[#0A0A0A] border border-white/5 overflow-hidden flex flex-col justify-between shadow-3xl relative group hover:border-primary/20 transition-all duration-300"
            >
              {/* Card Image Wrapper */}
              <div className="w-full aspect-[16/10] overflow-hidden relative border-b border-white/5 bg-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Category Floating Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="text-primary text-[10px] font-bold tracking-widest uppercase bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 select-none">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Content block */}
              <div className="p-8 flex flex-col justify-between flex-grow text-left">
                <div className="flex flex-col gap-3">
                  <h3 className="text-white font-bold text-lg sm:text-xl md:text-2xl leading-snug group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-justify">
                    {item.description}
                  </p>
                </div>

                {/* rotated CTA Link */}
                <a
                  href="#inquiries"
                  className="flex items-center gap-1.5 text-primary text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors duration-300 hover:text-white self-start pt-6 mt-auto"
                >
                  <span>Launch Campaign</span>
                  <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
