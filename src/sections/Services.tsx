import React from "react";
import { motion } from "framer-motion";
import { Mail, Search, TrendingUp, Palette, ArrowRight } from "lucide-react";

export const Services: React.FC = () => {
  const servicesList = [
    {
      id: "service-email",
      title: "Email Marketing",
      description: "We plan, build and deploy smart, profitable & scalable email marketing automation programs that increase your customer LTV.",
      icon: Mail,
      num: "01"
    },
    {
      id: "service-ppc",
      title: "PPC Advertisement",
      description: "46% of total clicks go to the top 3 ads on any search page. Is your business showing up there? If not, how much traffic are you missing out?",
      icon: TrendingUp,
      num: "02"
    },
    {
      id: "service-smm",
      title: "Social Media Marketing",
      description: "Do you want to make your customers fall in love with your creative designs? Let our graphic designers sprinkle their magic into your social media marketing.",
      icon: Palette,
      num: "03"
    },
    {
      id: "service-seo",
      title: "Search Engine Optimization",
      description: "Our team works hard to ensure you get insightful data reporting and a tailored SEO campaign and defend your position in the SERP against algorithmic updates.",
      icon: Search,
      num: "04"
    }
  ];

  const customEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: customEase
      }
    }
  };

  return (
    <section className="bg-black py-24 px-6 md:px-12 border-t border-white/5 relative z-10 select-none" id="services">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-left max-w-2xl">
          <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
            Capabilities
          </span>
          <h2 className="font-heading font-medium tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
            Custom growth funnels, engineered for <span className="font-serif italic text-primary">conversion</span>
          </h2>
        </div>

        {/* 4-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                variants={cardVariants}
                className="rounded-2xl border border-white/5 bg-[#0B0B0B] p-6 sm:p-8 flex flex-col justify-between group shadow-2xl h-[380px] sm:h-[400px] transition-all duration-300 hover:border-primary/20 hover:bg-[#111111]"
              >
                <div className="flex flex-col gap-6">
                  {/* Card Header Icon & Number */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border border-white/10 bg-black text-primary group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-5.5 h-5.5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-primary/30 font-serif italic text-lg sm:text-xl font-bold select-none">
                      {service.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-3">
                    <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide select-none">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-normal leading-relaxed text-justify">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Learn More link */}
                <a
                  href="#inquiries"
                  className="flex items-center gap-1.5 text-primary text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors duration-300 hover:text-white self-start"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
