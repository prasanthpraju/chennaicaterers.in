import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Utensils, ChefHat, Wallet, ShieldCheck, Truck, CalendarDays } from 'lucide-react';

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
    description: "The most important component of any celebration or gathering is the cuisine, and you may have delicious meals essentially by hiring an experienced chef.",
    icon: ChefHat,
  },
  {
    id: 3,
    title: "Budget-Friendly",
    description: "The most of suppliers offer cooking options that can be customised to fit your budget.",
    icon: Wallet,
  },
  {
    id: 4,
    title: "Belief",
    description: "We are committed to providing high quality catering services to our customers.",
    icon: ShieldCheck,
  },
  {
    id: 5,
    title: "Delivery On Time",
    description: "The timely delivery of ordered food is one of the most critical parts of a Caterer-Customer relationship.",
    icon: Truck,
  },
  {
    id: 6,
    title: "Event Planning",
    description: "Our specialised catering service is here to help you make your event a success, no matter what the occasion.",
    icon: CalendarDays,
  }
];

const WhyChooseUs = () => {
  // Framer motion variants for staggered loading
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        > 
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-6">
            Why Choose <span className="text-red-600 relative inline-block">
              Us
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
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            We are a delicious brand that provides specialised Food Catering services. Our meals are cooked to perfection. Customers commended the food's flavour, nutritional content, and price.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuresData.map((feature) => {
            const Icon = feature.icon;
            
            return (
              <motion.div 
                key={feature.id}
                variants={cardVariants}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header Row: Icon + Title */}
                <div className="flex items-center gap-5 mb-5">
                  {/* Custom Icon Styling mimicking the original design */}
                  <div className="relative w-14 h-14 flex-shrink-0">
                    {/* Green offset background */}
                    <div className="absolute top-1 -left-1 w-full h-full bg-lime-400 rounded-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    {/* Orange foreground */}
                    <div className="absolute inset-0 bg-orange-400 rounded-xl flex items-center justify-center shadow-sm">
                      <Icon size={24} className="text-white" strokeWidth={2} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm font-medium">
                  {feature.description}
                </p>
                
                {/* Decorative subtle gradient that appears on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50/0 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;