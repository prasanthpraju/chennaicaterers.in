import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CateringSection1 from "../assets/CateringSection/sec1.png"
import CateringSection2 from "../assets/CateringSection/sec2.png"
import CateringSection3 from "../assets/CateringSection/sec3.png"
import CateringSection4 from "../assets/CateringSection/sec4.png"
import CateringSection5 from "../assets/CateringSection/sec5.png"
import CateringSection6 from "../assets/CateringSection/sec6.png"
const menuData = [
  {
    id: 1,
    title: "Break Fast Menu",
    description: "For all occasions and weddings, Chennai Catering Service provides the best breakfast menu; we also assist customers in building a customised menu that is personalised to their preferences and suitable for the celebration.",
    longDescription: "Our breakfast menu features an exquisite selection of traditional South Indian delicacies including crispy dosas, fluffy idlis, flavorful vadas, and aromatic pongal. Each dish is prepared with authentic spices and fresh ingredients, ensuring a memorable start to any celebration.",
    image: CateringSection1,
    bgGradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 2,
    title: "Lunch Menu",
    description: "Chennai Catering Service provides delicious lunch menus for a variety of gatherings and events; we also allow customers to create a custom menu based on their tastes, budget, and pricing range.",
    longDescription: "Experience the richness of authentic Tamil Nadu cuisine with our elaborate lunch menus. From traditional banana leaf service to modern buffet presentations, we offer a wide range of vegetarian and non-vegetarian options.",
    image: CateringSection2,
    bgGradient: "from-green-500/20 to-teal-500/20"
  },
  {
    id: 3,
    title: "Dinner Menu",
    description: "Elegant dinner spreads featuring both South Indian specialties and fusion cuisine, perfect for evening receptions and formal gatherings.",
    longDescription: "Our dinner menu combines traditional flavors with contemporary presentation. Choose from our curated selection of starters, main courses, and desserts that will leave your guests impressed.",
    image: CateringSection3,
    bgGradient: "from-purple-500/20 to-pink-500/20"
  },
    {
      id: 4,
      title: "Wedding Specials",
      description: "Grand wedding catering with traditional South Indian flavors and elegant presentation to make your big day unforgettable.",
      longDescription: "Our wedding catering service is designed to deliver a luxurious and authentic experience. From classic banana leaf meals to multi-course premium buffets, we handle everything with perfection. We ensure taste, hygiene, and flawless service that matches your celebration scale.",
      image: CateringSection4,
      bgGradient: "from-pink-500/20 to-red-500/20"
    },
    {
      id: 5,
      title: "Outdoor Catering",
      description: "Perfect catering solutions for outdoor events, beach parties, and garden celebrations with live cooking experience.",
      longDescription: "We specialize in outdoor catering setups including beach events, terrace parties, and garden weddings. Our team ensures seamless service with live cooking stations, fresh food preparation, and a vibrant dining experience anywhere you host.",
      image: CateringSection5,
      bgGradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 6,
      title: "Corporate Catering",
      description: "Professional catering services tailored for corporate meetings, office events, and business gatherings.",
      longDescription: "Our corporate catering ensures timely delivery, premium quality food, and professional presentation. Whether it's office lunches, conferences, or team events, we provide customized menus that suit your business needs and impress your clients.",
      image: CateringSection6,
      bgGradient: "from-gray-500/20 to-slate-500/20"
    }
];

const CateringSection = () => {
  const [activeMenu, setActiveMenu] = useState(menuData[0]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const currentIndex = menuData.findIndex(menu => menu.id === activeMenu.id);
  
  const nextMenu = () => {
    setDirection(1);
    const nextIndex = (currentIndex + 1) % menuData.length;
    setActiveMenu(menuData[nextIndex]);
    setIsExpanded(false);
  };
  
  const prevMenu = () => {
    setDirection(-1);
    const prevIndex = (currentIndex - 1 + menuData.length) % menuData.length;
    setActiveMenu(menuData[prevIndex]);
    setIsExpanded(false);
  };
  
  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextMenu();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevMenu();
        setIsAutoPlaying(false);
      } else if (e.key === 'ArrowRight') {
        nextMenu();
        setIsAutoPlaying(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const displayedDescription = isExpanded 
    ? activeMenu.longDescription 
    : activeMenu.description;

  // Animation variants for slider
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    })
  };

  const contentVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
           
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight mb-2">
            Our Signature <span className="text-red-600 relative inline-block">
              Menus
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
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 max-w-2xl mx-auto text-sm font-medium"
          >
            Discover our carefully crafted culinary offerings
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Featured Image Slider Section */}
          <div className="relative group">
            {/* Background Glow Effect */}
            <div 
              className={`absolute -inset-4 bg-gradient-to-r ${activeMenu.bgGradient} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
            />
            
            {/* Main Image Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-100">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeMenu.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative"
                >
                  <img 
                    src={activeMenu.image} 
                    alt={activeMenu.title} 
                    className="w-full h-[420px] object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows - On Image */}
              <button 
                onClick={() => {
                  prevMenu();
                  setIsAutoPlaying(false);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous menu"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => {
                  nextMenu();
                  setIsAutoPlaying(false);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next menu"
              >
                <ChevronRight size={20} />
              </button>
              
              {/* Auto-play Indicator */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute bottom-4 left-4 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 text-xs"
                aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                {isAutoPlaying ? "⏸" : "▶"}
              </button>
              
              {/* Progress Bar */}
              {isAutoPlaying && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-orange-500 z-20"
                />
              )}
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {menuData.map((menu, idx) => (
                <button
                  key={menu.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setActiveMenu(menu);
                    setIsExpanded(false);
                    setIsAutoPlaying(false);
                  }}
                  className={`transition-all duration-300 ${
                    activeMenu.id === menu.id
                      ? "w-6 h-2 bg-red-600 rounded-full"
                      : "w-2 h-2 bg-gray-300 rounded-full hover:bg-red-400"
                  }`}
                  aria-label={`Go to ${menu.title}`}
                />
              ))}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-l-2 border-b-2 border-red-200 rounded-bl-xl hidden lg:block" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-r-2 border-t-2 border-red-200 rounded-tr-xl hidden lg:block" />
          </div>

          {/* Text and Interactive Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenu.id}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-4"
            >
              
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">
                {activeMenu.title}
              </h2>
              
              {/* Description */}
              <div className="space-y-2">
                <p className="text-gray-600 leading-relaxed text-sm font-medium">
                  {displayedDescription}
                </p>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-red-600 font-semibold hover:text-red-700 transition-colors inline-flex items-center gap-1 group text-sm"
                >
                  {isExpanded ? 'Show less' : 'Read more'}
                  <ChevronRight 
                    size={14} 
                    className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`}
                  />
                </button>
              </div>
              
              {/* Manual Navigation Arrows */}
              <div className="flex gap-2 pt-2">
                <button 
                  onClick={() => {
                    prevMenu();
                    setIsAutoPlaying(false);
                  }}
                  className="group w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  aria-label="Previous menu"
                >
                  <ChevronLeft size={18} className="group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={() => {
                    nextMenu();
                    setIsAutoPlaying(false);
                  }}
                  className="group w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  aria-label="Next menu"
                >
                  <ChevronRight size={18} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>
              
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;