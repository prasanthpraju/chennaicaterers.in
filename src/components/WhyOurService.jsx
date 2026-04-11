import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';
import WhyOurService1 from "../assets/WhyOurService/why1.png"
import WhyOurService2 from "../assets/WhyOurService/why2.png"
import WhyOurService3 from "../assets/WhyOurService/why3.png"
import WhyOurService4 from "../assets/WhyOurService/why4.png"

const WhyOurService = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    show: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 } 
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {/* Small Badge */}
            {/* <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
              <Sparkles className="text-orange-500 animate-pulse" />
              <span className="text-orange-600 font-semibold text-xs tracking-wide uppercase">About Our Brand</span>
            </motion.div> */}

            {/* Main Heading */}
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Why Our <br className="hidden md:block" />
              <span className="text-red-600 relative inline-block mt-2">
                Catering Service
                <motion.svg 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -bottom-2 left-0 h-2 text-red-200" 
                  viewBox="0 0 200 10" 
                  fill="currentColor"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q50,0 100,5 T200,5" stroke="none" fill="currentColor" />
                </motion.svg>
              </span>
            </motion.h2>

            {/* Decorative Divider matching original screenshot vibe */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 py-2">
              <div className="h-px bg-gray-200 flex-1 border-t border-dashed border-gray-300"></div>
              <UtensilsCrossed className="text-gray-400 w-5 h-5" />
              <div className="h-px bg-gray-200 flex-1 border-t border-dashed border-gray-300"></div>
            </motion.div>

            {/* Paragraph Content */}
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-400 to-red-500 rounded-full hidden md:block" />
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium md:pl-6">
                Our Chennai Catering Service is a modest, self-contained catering business in Chennai. We offer a wide selection of delicious, elegant, courteous, and professional catering services to private and business clients.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-medium md:pl-6 mt-4">
                We have a highly skilled team of specialists who are dedicated to providing an orderly service within the time frame allotted. Whether you're planning a cocktail party for a corporate or charity event, a small intimate dinner party at home, or a full-scale wedding reception, our catering service can help.
              </p>
            </motion.div>

            {/* CTA Button (Removed) */}
            <motion.div variants={fadeUp} className="pt-4">
                
            </motion.div>
          </motion.div>

          {/* Right Column: Advanced Image Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="relative lg:pl-10 mt-10 lg:mt-0"
          >
            {/* 2x2 Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 relative">
              
              {/* Image 1: South Indian */}
              <motion.div variants={imageVariants} className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group">
                <img 
                  src = {WhyOurService1}
                  alt="South Indian Breakfast" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </motion.div>

              {/* Image 2: Drinks */}
              <motion.div variants={imageVariants} className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group mt-8 md:mt-12">
                <img 
                  src= {WhyOurService2}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </motion.div>

              {/* Image 3: Buffet */}
              <motion.div variants={imageVariants} className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group -mt-8 md:-mt-12">
                <img 
                  src= {WhyOurService3}
                  alt="Buffet Spread" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </motion.div>

              {/* Image 4: Main Course */}
              <motion.div variants={imageVariants} className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group">
                <img 
                  src= {WhyOurService4}
                  alt="Main Course Chicken" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </motion.div>

              {/* Center "Taste It" Glassmorphism Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="bg-white/70 backdrop-blur-md border border-white shadow-2xl px-6 py-4 md:px-8 md:py-6 flex flex-col items-center justify-center rounded-xl md:rounded-2xl">
                  <span className="text-xl md:text-3xl font-black text-gray-900 font-serif italic tracking-wide">
                    Taste It
                  </span>
                  <div className="h-0.5 w-12 bg-red-500 mt-2 rounded-full" />
                </div>
              </motion.div>

            </div>

            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-100/40 to-red-50/40 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyOurService;