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

const SLIDE_DURATION = 5000; // Increased slightly for better readability

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

  // Premium Animation for the text changing
  const textVariants = {
    initial: { opacity: 0, y: 20, filter: "blur(4px)" },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
      opacity: 0, 
      y: -15, 
      filter: "blur(4px)",
      transition: { duration: 0.4, ease: "easeIn" } 
    }
  };

  return (
    <section className="bg-white py-20 md:py-28 font-sans overflow-hidden relative">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-[30%] -left-[10%] w-[30%] h-[40%] bg-[#EC2290]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[30%] bg-[#ff4eb1]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#EC2290] font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
            Hear From Our <span className="text-[#EC2290] relative inline-block">
              Guests
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

        {/* Main Review Card */}
        <div 
          className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-50 p-8 md:p-12 relative group transition-all duration-500 hover:shadow-[0_30px_60px_rgba(236,34,144,0.08)] hover:border-[#EC2290]/10"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Decorative Quote Mark */}
          <Quote size={80} className="absolute top-6 left-8 text-[#EC2290]/5 -z-0 rotate-180 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-2" />
          <Quote size={80} className="absolute bottom-6 right-8 text-[#EC2290]/5 -z-0 transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2 group-hover:translate-y-2" />

          {/* Review Content Area */}
          <div className="relative z-10 min-h-[200px] md:min-h-[160px] flex flex-col items-center justify-center text-center mt-4">
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
                <div className="flex justify-center gap-1.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < currentReview.rating ? "text-yellow-400 fill-yellow-400 drop-shadow-sm" : "text-gray-200 fill-gray-200"} 
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed mb-8 px-4">
                  "{currentReview.text}"
                </p>

                {/* Author Name */}
                <h4 className="text-xl font-black text-gray-900 tracking-tight">{currentReview.name}</h4>
                <p className="text-[#EC2290] text-[10px] font-black uppercase tracking-widest mt-1.5">
                  {currentReview.role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Bar (Thin line above avatars) */}
          <div className="w-full h-[3px] bg-gray-100 mt-10 mb-8 rounded-full overflow-hidden relative max-w-md mx-auto">
            <motion.div 
              key={currentIndex}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#EC2290] to-[#ff4eb1]"
              initial={{ width: "0%" }}
              animate={{ width: isHovered ? "0%" : "100%" }}
              transition={{ duration: isHovered ? 0 : (SLIDE_DURATION / 1000), ease: "linear" }}
            />
          </div>

          {/* Interactive Avatar Dock */}
          <div className="flex justify-center items-center gap-4 md:gap-6">
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
                      scale: isActive ? 1.25 : 0.9,
                      opacity: isActive ? 1 : 0.4,
                      filter: isActive ? "grayscale(0%)" : "grayscale(100%)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                      isActive ? 'border-[#EC2290] shadow-[0_0_20px_rgba(236,34,144,0.3)] z-10' : 'border-transparent group-hover:border-gray-300 group-hover:opacity-80'
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