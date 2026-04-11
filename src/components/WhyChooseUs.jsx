import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, ChefHat, Wallet, ShieldCheck, Truck, CalendarDays } from 'lucide-react';

const featuresData = [
  {
    id: 1,
    title: "Quality Food Items",
    description: "We make sure that the food we provide is nutritious as well as tasty.",
    icon: Utensils,
  },
  {
    id: 2,
    title: "Professional Chefs",
    description: "The most important component of any celebration is the cuisine, perfected by our experienced chefs.",
    icon: ChefHat,
  },
  {
    id: 3,
    title: "Budget-Friendly",
    description: "We offer cooking options that can be customized to fit your specific budget without compromising taste.",
    icon: Wallet,
  },
  {
    id: 4,
    title: "Belief & Trust",
    description: "We are committed to providing high-quality catering services through absolute transparency.",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Delivery On Time",
    description: "Timely delivery is the foundation of our relationship, ensuring your food arrives fresh and ready.",
    icon: Truck,
  },
  {
    id: 6,
    title: "Event Planning",
    description: "Our specialized catering service helps make your event a success, regardless of the scale or occasion.",
    icon: CalendarDays,
  }
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
    show: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="bg-white py-20 md:py-28 font-sans overflow-hidden relative">
       {/* Cinematic Background Glows */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-[#EC2290]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] -right-[10%] w-[30%] h-[50%] bg-[#EC2290]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
        > 
          <span className="text-[#EC2290] font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">Our Excellence</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-6 leading-tight">
            Why Choose <span className="text-[#EC2290] relative inline-block">
              Us
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
          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium tracking-wide">
            We are a delicious brand that provides specialized Food Catering services. Our meals are cooked to perfection, ensuring flavor, nutrition, and affordability in every bite.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {featuresData.map((feature) => {
            const Icon = feature.icon;
            
            return (
              <motion.div 
                key={feature.id}
                variants={cardVariants}
                className="group relative bg-white p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(236,34,144,0.1)] border border-gray-100 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Modern Icon Container */}
                <div className="relative mb-8">
                  {/* Hover Glow */}
                  <div className="absolute -inset-4 bg-[#EC2290]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75 group-hover:scale-100" />
                  
                  <div className="relative w-16 h-16 flex-shrink-0 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-[1.25rem] border border-gray-50 flex items-center justify-center z-10 group-hover:bg-[#EC2290] group-hover:text-white transition-all duration-500">
                    <Icon size={28} strokeWidth={1.5} className="text-gray-400 group-hover:text-white transition-colors duration-500" />
                    
                    {/* Minimalist Badge Decoration */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#EC2290] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 border-2 border-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-[#EC2290] transition-colors duration-300 uppercase">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed text-[15px] font-medium group-hover:text-gray-600 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Signature Brand accent line */}
                <div className="absolute bottom-6 left-8 w-8 h-1 bg-gray-100 group-hover:w-16 group-hover:bg-[#EC2290]/30 transition-all duration-500 rounded-full" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;