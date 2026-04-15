import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CateringSection1 from "../assets/CateringSection/sec1.png"
import CateringSection2 from "../assets/CateringSection/sec2.png"
import CateringSection3 from "../assets/CateringSection/sec3.png"
import CateringSection4 from "../assets/CateringSection/sec4.png"
import CateringSection5 from "../assets/CateringSection/sec5.png"
import CateringSection6 from "../assets/CateringSection/sec6.png"

// Monochromatic Calm Pink Gradients
const menuData = [
  {
    id: 1,
    title: "Break Fast Menu",
    description: "For all occasions and weddings, Chennai Catering Service provides the best breakfast menu; we also assist customers in building a customised menu.",
    longDescription: "Our breakfast menu features an exquisite selection of traditional South Indian delicacies including crispy dosas, fluffy idlis, flavorful vadas, and aromatic pongal. Each dish is prepared with authentic spices and fresh ingredients, ensuring a memorable start to any celebration.",
    image: CateringSection1,
    bgGradient: "from-[#FCE4EC]/40 to-[#F48FB1]/20"
  },
  {
    id: 2,
    title: "Lunch Menu",
    description: "Chennai Catering Service provides delicious lunch menus for a variety of gatherings and events; we also allow customers to create a custom menu.",
    longDescription: "Experience the richness of authentic Tamil Nadu cuisine with our elaborate lunch menus. From traditional banana leaf service to modern buffet presentations, we offer a wide range of vegetarian and non-vegetarian options.",
    image: CateringSection2,
    bgGradient: "from-[#F48FB1]/20 to-[#EC2290]/10"
  },
  {
    id: 3,
    title: "Dinner Menu",
    description: "Elegant dinner spreads featuring both South Indian specialties and fusion cuisine, perfect for evening receptions and formal gatherings.",
    longDescription: "Our dinner menu combines traditional flavors with contemporary presentation. Choose from our curated selection of starters, main courses, and desserts that will leave your guests impressed.",
    image: CateringSection3,
    bgGradient: "from-[#EC2290]/10 to-[#FCE4EC]/40"
  },
    {
      id: 4,
      title: "Wedding Specials",
      description: "Grand wedding catering with traditional South Indian flavors and elegant presentation to make your big day unforgettable.",
      longDescription: "Our wedding catering service is designed to deliver a luxurious and authentic experience. From classic banana leaf meals to multi-course premium buffets, we handle everything with perfection. We ensure taste, hygiene, and flawless service that matches your celebration scale.",
      image: CateringSection4,
      bgGradient: "from-[#FCE4EC]/40 to-[#EC2290]/15"
    },
    {
      id: 5,
      title: "Outdoor Catering",
      description: "Perfect catering solutions for outdoor events, beach parties, and garden celebrations with live cooking experience.",
      longDescription: "We specialize in outdoor catering setups including beach events, terrace parties, and garden weddings. Our team ensures seamless service with live cooking stations, fresh food preparation, and a vibrant dining experience anywhere you host.",
      image: CateringSection5,
      bgGradient: "from-[#F48FB1]/30 to-[#FCE4EC]/20"
    },
    {
      id: 6,
      title: "Corporate Catering",
      description: "Professional catering services tailored for corporate meetings, office events, and business gatherings.",
      longDescription: "Our corporate catering ensures timely delivery, premium quality food, and professional presentation. Whether it's office lunches, conferences, or team events, we provide customized menus that suit your business needs and impress your clients.",
      image: CateringSection6,
      bgGradient: "from-[#EC2290]/15 to-[#F48FB1]/20"
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
  
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextMenu();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);
  
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

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    exit: (direction) => ({ x: direction > 0 ? -300 : 300, opacity: 0, scale: 0.95, transition: { duration: 0.5, ease: "easeIn" } })
  };

  const contentVariants = {
    enter: (direction) => ({ x: direction > 0 ? 30 : -30, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] } },
    exit: (direction) => ({ x: direction > 0 ? -30 : 30, opacity: 0, transition: { duration: 0.3, ease: "easeIn" } })
  };

  return (
    <section className="bg-white py-20 md:py-28 font-sans overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[#EC2290] font-black text-[10px] tracking-[0.3em] uppercase mb-4 block">Our Offerings</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-4">
            Our Signature <span className="text-[#EC2290] relative inline-block">
              Menus
              <motion.svg 
                initial={{ width: 0 }}
                whileInView={{ width: "110%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-1 -left-[5%] h-1.5 text-[#FCE4EC]" 
                viewBox="0 0 200 10" 
                preserveAspectRatio="none"
                fill="currentColor"
              >
                <path d="M0,5 Q50,0 100,5 T200,5 L200,10 L0,10 Z" />
              </motion.svg>
            </span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 max-w-2xl mx-auto text-sm font-medium tracking-wide"
          >
            Discover our carefully crafted culinary offerings
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative group">
            <div 
              className={`absolute -inset-6 bg-gradient-to-r ${activeMenu.bgGradient} rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700`}
            />
            
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-50 transition-all duration-500 bg-white">
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
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
              
              <button 
                onClick={() => { prevMenu(); setIsAutoPlaying(false); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-800 hover:bg-[#EC2290] hover:text-white transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0"
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </button>
              <button 
                onClick={() => { nextMenu(); setIsAutoPlaying(false); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-gray-800 hover:bg-[#EC2290] hover:text-white transition-all duration-300 shadow-xl opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0"
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </button>
              
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute bottom-6 left-6 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#EC2290] transition-all duration-300 text-xs shadow-lg"
              >
                {isAutoPlaying ? "⏸" : "▶"}
              </button>
              
              {/* Calm Pink Progress bar */}
              {isAutoPlaying && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1.5 bg-[#EC2290] z-20"
                />
              )}
            </div>
            
            <div className="flex justify-center gap-3 mt-8">
              {menuData.map((menu, idx) => (
                <button
                  key={menu.id}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setActiveMenu(menu);
                    setIsExpanded(false);
                    setIsAutoPlaying(false);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    activeMenu.id === menu.id
                      ? "w-8 h-2.5 bg-[#EC2290]"
                      : "w-2.5 h-2.5 bg-[#FCE4EC] hover:bg-[#F48FB1]"
                  }`}
                  aria-label={`Go to ${menu.title}`}
                />
              ))}
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-20 h-20 border-l-4 border-b-4 border-[#FCE4EC] rounded-bl-[2rem] hidden lg:block" />
            <div className="absolute -top-6 -right-6 w-20 h-20 border-r-4 border-t-4 border-[#FCE4EC] rounded-tr-[2rem] hidden lg:block" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeMenu.id}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-6"
            >
              
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter">
                {activeMenu.title}
              </h2>
              
              <div className="w-12 h-1.5 bg-[#EC2290] rounded-full" />
              
              <div className="space-y-4">
                <p className="text-gray-500 leading-relaxed text-[15px] font-medium">
                  {displayedDescription}
                </p>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#EC2290] font-black uppercase tracking-widest hover:text-[#F48FB1] transition-colors inline-flex items-center gap-2 group text-xs"
                >
                  {isExpanded ? 'Read Less' : 'Read Full Story'}
                  <div className="w-6 h-6 rounded-full bg-[#FCE4EC] flex items-center justify-center group-hover:bg-[#EC2290] group-hover:text-white transition-all duration-300">
                    <ChevronRight 
                      size={14} 
                      strokeWidth={3}
                      className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-0.5'}`}
                    />
                  </div>
                </button>
              </div>
              
              <div className="flex gap-3 pt-6 border-t border-gray-100">
                <button 
                  onClick={() => { prevMenu(); setIsAutoPlaying(false); }}
                  className="group w-12 h-12 rounded-[1rem] border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#EC2290] hover:border-[#EC2290] hover:text-white transition-all duration-300 hover:shadow-sm hover:-translate-y-1"
                >
                  <ChevronLeft size={20} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={() => { nextMenu(); setIsAutoPlaying(false); }}
                  className="group w-12 h-12 rounded-[1rem] border-2 border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#EC2290] hover:border-[#EC2290] hover:text-white transition-all duration-300 hover:shadow-sm hover:-translate-y-1"
                >
                  <ChevronRight size={20} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
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