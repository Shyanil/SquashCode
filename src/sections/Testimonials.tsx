import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      id: "rev-peter",
      name: "Peter Juhasz",
      role: "Director, P&A Group",
      content: "I’m really impressed with the result after using their Growth Hacking strategies! I recommended them with their excellent lead generation & social media marketing skills.",
      initials: "PJ"
    },
    {
      id: "rev-priyanka",
      name: "Priyanka Trivedi",
      role: "CEO, Kidstree ltd",
      content: "These guys are amazing. They've helped us to grow our business and the biggest issue we appear to run over now is having too much orders - which is an ideal issue to have.",
      initials: "PT"
    },
    {
      id: "rev-mohit",
      name: "Mohit Suri",
      role: "Sales Growth Leader",
      content: "Very professional and result oriented growth marketing company in Kolkata. They have been very transparent on their commitments & have always over-delivered.",
      initials: "MS"
    }
  ];

  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-black py-24 px-6 md:px-12 border-t border-white/5 relative z-10 select-none" id="testimonials">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
            Endorsements
          </span>
          <h2 className="font-heading font-medium tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
            What Our <span className="font-serif italic text-primary">Client Says</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto tracking-wide">
            Bragging is not our cup of tea, but delivering quality and customer satisfaction is. Have a look at what our clients have to say about us.
          </p>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full items-stretch">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              id={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEase, delay: index * 0.1 }}
              className="rounded-2xl border border-white/5 bg-[#0B0B0B] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative group hover:border-primary/20 hover:bg-[#111111] transition-all duration-300"
            >
              {/* Quote Icon Top Right */}
              <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors duration-300 pointer-events-none">
                <Quote className="w-8 h-8 rotate-180" />
              </div>

              {/* Review Content */}
              <div className="flex flex-col gap-6 select-none text-left">
                {/* Visual Avatar initials node */}
                <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold flex items-center justify-center select-none shadow-md">
                  {rev.initials}
                </div>

                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed italic text-justify select-none font-normal">
                  "{rev.content}"
                </p>
              </div>

              {/* Review Author Info */}
              <div className="border-t border-white/5 pt-6 mt-6 flex flex-col items-start select-none">
                <span className="font-heading font-medium text-white text-sm sm:text-base tracking-wide uppercase">
                  {rev.name}
                </span>
                <span className="text-[10px] sm:text-xs text-primary font-bold tracking-wider uppercase mt-1">
                  {rev.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
