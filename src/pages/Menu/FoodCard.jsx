import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const FoodCard = ({ food }) => {
  if (!food) return null;

  const imagePath =
    food.image?.url ||
    food.image?.data?.url ||
    food.image?.data?.attributes?.url;

  const imageUrl = imagePath
    ? `https://api.chennaicateres.in${imagePath}`
    : "https://via.placeholder.com/600x400?text=No+Image";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(236,34,144,0.12)] border border-gray-100 transition-all duration-500"
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={food.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Premium Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
          <Sparkles size={12} className="text-[#EC2290]" />
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">Premium</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter leading-tight group-hover:text-[#EC2290] transition-colors duration-300">
            {food.name}
          </h3>
          <p className="text-[#EC2290] font-black text-lg tracking-tighter">
            ₹{food.price}
          </p>
        </div>

        <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6 line-clamp-2">
          {food.description}
        </p>

        {/* Decorative Brand Accent Line */}
        <div className="flex items-center gap-2">
          <div className="h-1 w-8 bg-[#EC2290] rounded-full group-hover:w-16 transition-all duration-500" />
          <div className="h-1 w-1 bg-[#EC2290]/30 rounded-full" />
        </div>
      </div>

      {/* Background Hover Glow (Inner) */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#EC2290]/0 to-[#EC2290]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default FoodCard;