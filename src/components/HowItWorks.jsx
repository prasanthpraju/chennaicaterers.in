import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ClipboardList, UserCog, MapPin } from 'lucide-react';

const stepsData = [
  {
    id: "01",
    title: "The Ability to Choose the Best",
    description: "The best food, service, and attention to detail, as well as any additional arrangements for your special occasion.",
    icon: ClipboardList,
    color: "from-[#EC2290] to-[#ff4eb1]",
    glow: "from-[#EC2290]/20 to-pink-500/20"
  },
  {
    id: "02",
    title: "Workforce with a Specialized Function",
    description: "Our competent chefs produce a wide range of dishes tailored specifically to the unique tastes of our customers.",
    icon: UserCog,
    color: "from-[#D81B7D] to-[#EC2290]",
    glow: "from-[#D81B7D]/20 to-[#EC2290]/20"
  },
  {
    id: "03",
    title: "Service with a Long Tradition",
    description: "We focus on a legacy of outstanding customer service, ensuring every event is treated with historical excellence.",
    icon: MapPin,
    color: "from-[#B01565] to-[#D81B7D]",
    glow: "from-[#B01565]/20 to-pink-900/20"
  }
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const drawLineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 }
    }
  };

  return (
    <section className="bg-white py-20 md:py-28 font-sans overflow-hidden relative">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#EC2290]/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-[#EC2290]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#EC2290] font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
            How It <span className="text-[#EC2290] relative inline-block">
              Works
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
          </h2>
        </motion.div>

        {/* Steps Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12 relative"
        >
          {stepsData.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div 
                key={step.id} 
                variants={itemVariants}
                className="relative flex flex-col items-center group"
              >
                
                {/* Connecting Line (Desktop) */}
                {index < stepsData.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] z-0">
                    <svg width="100%" height="40" viewBox="0 0 200 40" fill="none">
                      <motion.path 
                        variants={drawLineVariants}
                        d="M0 20 Q 50 -5, 100 20 T 200 20" 
                        stroke="#f3f4f6" 
                        strokeWidth="3" 
                        strokeDasharray="8 8"
                        fill="none"
                      />
                    </svg>
                  </div>
                )}

                {/* Icon Container */}
                <div className="relative mb-10">
                  <div className={`absolute -inset-6 bg-gradient-to-r ${step.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-75 group-hover:scale-110`} />
                  
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="w-28 h-28 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-50 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(236,34,144,0.15)] group-hover:border-[#EC2290]/20"
                  >
                    <Icon size={40} strokeWidth={1.2} className="text-gray-400 group-hover:text-[#EC2290] transition-colors duration-500" />
                    
                    {/* Number Badge */}
                    <div className={`absolute -top-2 -right-2 w-10 h-10 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg border-4 border-white flex items-center justify-center z-20 transform group-hover:rotate-12 transition-transform duration-500`}>
                      <span className="text-white text-[10px] font-black">{step.id}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center px-4">
                  <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-[#EC2290] transition-colors duration-300 uppercase">
                    {step.title}
                  </h3>
                  <div className="w-8 h-1 bg-gray-100 mx-auto mb-5 group-hover:w-16 group-hover:bg-[#EC2290]/30 transition-all duration-500 rounded-full" />
                  <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;