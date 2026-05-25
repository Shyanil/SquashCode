import React from "react";
import { motion } from "framer-motion";

export const TrustedBy: React.FC = () => {
  const brands = [
    { name: "P&A Group", scale: 1 },
    { name: "Kidstree", scale: 1.05 },
    { name: "Parallax Cinema", scale: 0.95 },
    { name: "Noir Studio", scale: 1 },
    { name: "Celtic Wealth", scale: 1.05 }
  ];

  return (
    <section className="bg-black py-10 border-b border-white/5 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Label */}
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-gray-500 block shrink-0 select-none">
          Trusted By Visionaries At:
        </span>

        {/* Logos Flex Container */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:justify-end w-full">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-white/40 text-sm sm:text-base md:text-lg font-heading font-medium uppercase tracking-widest hover:text-primary transition-colors duration-300 select-none cursor-default"
              style={{ scale: brand.scale }}
            >
              {brand.name}
              <span className="text-primary font-sans font-bold ml-1">*</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
