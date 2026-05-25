import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export const Partner: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") return;
    setSubmitted(true);
    setEmail("");
  };

  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-black py-28 px-6 md:px-12 border-t border-white/5 relative z-10 select-none" id="inquiries">
      {/* Background Neon Pink Particle Blur */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Frost Glassmorphic Card Container */}
        <div className="rounded-[3rem] bg-[#070707]/90 backdrop-blur-xl border border-white/10 p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-[0_0_50px_rgba(200,56,90,0.1)] hover:shadow-[0_0_60px_rgba(200,56,90,0.18)] transition-all duration-500 text-center">
          
          {/* Subtle Decorative Grid Pattern in card background */}
          <div className="absolute inset-0 noise-overlay opacity-[0.05] pointer-events-none mix-blend-overlay" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col items-center max-w-2xl mx-auto relative z-10">
            <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 select-none">
              <Sparkles className="w-3 h-3" />
              Start Your Journey
            </span>
            <h2 className="font-heading font-medium tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
              Let’s Create Your <span className="font-serif italic text-primary lowercase">growth story</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-12 max-w-md mx-auto tracking-wide">
              We are the end-to-end growth marketing company prioritizing maximum client satisfaction. Let's discuss over a Cappuccino!
            </p>
          </div>

          {/* Form */}
          <div className="max-w-lg mx-auto relative z-10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full bg-black/40 border border-white/5 p-2 rounded-3xl sm:rounded-full">
                
                {/* Input Field */}
                <input
                  type="email"
                  required
                  placeholder="Enter Your Email Here..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-gray-500 text-sm sm:text-base font-medium tracking-wide outline-none px-6 py-4.5 focus:ring-0 transition-all duration-300"
                />

                {/* Submit Pill Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary rounded-2xl sm:rounded-full px-8 py-4 flex items-center justify-center gap-2.5 shrink-0 cursor-pointer hover:bg-primary/95 transition-all duration-300 font-bold text-black text-sm sm:text-base tracking-wider hover:scale-[1.03] active:scale-95 shadow-lg select-none"
                >
                  <span>Submit</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: customEase }}
                className="flex flex-col items-center justify-center gap-4 bg-primary/5 border border-primary/20 rounded-[2rem] p-8 sm:p-10 shadow-2xl"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-center">
                  <h4 className="text-white font-bold text-lg sm:text-xl mb-1 select-none">
                    Thank you!
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium">
                    We will be in touch shortly to book your free strategy call.
                  </p>
                </div>
              </motion.div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
