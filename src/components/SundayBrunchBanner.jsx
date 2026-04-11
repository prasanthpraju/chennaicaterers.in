import React from 'react';
import { motion } from 'framer-motion';
import brunchImg  from "../assets/CateringSection/sunday2.png"

const SundayBrunchBanner = () => {
  // Using a dark, moody food photography placeholder
  const bgImageUrl =  brunchImg
  // Framer motion variants perfectly matched to your WhyChooseUs component
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      className="relative w-full h-[400px] md:h-[500px] bg-cover bg-center overflow-hidden font-sans"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      {/* Dark overlay to ensure the white text pops against the image */}
      <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black/80 to-transparent"></div>

      {/* Text Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
      >
        {/* Subtitle using the bold, modern theme */}
        <motion.p 
          variants={itemVariants}
          className="text-red-500 font-bold uppercase tracking-widest text-sm md:text-base mb-4 drop-shadow-md"
        >
          When it satisfies your tastebuds
        </motion.p>
        
        {/* Main Title matching the 'Why Choose Us' typography */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight drop-shadow-xl"
        >
          Sunday <span className="relative inline-block">
            Brunch
            {/* The signature animated curved line from your theme */}
            <motion.svg 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-2 md:-bottom-4 left-0 h-3 text-red-600 drop-shadow-lg" 
              viewBox="0 0 200 10" 
              fill="currentColor"
            >
              <path d="M0,5 Q50,0 100,5 T200,5" stroke="none" fill="currentColor" />
            </motion.svg>
          </span>
        </motion.h1>
      </motion.div>
    </section>
  );
};

export default SundayBrunchBanner;