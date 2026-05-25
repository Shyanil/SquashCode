import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export const Blog: React.FC = () => {
  const posts = [
    {
      id: "blog-email",
      category: "email marketing",
      title: "Ultimate Email Marketing Guide for Real Estate Developers 2021",
      description: "How Real Estate Developers can use Email to capture, nurture and convert high-intent prospective buyers into locked contract closures.",
      readTime: "5 min read"
    },
    {
      id: "blog-gym",
      category: "gym business",
      title: "Top 8 social media marketing hacks to make your gym business profitable in 2021!",
      description: "Use Social Media Marketing to grow your active gym memberships, schedule personal training appointments, and construct local community affinity.",
      readTime: "4 min read"
    },
    {
      id: "blog-cro",
      category: "optimize conversion rate",
      title: "10 Easy conversion rate optimization Hacks to Double Your Conversion Rate in 2021",
      description: "Conversion rate optimization (CRO) is one of the most wanted practices in today’s digital marketing. In layman terms, it is the scale of sales a particular business generates relative to its total site traffic.",
      readTime: "8 min read"
    }
  ];

  const customEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-black py-24 px-6 md:px-12 border-t border-white/5 relative z-10 select-none" id="blog">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-left max-w-3xl">
          <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4 block">
            Latest Insights
          </span>
          <h2 className="font-heading font-medium tracking-tight text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6">
            Our <span className="font-serif italic text-primary">Latest Posts</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide">
            Want to read the latest digital marketing tips and strategies from the industry experts? Check out our recent posts to know how to grow fast every day!
          </p>
        </div>

        {/* 3-Column Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full items-stretch">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              id={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: customEase, delay: index * 0.1 }}
              className="rounded-2xl border border-white/5 bg-[#0B0B0B] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-primary/20 hover:bg-[#111111] transition-all duration-300 h-[380px] sm:h-[400px]"
            >
              <div className="flex flex-col gap-5 text-left select-none">
                
                {/* Meta details (Category + Read time) */}
                <div className="flex items-center justify-between text-[10px] font-bold tracking-widest uppercase">
                  <span className="text-primary px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                    {post.category}
                  </span>
                  <span className="text-gray-500 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-white font-bold text-base sm:text-lg md:text-xl leading-snug group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-justify line-clamp-3">
                    {post.description}
                  </p>
                </div>

              </div>

              {/* Read More rotated link */}
              <a
                href="#inquiries"
                className="flex items-center gap-1.5 text-primary text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors duration-300 hover:text-white self-start pt-4 mt-auto"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
