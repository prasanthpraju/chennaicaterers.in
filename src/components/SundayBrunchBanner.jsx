import React from 'react';
import { motion } from 'framer-motion';
import brunchImg from "../assets/CateringSection/sunday2.png"

const SundayBrunchBanner = () => {
  const bgImageUrl = brunchImg;

  // Animation variants refined for a smoother, more "premium" feel
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      className="relative w-full h-[350px] md:h-[500px] overflow-hidden font-sans flex items-center justify-center"
    >
      {/* 1. Main Background Image with subtle parallax-like scale */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ 
          backgroundImage: `url(${bgImageUrl})`,
        }}
      />

      {/* 2. Cinematic Overlays: Noise + Gradient */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
      
      {/* Noise Texture (consistent with HeroSlider) */}
      <div
        className="absolute inset-0 z-20 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 3. Text Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-30 flex flex-col items-center px-6 text-center"
      >
        {/* Updated to Brand Pink and tightened tracking */}
        <motion.p 
          variants={itemVariants}
          className="text-[#EC2290] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 drop-shadow-md"
        >
          When it satisfies your tastebuds
        </motion.p>
        
        {/* Main Title using high-end typography */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter drop-shadow-2xl leading-none"
        >
          Sunday <span className="relative inline-block">
            Brunch
            {/* Signature Brand Pink Underline */}
            <motion.svg 
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "110%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="absolute -bottom-2 md:-bottom-3 -left-[5%] h-2 md:h-3 text-[#EC2290] drop-shadow-[0_0_15px_rgba(236,34,144,0.6)]" 
              viewBox="0 0 200 10" 
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <path d="M0,5 Q50,0 100,5 T200,5 L200,10 L0,10 Z" />
            </motion.svg>
          </span>
        </motion.h1>
      </motion.div>

      {/* Subtle border to separate from other sections if needed */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-40" />
    </section>
  );
};

export default SundayBrunchBanner;