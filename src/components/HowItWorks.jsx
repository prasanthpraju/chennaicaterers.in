import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ClipboardList, UserCog, MapPin } from 'lucide-react';

const stepsData = [
  {
    id: "01",
    title: "The Ability to Choose the Best",
    description: "The best food, service, and attention to detail, as well as any additional arrangements you've requested for your special occasion.",
    icon: ClipboardList,
    color: "from-orange-400 to-orange-600",
    glow: "from-orange-500/20 to-red-500/20"
  },
  {
    id: "02",
    title: "Workforce with a Specialized Function",
    description: "We also have competent chefs on team who can produce a wide range of dishes based on the tastes of our customers.",
    icon: UserCog,
    color: "from-amber-400 to-amber-600",
    glow: "from-amber-500/20 to-orange-500/20"
  },
  {
    id: "03",
    title: "Service with a Long Tradition",
    description: "We are focusing on the importance of a long history of outstanding customer service.",
    icon: MapPin,
    color: "from-red-400 to-red-600",
    glow: "from-red-500/20 to-pink-500/20"
  }
];

const HowItWorks = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
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

  const drawLineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 }
    }
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
            
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-2">
            How It <span className="text-red-600 relative inline-block">
              Works
              <motion.svg 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-2 left-0 h-2 text-red-200" 
                viewBox="0 0 200 10" 
                fill="currentColor"
              >
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="none" fill="currentColor" />
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
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative"
        >
          {stepsData.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div 
                key={step.id} 
                variants={itemVariants}
                className="relative flex flex-col items-center group"
              >
                
                {/* Connecting Dashed Line (Visible only on desktop, not on the last item) */}
                {index < stepsData.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[55%] w-[90%] z-0 pointer-events-none">
                    <svg width="100%" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path 
                        variants={drawLineVariants}
                        d="M0 20 Q 50 -10, 100 20 T 200 20" 
                        stroke="#d1d5db" 
                        strokeWidth="2" 
                        strokeDasharray="6 6"
                        fill="none"
                      />
                      {/* Arrow head */}
                      <motion.path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 0.5 }}
                        d="M 190 10 L 200 20 L 190 30"
                        stroke="#d1d5db"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}

                {/* Icon Circle Container */}
                <div className="relative mb-8 z-10">
                  {/* Background Hover Glow */}
                  <div className={`absolute -inset-4 bg-gradient-to-r ${step.glow} rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Main White Circle */}
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-24 h-24 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center relative z-10"
                  >
                    <Icon size={36} strokeWidth={1.5} className="text-gray-700 group-hover:text-red-600 transition-colors duration-300" />
                    
                    {/* Number Badge */}
                    <div className={`absolute -top-1 -left-2 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} shadow-lg border-2 border-white flex items-center justify-center z-20`}>
                      <span className="text-white text-xs font-bold">{step.id}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="text-center px-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
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