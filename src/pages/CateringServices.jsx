import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Birthday Party',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Marriage Reception',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Engagement',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Housewarming',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Puberty Function',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Valaikappu Function',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Industrial Catering',
    image: 'https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'School College Catering',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 10,
    title: 'Hospital catering',
    image: 'https://images.unsplash.com/photo-1588693959600-41584b8026db?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 11,
    title: 'Hotel accommodation',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop',
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeOut", duration: 0.4 } },
};

export default function CateringServices() {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block py-1 px-3 bg-[#EC2290]/10 text-[#EC2290] font-extrabold tracking-widest uppercase text-[10px] sm:text-xs mb-3 rounded-full">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 capitalize">
            Catering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC2290] to-[#c81978]">Services</span>
          </h2>
          <p className="text-gray-500 font-medium text-sm md:text-base max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring authentic flavors and impeccable service to every occasion.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        >
          {services.map((item) => (
            <motion.div 
              variants={cardVariants}
              key={item.id} 
              className="group bg-white rounded-2xl p-2 md:p-3 shadow-sm hover:shadow-2xl hover:shadow-[#EC2290]/15 border border-gray-100 transition-all duration-300 ease-out cursor-pointer flex flex-col"
            >
              
              {/* Image Container with Inner Shadow */}
              <div className="w-full aspect-square overflow-hidden rounded-xl relative mb-3 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Text Container */}
              <div className="flex flex-col flex-grow px-1 pb-1">
                {/* Title */}
                <h3 className="text-center font-extrabold text-[13px] md:text-base text-gray-800 group-hover:text-[#EC2290] transition-colors duration-300 line-clamp-1 mb-1">
                  {item.title}
                </h3>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}