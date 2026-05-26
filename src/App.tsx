import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Search,
  Palette,
  Eye,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
  Target,
  LineChart,
  HeartHandshake,
  MapPin
} from "lucide-react";

// Reusable SVG social/brand icons for the bottom bar matching Lucide styling
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// 1. TypingMessages Component
const TYPING_MESSAGES = ["Reach?", "Revenue!", "Scale.", "SquashCode."];

export function TypingMessages() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (isWaiting) return;

    const currentMsg = TYPING_MESSAGES[msgIndex];

    // Case 1: Finished typing
    if (!isDeleting && subIndex === currentMsg.length) {
      setIsWaiting(true);
      const timer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timer);
    }

    // Case 2: Finished deleting
    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setMsgIndex((prev) => (prev + 1) % TYPING_MESSAGES.length);
      return;
    }

    // Case 3: Step
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, msgIndex, isWaiting]);

  return (
    <div className="absolute left-[48.5%] md:left-[47.5%] lg:left-[48.5%] -translate-x-1/2 bottom-[32%] z-30 w-[110px] sm:w-[130px] flex justify-start text-left pointer-events-none select-none">
      <div className="font-nokia text-[#2A3616] text-[10px] sm:text-[14px] leading-tight break-words min-h-[1.5em] flex items-center">
        <span>{TYPING_MESSAGES[msgIndex].substring(0, subIndex)}</span>
        <motion.span
          className="inline-block w-1.5 h-3 bg-[#2A3616] ml-1 align-middle"
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
}

// 2. Navbar Component
export function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between px-6 py-3.5 backdrop-blur-md rounded-full bg-white/80 border border-black/10 shadow-sm">
        {/* Logo */}
        <a href="#" className="font-sans text-[20px] sm:text-[22px] font-extrabold tracking-tight text-neutral-900 select-none hover:opacity-80 transition-opacity flex items-center gap-1">
          SquashCode<span className="text-[#0871E7]">.</span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Services", href: "#services" },
            { label: "About Us", href: "#about" },
            { label: "Process", href: "#process" },
            { label: "Blog", href: "#blog" }
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative group font-sans text-[14px] font-semibold text-neutral-700 hover:text-neutral-900 transition-colors duration-300 py-1"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0871E7] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a href="tel:+917044242693" className="relative group px-5 py-2.5 bg-[#0871E7] hover:bg-[#0761C6] text-white font-sans text-[13px] sm:text-[14px] font-semibold rounded-full shadow-[inset_0_-4px_4px_rgba(255,255,255,0.3)] outline-1 outline-[#0871E7] -outline-offset-1 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-1.5">
          <span className="absolute w-[80%] h-4 left-[10%] top-[1px] bg-gradient-to-b from-[#DEF0FC] to-transparent rounded-[12px] transition-transform duration-300 origin-center group-hover:scale-x-105" />
          <span className="relative z-10 font-sans">Book Strategy Call</span>
        </a>
      </nav>
    </div>
  );
}

// 3. Hero Component (Polished spacing & sizing to guarantee zero overlapping with background device)
export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-[#F3F4ED] pt-28 sm:pt-32 flex flex-col justify-start items-center overflow-hidden">
      {/* Video Background - Sticks perfectly to top with zero offset gaps */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_054418_a6d194f0-ac86-4df9-abe5-ded73e596d7c.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlaid empty div for a slight tint */}
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />
      </div>

      {/* Typing Messages overlays the phone screen in the background video */}
      <TypingMessages />

      {/* Hero Text Container - Very compact to ensure phone elements stay fully visible */}
      <div className="relative z-20 text-center px-6 max-w-3xl flex flex-col items-center mt-2">
        {/* Main Headline - Refined size to fit perfectly on 2 lines on desktop */}
        <motion.h1
          className="font-instrument text-[28px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[0.95] tracking-tight text-neutral-900 drop-shadow-sm select-none"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Good Marketing Gives You Reach. <br />
          <span className="text-[#0871E7]">Great Marketing Grows Your Revenue.</span>
        </motion.h1>

        {/* Hero Interactive CTAs - Set right below headline with zero description gaps */}
        <motion.div
          className="flex flex-wrap gap-4 mt-6 justify-center pointer-events-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="tel:+917044242693"
            className="relative group px-6 py-3 bg-[#0871E7] hover:bg-[#0761C6] text-white font-sans text-xs sm:text-sm font-semibold rounded-full shadow-lg active:scale-95 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
          >
            <span className="absolute w-[80%] h-4 left-[10%] top-[1px] bg-gradient-to-b from-[#DEF0FC] to-transparent rounded-[12px] transition-transform duration-300 origin-center group-hover:scale-x-105" />
            <span className="relative z-10">Book A Free Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 relative z-10" />
          </a>
          <a
            href="#services"
            className="px-6 py-3 border border-neutral-300 bg-white/50 backdrop-blur-sm hover:bg-white/80 text-neutral-800 font-sans text-xs sm:text-sm font-semibold rounded-full active:scale-95 transition-all duration-300 flex items-center gap-1 cursor-pointer"
          >
            <span>Explore Services</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// 4. Services Section (Premium Capacities Grid)
export function Services() {
  const items = [
    {
      title: "Email Marketing",
      desc: "We plan, build and deploy smart, profitable & scalable email marketing automation programs that increase your customer LTV.",
      icon: Mail,
      accent: "from-[#0871E7]/5 to-[#0871E7]/1",
      border: "border-[#0871E7]/10"
    },
    {
      title: "PPC Advertisement",
      desc: "46% of total clicks go to the top 3 ads on any search page. Is your business showing up there? If not, how much traffic are you missing out?",
      icon: Search,
      accent: "from-amber-500/5 to-amber-500/1",
      border: "border-amber-500/15"
    },
    {
      title: "Social Media Marketing",
      desc: "Do you want to make your customers fall in love with your creative designs? Let our graphic designers sprinkle their magic into your social media marketing.",
      icon: Palette,
      accent: "from-rose-500/5 to-rose-500/1",
      border: "border-rose-500/15"
    },
    {
      title: "Search Engine Optimization",
      desc: "Our team works hard to ensure you get insightful data reporting and a tailored SEO campaign and defend your position in the SERP against algorithmic updates.",
      icon: Eye,
      accent: "from-emerald-500/5 to-emerald-500/1",
      border: "border-emerald-500/15"
    }
  ];

  return (
    <section id="services" className="w-full max-w-7xl px-4 sm:px-6 md:px-8 py-20 flex flex-col items-center text-center">
      <div className="max-w-2xl mb-14 text-center">
        <span className="uppercase tracking-[0.2em] text-[11px] text-[#0871E7] font-bold select-none mb-3 block">What We Do</span>
        <h2 className="font-instrument text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-none mb-4">
          Capabilities built to grow your business
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
        {items.map((srv, idx) => {
          const IconComp = srv.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-3xl p-8 bg-white/60 border border-neutral-200/60 shadow-xs hover:shadow-xl hover:border-neutral-300 transition-all duration-300 relative overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${srv.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex flex-col gap-5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white border ${srv.border} text-neutral-900 shadow-xs`}>
                  <IconComp className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-950 mb-2">{srv.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600 font-light">{srv.desc}</p>
                  </div>
                  <div className="rounded-full bg-neutral-100 p-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-4 h-4 text-[#0871E7]" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// 5. About Section
export function About() {
  return (
    <section id="about" className="w-full max-w-7xl px-4 sm:px-6 md:px-8 py-20 bg-white/40 border border-neutral-200/50 rounded-[36px] backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-12 text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#0871E7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="flex-1 max-w-2xl">
        <span className="uppercase tracking-[0.2em] text-[11px] text-[#0871E7] font-bold select-none mb-3 block">SquashCode Studio</span>
        <h2 className="font-instrument text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-none mb-6">
          Good Marketing Gives You Reach. <br />
          <span className="text-[#0871E7]">Great Marketing Grows Your Revenue.</span>
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-neutral-600 font-light mb-8">
          Welcome to SquashCode, the premier digital marketing studio in Kolkata. We plan, build, and optimize scalable strategies designed to skyrocket your conversion rates, generate qualified leads, and grow LTV without burning a hole in your pocket.
        </p>
        <a href="tel:+917044242693" className="relative group px-6 py-3 bg-neutral-900 hover:bg-neutral-950 text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full shadow-lg active:scale-95 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer">
          <span>Book A Free Strategy Call</span>
          <ArrowRight className="w-4 h-4 text-white" />
        </a>
      </div>
      <div className="flex-1 w-full max-w-md grid grid-cols-2 gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl p-6 bg-white border border-neutral-200/60 shadow-xs text-center flex flex-col justify-center items-center gap-2"
        >
          <span className="text-4xl sm:text-5xl font-heading font-light text-[#0871E7]">124+</span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Projects Completed</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl p-6 bg-white border border-neutral-200/60 shadow-xs text-center flex flex-col justify-center items-center gap-2"
        >
          <span className="text-4xl sm:text-5xl font-heading font-light text-[#0871E7]">14+</span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Industry Experts</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl p-6 bg-white border border-neutral-200/60 shadow-xs text-center flex flex-col justify-center items-center gap-2"
        >
          <span className="text-4xl sm:text-5xl font-heading font-light text-[#0871E7]">05+</span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Years Experience</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-2xl p-6 bg-white border border-neutral-200/60 shadow-xs text-center flex flex-col justify-center items-center gap-2"
        >
          <span className="text-4xl sm:text-5xl font-heading font-light text-[#0871E7]">03+</span>
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Prestigious Awards</span>
        </motion.div>
      </div>
    </section>
  );
}

// 6. Process Section (Funnel Timeline)
export function Process() {
  const steps = [
    {
      title: "Attracting Users",
      desc: "We create buyer personas, identify early adopters, and target them with the right channels.",
      label: "STEP 01",
      icon: Target,
      accent: "bg-blue-500/10 text-blue-600 border-blue-500/10"
    },
    {
      title: "Acquiring Customers",
      desc: "By using a variety of hacks across the marketing funnel, SquashCode converts visitors into leads.",
      label: "STEP 02",
      icon: LineChart,
      accent: "bg-amber-500/10 text-amber-600 border-amber-500/10"
    },
    {
      title: "Retaining Customers",
      desc: "Our intent is to optimise customer experience by enhancing user engagement and driving conversations.",
      label: "STEP 03",
      icon: HeartHandshake,
      accent: "bg-rose-500/10 text-rose-600 border-rose-500/10"
    }
  ];

  return (
    <section id="process" className="w-full max-w-7xl px-4 sm:px-6 md:px-8 py-20 flex flex-col items-center text-center">
      <div className="max-w-2xl mb-14 text-center">
        <span className="uppercase tracking-[0.2em] text-[11px] text-[#0871E7] font-bold select-none mb-3 block">Our Funnel</span>
        <h2 className="font-instrument text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-none mb-4">
          Take a Sneak-Peek in Our Process
        </h2>
        <p className="text-sm text-neutral-600 font-light max-w-xl mx-auto mt-4">
          For you to trust us with your business, it’s important that you know how we work on every single growth marketing project.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left relative">
        {steps.map((st, idx) => {
          const IconComp = st.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-8 bg-white/50 border border-neutral-200/60 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between min-h-[260px] group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${st.accent}`}>
                  <IconComp className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0871E7]">
                    {st.label}
                  </span>
                  {idx < 2 && <ChevronRight className="hidden md:block w-4 h-4 text-neutral-300 group-hover:translate-x-1 transition-transform" />}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-neutral-950 mb-2">{st.title}</h3>
                <p className="text-xs leading-relaxed text-neutral-600 font-light">{st.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// Testimonials Dataset with defined marketing quotes and metadata
const TESTIMONIALS_DATA = [
  {
    quote: "SquashCode has reshaped our digital image with a level of growth hacking, insight, and marketing execution that far exceeded our original revenue goals. Our organic search results and paid conversion programs have never run better.",
    author: "Elena Brooks",
    role: "Creative Director — Halcyon",
    verified: "VERIFIED COLLABORATOR",
    stars: 5
  },
  {
    quote: "Delivering results is SquashCode's strength. Our social media engagement grew by 300% within three months of partnering with their graphic designers and digital marketers. Highly recommended for growth-focused brands.",
    author: "Rajesh Mehta",
    role: "Founder — Kidstree",
    verified: "PARTNER BRAND",
    stars: 5
  },
  {
    quote: "Their email marketing automation flows turned our cold subscriber list into active customers, increasing our customer LTV exponentially. SquashCode delivers pure value and zero noise.",
    author: "Sarah Jenkins",
    role: "Marketing Director — Celtic Wealth",
    verified: "CLIENT PARTNER",
    stars: 5
  }
];

// 7. Interactive Testimonials Section (Defined sliding logic, 100% visible high contrast dark text)
export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const activeTest = TESTIMONIALS_DATA[activeIndex];

  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 md:px-8 py-20 flex flex-col items-center text-center">
      <div className="max-w-2xl mb-14 text-center">
        <span className="uppercase tracking-[0.2em] text-[11px] text-[#0871E7] font-bold select-none mb-3 block">Testimonials</span>
        <h2 className="font-instrument text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-none mb-4">
          What Our Clients Say
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 font-normal max-w-xl mx-auto mt-4 leading-relaxed">
          Bragging is not our cup of tea, but delivering quality and customer satisfaction is. Have a look what our clients have to say about us.
        </p>
      </div>

      {/* Main Interactive Testimonial Slider Container */}
      <div className="w-full relative max-w-4xl flex flex-col items-center">
        
        {/* Navigation Buttons floating on the left/right edges */}
        <div className="absolute inset-y-0 -left-4 sm:-left-16 flex items-center z-20">
          <button
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-neutral-200 shadow-md hover:bg-neutral-50 active:scale-95 transition-all duration-200 flex items-center justify-center text-neutral-700 cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
        </div>

        <div className="absolute inset-y-0 -right-4 sm:-right-16 flex items-center z-20">
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-neutral-200 shadow-md hover:bg-neutral-50 active:scale-95 transition-all duration-200 flex items-center justify-center text-neutral-700 cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Card Component - Solid White layout ensuring perfect high contrast dark text visibility */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-[32px] p-8 md:p-12 text-left relative overflow-hidden bg-white border border-neutral-200 shadow-xl flex flex-col gap-6"
        >
          {/* Subtle warm accent radial aura */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0871E7]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-1 text-[#0871E7] relative z-10">
            {[...Array(activeTest.stars)].map((_, i) => (
              <Sparkles key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          {/* Testimonial Quote - Deep rich text 100% visible and highly legible */}
          <p className="text-lg md:text-[21px] leading-relaxed text-neutral-800 font-sans font-light relative z-10 antialiased italic">
            "{activeTest.quote}"
          </p>

          <div className="border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10 text-neutral-500 text-xs font-semibold">
            <div className="flex flex-col gap-0.5">
              <span className="text-neutral-900 text-sm font-extrabold">{activeTest.author}</span>
              <span className="text-neutral-500 font-light">{activeTest.role}</span>
            </div>
            <span className="uppercase tracking-widest text-[#0871E7] font-extrabold text-[10px] bg-blue-500/10 px-3 py-1 rounded-full">
              {activeTest.verified}
            </span>
          </div>

        </motion.div>

        {/* Dynamic bottom indicator dots */}
        <div className="flex gap-2.5 mt-8 z-10">
          {TESTIMONIALS_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === i ? "bg-[#0871E7] w-6" : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// 8. Blog Section (Latest Articles Grid)
export function Blog() {
  const posts = [
    {
      title: "Ultimate Email Marketing Guide for Real Estate Developers 2021",
      desc: "How Real Estate Developers can use Email marketing campaigns to convert viewers into hot property buyers.",
      tag: "email marketing",
      date: "Oct 12, 2021"
    },
    {
      title: "Top 8 social media marketing hacks to make your gym business profitable in 2021!",
      desc: "Use Social Media Marketing to grow your brand footprint, engage members, and drive memberships.",
      tag: "gym business",
      date: "Sep 28, 2021"
    },
    {
      title: "10 Easy conversion rate optimization Hacks to Double Your Conversion Rate in 2021",
      desc: "Conversion rate optimization CRO is one of the most wanted practices in today’s day and age of digital marketing...",
      tag: "optimize conversion",
      date: "Aug 15, 2021"
    }
  ];

  return (
    <section id="blog" className="w-full max-w-7xl px-4 sm:px-6 md:px-8 py-20 flex flex-col items-center text-center">
      <div className="max-w-2xl mb-14 text-center">
        <span className="uppercase tracking-[0.2em] text-[11px] text-[#0871E7] font-bold select-none mb-3 block">Insights</span>
        <h2 className="font-instrument text-4xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-none mb-4">
          Our Latest Posts
        </h2>
        <p className="text-sm text-neutral-600 font-light max-w-xl mx-auto mt-4">
          Want to read the latest digital marketing tips and strategies from the industry experts? Check out the recent posts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="rounded-3xl p-6 bg-white/50 border border-neutral-200/60 shadow-xs hover:border-neutral-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[310px] group cursor-pointer"
          >
            <div>
              <div className="flex items-center gap-3 mb-4 text-[10px] uppercase font-extrabold text-[#0871E7] tracking-widest">
                <span className="px-2.5 py-0.5 bg-blue-500/10 rounded-full">{post.tag}</span>
                <span className="text-neutral-400">{post.date}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-tight mb-2 group-hover:text-[#0871E7] transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-xs leading-relaxed text-neutral-600 font-light">{post.desc}</p>
            </div>
            <div className="mt-6 text-xs font-bold uppercase tracking-wider text-neutral-800 group-hover:text-[#0871E7] transition-colors flex items-center gap-1.5">
              <span>Read More</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// 9. Immersive Liquid-Glass Footer Component (Real Company SquashCode Details)
export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <motion.footer
      className="liquid-glass w-full rounded-[32px] p-8 md:p-16 text-white/80 mt-12 mb-8 z-10 text-center relative overflow-hidden bg-black/40 shadow-2xl flex flex-col items-center justify-between min-h-[580px] md:min-h-[660px]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
    >
      {/* Background Starry Planet Video inside the Footer - Fully visible (opacity-100) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 pointer-events-none"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_114316_1c7889ad-2885-410e-b493-98119fee0ddb.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-black/25 z-0 pointer-events-none" />

      {/* Main Container for Footer Content */}
      <div className="relative z-10 w-full flex flex-col justify-between items-center flex-grow gap-12">
        
        {/* Spacer to push content to middle */}
        <div className="hidden md:block h-6" />

        {/* Immersive Center Content Segment */}
        <div className="w-full flex flex-col items-center max-w-2xl gap-6">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight font-sans leading-tight">
            Pure Insight. Zero Noise.
          </h2>
          
          {/* Pill-shaped email notify input bar */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Your favorite email?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-white/40 text-sm font-sans backdrop-blur-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#161a24] hover:bg-[#202735] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-md"
            >
              STAY NOTIFIED
            </button>
          </form>
        </div>

        {/* Directory Links Section - 4 Column Layout aligned along the bottom */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-left pt-12 border-t border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 256 256"
                fill="currentColor"
                className="text-white"
              >
                <path d="M 4.688 136 C 68.373 136 120 187.627 120 251.312 C 120 252.883 119.967 254.445 119.905 256 L 0 256 L 0 136.096 C 1.555 136.034 3.117 136 4.688 136 Z M 251.312 136 C 252.883 136 254.445 136.034 256 136.096 L 256 256 L 136.095 256 C 136.032 254.438 136.001 252.875 136 251.312 C 136 187.627 187.627 136 251.312 136 Z M 119.905 0 C 119.967 1.555 120 3.117 120 4.688 C 120 68.373 68.373 120 4.687 120 C 3.117 120 1.555 119.967 0 119.905 L 0 0 Z M 256 119.905 C 254.445 119.967 252.883 120 251.312 120 C 187.627 120 136 68.373 136 4.687 C 136 3.117 136.033 1.555 136.095 0 L 256 0 Z" />
              </svg>
              <span className="text-base font-extrabold tracking-wider">SQUASHCODE</span>
            </div>
            <p className="text-xs leading-relaxed text-white/50 max-w-xs font-sans font-light">
              SquashCode is the premier digital marketing agency in Kolkata. We build high-conversion paid ads, search engine visibility, robust email programs, and scalable revenue engines.
            </p>
          </div>

          {/* Col 2: Discover */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-medium mb-3.5">Discover</h4>
            <ul className="text-[11px] space-y-2 text-white/50">
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">Our Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-200">About Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors duration-200">Our Process</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors duration-200">Latest Blog Posts</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-medium mb-3.5">Our Services</h4>
            <ul className="text-[11px] space-y-2 text-white/50">
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">Search Engine Marketing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">Social Media Marketing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">Email Marketing</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">PPC Advertisement</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Reach Info */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-medium mb-3.5">Get In Touch</h4>
            <ul className="text-[11px] space-y-3 text-white/50">
              <li>
                <span className="text-white/40 uppercase block text-[9px] font-semibold tracking-widest">Call Us:</span>
                <a href="tel:+917044242693" className="hover:text-white transition-colors block font-sans font-medium text-white/80">+91 7044 242 693</a>
              </li>
              <li>
                <span className="text-white/40 uppercase block text-[9px] font-semibold tracking-widest">Email Us:</span>
                <a href="mailto:contact@squashcode.com" className="hover:text-white transition-colors block font-medium text-white/80">contact@squashcode.com</a>
              </li>
              <li>
                <span className="text-white/40 uppercase block text-[9px] font-semibold tracking-widest">Behala Office:</span>
                <span className="block text-white/60 font-light leading-snug flex items-start gap-1">
                  <MapPin className="w-3 h-3 text-[#0871E7] shrink-0 mt-0.5" />
                  <span>21, Sisir Bagan Rd, Behala, Kolkata, 700 034</span>
                </span>
              </li>
              <li>
                <span className="text-white/40 uppercase block text-[9px] font-semibold tracking-widest">SM Road Office:</span>
                <span className="block text-white/60 font-light leading-snug flex items-start gap-1">
                  <MapPin className="w-3 h-3 text-[#0871E7] shrink-0 mt-0.5" />
                  <span>132A Shyama Prasad Mukherjee Road, 1st Floor, Kolkata - 700026</span>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Social Bar */}
        <div className="w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-white/40 font-sans">
          <span>SquashCode &copy; {new Date().getFullYear()} All Rights Reserved.</span>
          <div className="flex items-center gap-3">
            <span className="opacity-55">Join the Journey:</span>
            <div className="flex items-center gap-2">
              {[
                { icon: TikTokIcon, name: "Tiktok", href: "#tiktok" },
                { icon: FacebookIcon, name: "Facebook", href: "#facebook" },
                { icon: TwitterIcon, name: "Twitter", href: "#twitter" },
                { icon: YouTubeIcon, name: "Youtube", href: "#youtube" },
                { icon: InstagramIcon, name: "Instagram", href: "#instagram" },
              ].map((social) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="opacity-60 hover:opacity-100 transition-colors text-white p-1"
                  >
                    <IconComp />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}

// 10. Main App Component
export default function App() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col items-center font-sans selection:bg-[#0871E7]/20 bg-[#F3F4ED] text-neutral-900">
      <Navbar />
      
      {/* Full-bleed Hero section outside max-w-7xl constraint */}
      <Hero />
      
      {/* Center-restricted directories container */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 md:px-8 flex flex-col items-center gap-8 mb-8">
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Blog />
        <Footer />
      </div>
    </main>
  );
}
