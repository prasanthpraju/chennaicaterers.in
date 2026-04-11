import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, Quote } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: "Priya & Rahul",
    role: "Wedding Reception",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    text: "The catering service for our wedding was absolutely phenomenal. The traditional South Indian spread was authentic, and the live counters were a huge hit with our guests. The attention to detail was unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Karthik Rajan",
    role: "Corporate Event",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    text: "We hired them for our annual company gathering of 500+ employees. The logistics were handled flawlessly, and the food was served hot and on time. Highly recommend for large-scale corporate needs!",
    rating: 5
  },
  {
    id: 3,
    name: "Lakshmi Narayanan",
    role: "Family Gathering",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    text: "I booked their services for my father's 60th birthday. The custom menu they helped us design was perfect for both the kids and the elders. Tasted exactly like home-cooked meals.",
    rating: 4
  },
  {
    id: 4,
    name: "Vikram Desai",
    role: "Cocktail Party",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    text: "Outstanding fusion appetizers and exceptional bartending support! They perfectly understood the vibe of our evening party and delivered a modern menu to remember.",
    rating: 5
  }
];

const SLIDE_DURATION = 4000;

const ClientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-play effect
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviewsData.length);
      }, SLIDE_DURATION);
    }
    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  const currentReview = reviewsData[currentIndex];

  // Animation for the text changing
  const textVariants = {
    initial: { opacity: 0, y: 15, scale: 0.98 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      y: -15, 
      scale: 0.98,
      transition: { duration: 0.3, ease: "easeIn" } 
    }
  };

  return (
    <section className="bg-gray-50 py-12 md:py-16 font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
           
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
            Hear From Our <span className="text-red-600">Guests</span>
          </h2>
        </motion.div>

        {/* Main Review Card */}
        <div 
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Decorative Quote Mark */}
          <Quote size={80} className="absolute top-4 left-6 text-gray-50 opacity-60 -z-0 rotate-180" />
          <Quote size={80} className="absolute bottom-4 right-6 text-gray-50 opacity-60 -z-0" />

          {/* Review Content Area (Fixed minimum height prevents layout jumping) */}
          <div className="relative z-10 min-h-[180px] md:min-h-[140px] flex flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="max-w-2xl mx-auto"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < currentReview.rating ? "text-orange-400 fill-orange-400" : "text-gray-200 fill-gray-200"} 
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed italic mb-6">
                  "{currentReview.text}"
                </p>

                {/* Author Name */}
                <h4 className="text-lg font-bold text-gray-900">{currentReview.name}</h4>
                <p className="text-red-600 text-xs font-bold uppercase tracking-wider mt-1">
                  {currentReview.role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Bar (Thin line above avatars) */}
          <div className="w-full h-0.5 bg-gray-100 mt-8 mb-6 rounded-full overflow-hidden relative max-w-md mx-auto">
            <motion.div 
              key={currentIndex}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-400 to-red-600"
              initial={{ width: "0%" }}
              animate={{ width: isHovered ? "0%" : "100%" }}
              transition={{ duration: isHovered ? 0 : (SLIDE_DURATION / 1000), ease: "linear" }}
            />
          </div>

          {/* Interactive Avatar Dock */}
          <div className="flex justify-center items-center gap-3 md:gap-5">
            {reviewsData.map((review, idx) => {
              const isActive = idx === currentIndex;
              
              return (
                <button
                  key={review.id}
                  onClick={() => setCurrentIndex(idx)}
                  className="relative group outline-none"
                  aria-label={`View review by ${review.name}`}
                >
                  <motion.div 
                    animate={{
                      scale: isActive ? 1.2 : 0.9,
                      opacity: isActive ? 1 : 0.5,
                      filter: isActive ? "grayscale(0%)" : "grayscale(100%)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 transition-colors duration-300 ${
                      isActive ? 'border-red-500 shadow-md z-10' : 'border-transparent group-hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientReviews;