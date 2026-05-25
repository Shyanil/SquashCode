import { Hero } from "./sections/Hero";
import { TrustedBy } from "./sections/TrustedBy";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Gallery } from "./sections/Gallery";
import { Process } from "./sections/Process";
import { Stats } from "./sections/Stats";
import { CreativeProfile } from "./sections/CreativeProfile";
import { Testimonials } from "./sections/Testimonials";
import { Blog } from "./sections/Blog";
import { Partner } from "./sections/Partner";

function App() {
  return (
    <main className="min-h-screen relative overflow-hidden w-full bg-black text-white">
      
      {/* Cinematic Hero (Strictly untouched as requested) */}
      <Hero />

      {/* Trust Band Logo Cloud */}
      <TrustedBy />

      {/* Welcome to SquashCode & CEO Sagar Spotlight */}
      <About />

      {/* 4-column Services capabilities list */}
      <Services />

      {/* AI-driven Campaign Lab Gallery (with generated custom illustrations) */}
      <Gallery />

      {/* Attract, Acquire & Retain Funnel Timeline */}
      <Process />

      {/* Interactive numerical milestones */}
      <Stats />

      {/* Sagar Mondal's Creative Studio Profile Grid (with marquee rows and video panels) */}
      <CreativeProfile />

      {/* Verified client endorsements */}
      <Testimonials />

      {/* Recent marketing guides articles */}
      <Blog />

      {/* Cappuccino email capture card */}
      <Partner />

      {/* Ultimate Comprehensive Multi-Address Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/5 relative z-10 bg-black text-white select-none">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
          
          {/* Main Footer columns grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start text-left">
            
            {/* Column 1: Brand details (col-span-4) */}
            <div className="lg:col-span-4 flex flex-col items-start gap-6">
              <span className="font-heading font-medium tracking-widest text-xl uppercase text-white">
                SquashCode<span className="text-primary font-sans font-bold">*</span>
              </span>
              <p className="text-gray-400 text-xs sm:text-sm font-normal leading-relaxed text-justify max-w-sm">
                We are one of the best Growth Marketing Companies in Kolkata that aims to grow your business successfully by increasing the conversions to reach your goals.
              </p>
              
              {/* Social Channels Flex */}
              <div className="flex items-center gap-6 mt-2">
                {["Facebook", "Instagram", "Linkedin"].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="text-gray-500 hover:text-primary text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links (col-span-2) */}
            <div className="lg:col-span-2 flex flex-col items-start gap-5">
              <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase border-b border-primary/20 pb-2 w-full">
                Quick Links
              </h4>
              <div className="flex flex-col gap-3 text-xs sm:text-sm font-medium text-gray-400">
                <a href="#celtic-wealth" className="hover:text-primary transition-colors duration-300">
                  Celtic Wealth
                </a>
              </div>
            </div>

            {/* Column 3: Our Services (col-span-3) */}
            <div className="lg:col-span-3 flex flex-col items-start gap-5">
              <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase border-b border-primary/20 pb-2 w-full">
                Our Services
              </h4>
              <div className="flex flex-col gap-3 text-xs sm:text-sm font-medium text-gray-400">
                <a href="#services" className="hover:text-primary transition-colors duration-300">
                  Search Engine Marketing
                </a>
                <a href="#services" className="hover:text-primary transition-colors duration-300">
                  Social Media Marketing
                </a>
                <a href="#services" className="hover:text-primary transition-colors duration-300">
                  Email Marketing
                </a>
                <a href="#services" className="hover:text-primary transition-colors duration-300">
                  PPC Advertisement
                </a>
              </div>
            </div>

            {/* Column 4: Get In Touch (col-span-3) */}
            <div className="lg:col-span-3 flex flex-col items-start gap-5">
              <h4 className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase border-b border-primary/20 pb-2 w-full">
                Get In Touch
              </h4>
              <div className="flex flex-col gap-4 text-xs sm:text-sm font-medium text-gray-400">
                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Call Us</span>
                  <a href="tel:+917044242693" className="text-white hover:text-primary transition-colors duration-300">
                    +91 7044 242 693
                  </a>
                </div>
                {/* Email */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Email Us</span>
                  <a href="mailto:contact@squashcode.com" className="text-white hover:text-primary transition-colors duration-300">
                    contact@squashcode.com
                  </a>
                </div>
                {/* Addresses */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Behala Office</span>
                    <span className="leading-relaxed text-justify text-[11px] sm:text-xs">
                      21, Sisir Bagan Rd, Behala, Kolkata, India, 700 034
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Mukherjee Road Office</span>
                    <span className="leading-relaxed text-justify text-[11px] sm:text-xs">
                      132A Shyama Prasad Mukherjee Road, 1st Floor, Kolkata - 700026
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright segment */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm font-medium text-gray-500">
            <span>
              SquashCode &copy; {new Date().getFullYear()} All Rights Reserved.
            </span>
            <span className="text-primary/70 block sm:inline">
              Designed with ❤ by SquashCode Team
            </span>
          </div>

        </div>
      </footer>

    </main>
  );
}

export default App;
