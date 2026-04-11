import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';
import WhyOurService1 from "../assets/WhyOurService/why1.png"
import WhyOurService2 from "../assets/WhyOurService/why2.png"
import WhyOurService3 from "../assets/WhyOurService/why3.png"
import WhyOurService4 from "../assets/WhyOurService/why4.png"

const WhyOurService = () => {
  // Premium Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85, rotate: -3 },
    show: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 80, damping: 20 } 
    }
  };

  return (
    <section className="bg-white py-20 md:py-28 font-sans overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            {/* Pre-Heading matching other sections */}
            <motion.span 
              variants={fadeUp} 
              className="text-[#EC2290] font-black text-[10px] tracking-[0.3em] uppercase mb-2 block"
            >
              Our Story
            </motion.span>

            {/* Main Heading */}
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-[1.1]">
              Why Our <br className="hidden md:block" />
              <span className="text-[#EC2290] relative inline-block mt-1">
                Catering Service
                <motion.svg 
                  initial={{ width: 0 }}
                  whileInView={{ width: "110%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute -bottom-1 -left-[5%] h-1.5 text-[#EC2290]/20" 
                  viewBox="0 0 200 10" 
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,5 Q50,0 100,5 T200,5 L200,10 L0,10 Z" />
                </motion.svg>
              </span>
            </motion.h2>

            {/* Premium Decorative Divider */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 py-4 w-3/4">
              <div className="h-px bg-gradient-to-r from-gray-200 to-transparent flex-1"></div>
              <div className="bg-[#EC2290]/10 p-2 rounded-full">
                <UtensilsCrossed className="text-[#EC2290] w-4 h-4" />
              </div>
              <div className="h-px bg-gradient-to-l from-gray-200 to-transparent flex-1"></div>
            </motion.div>

            {/* Paragraph Content */}
            <motion.div variants={fadeUp} className="relative">
              {/* Brand Pink Accent Line */}
              <div className="absolute -left-4 top-1 w-1 h-[90%] bg-gradient-to-b from-[#EC2290] to-[#ff4eb1] rounded-full hidden md:block opacity-80" />
              
              <p className="text-gray-500 text-[15px] md:text-base leading-relaxed font-medium md:pl-6 tracking-wide">
                Our Chennai Catering Service is a modest, self-contained catering business in Chennai. We offer a wide selection of delicious, elegant, courteous, and professional catering services to private and business clients.
              </p>
              <p className="text-gray-500 text-[15px] md:text-base leading-relaxed font-medium md:pl-6 mt-5 tracking-wide">
                We have a highly skilled team of specialists who are dedicated to providing an orderly service within the time frame allotted. Whether you're planning a cocktail party for a corporate or charity event, a small intimate dinner party at home, or a full-scale wedding reception, our catering service can help.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Advanced Image Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="relative lg:pl-10 mt-12 lg:mt-0"
          >
            {/* 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
              
              {/* Image 1: South Indian */}
              <motion.div variants={imageVariants} className="relative aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] group border border-gray-50">
                <img 
                  src={WhyOurService1}
                  alt="South Indian Breakfast" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Image 2: Drinks */}
              <motion.div variants={imageVariants} className="relative aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] group mt-8 md:mt-12 border border-gray-50">
                <img 
                  src={WhyOurService2}
                  alt="Drinks"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Image 3: Buffet */}
              <motion.div variants={imageVariants} className="relative aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] group -mt-8 md:-mt-12 border border-gray-50">
                <img 
                  src={WhyOurService3}
                  alt="Buffet Spread" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Image 4: Main Course */}
              <motion.div variants={imageVariants} className="relative aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] group border border-gray-50">
                <img 
                  src={WhyOurService4}
                  alt="Main Course Chicken" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Center "Taste It" Premium Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 200, damping: 20 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <div className="bg-white/90 backdrop-blur-xl border border-white/50 shadow-[0_30px_60px_rgba(236,34,144,0.2)] px-8 py-5 md:px-10 md:py-8 flex flex-col items-center justify-center rounded-[2rem] transition-transform hover:scale-105 duration-300 cursor-pointer group">
                  <span className="text-xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter group-hover:text-[#EC2290] transition-colors">
                    Taste It
                  </span>
                  <div className="h-1 w-12 bg-[#EC2290] mt-2.5 rounded-full group-hover:w-20 transition-all duration-300" />
                </div>
              </motion.div>

            </div>

            {/* Decorative Background Blob behind images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-[#EC2290]/10 to-[#ff4eb1]/5 rounded-full blur-[80px] -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyOurService;