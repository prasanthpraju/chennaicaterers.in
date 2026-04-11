import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smile, ChefHat, Target, Lightbulb
} from 'lucide-react';

// Assets
import Aboutimg from "../assets/CateringSection/about.png";
import Aboutimg1 from "../assets/CateringSection/about1.png";
import Aboutimg2 from "../assets/CateringSection/about2.png";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#EC2290]/10 selection:text-[#EC2290]">
      
      {/* 1. MOBILE-OPTIMIZED HERO */}
      <section className="relative w-full bg-white flex justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1 }}
          className="relative w-full h-[35vh] sm:h-[45vh] md:h-[65vh] flex items-center justify-center"
        >
          <img 
            src={Aboutimg}
            alt="Our Master Chefs"
            /* On mobile (default), we scale the image up (scale-125 or 150) 
               to make the chefs look larger and more "heroic"
            */
            className="w-full h-full object-contain md:object-contain scale-125 md:scale-100 object-center" 
          />
        </motion.div>
        {/* Soft blend to prevent a hard line at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* 2. THE STORY SECTION - Improved Mobile Layout */}
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div {...fadeIn} className="order-2 lg:order-1">
            <div className="space-y-3 mb-6 md:mb-8">
              <span className="text-[10px] font-bold text-[#EC2290] uppercase tracking-[0.3em] block">
                The Story
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight leading-[1.1]">
                Premium Catering <br className="hidden md:block" /> Experts in Chennai
              </h2>
              <div className="w-12 h-1 bg-[#EC2290] rounded-full mt-4"></div>
            </div>
            
            <div className="space-y-4 md:space-y-6 mb-8">
              <p className="text-gray-500 leading-relaxed text-[15px] md:text-lg">
                <strong className="text-gray-900 font-bold">Chennai Caterers</strong> began with a simple mission: to bring the rich, authentic, and diverse flavors of Indian cuisine to every celebration.
              </p>
              <p className="text-gray-500 leading-relaxed text-[14px] md:text-base hidden md:block">
                From hand-picking the freshest local ingredients to following centuries-old traditional recipes, our master chefs pour their heart into every dish.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-gray-50 p-3 pr-6 rounded-full border border-gray-100 inline-flex">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-900 rounded-full flex items-center justify-center text-[#EC2290] font-black text-sm md:text-lg">
                 CC
               </div>
               <div>
                 <p className="text-gray-900 font-bold text-[10px] md:text-xs uppercase tracking-wide leading-none">Management Team</p>
                 <p className="text-gray-400 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.1em] mt-1">Since 2008</p>
               </div>
            </div>
          </motion.div>

          {/* Mobile-Friendly Image Grid (Samosa & Biryani) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex gap-3 md:gap-6 h-[280px] sm:h-[350px] md:h-[500px]"
          >
            <div className="w-1/2 h-full pt-6 md:pt-12">
              <img 
                src={Aboutimg1} 
                alt="Kitchen" 
                className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[3rem] shadow-lg" 
              />
            </div>
            <div className="w-1/2 h-full pb-6 md:pb-12">
              <img 
                src={Aboutimg2} 
                alt="Platter" 
                className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[3rem] shadow-lg" 
              />
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* 3. CORE VALUES - Responsive Cards */}
      <div className="bg-gray-50/50 py-16 md:py-32 rounded-[2.5rem] md:rounded-[4rem] mx-4 md:mx-10 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-[10px] font-bold text-[#EC2290] uppercase tracking-[0.3em] block mb-3">Philosophy</span>
            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-tight">Our Foundation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              { icon: Smile, title: "Who We Are?", desc: "With years of experience, we master changing taste options to provide a delicious and exciting selection of catering packages." },
              { icon: ChefHat, title: "What We Do?", desc: "We provide food for events in several ways like traditional banana leaf meals and grand buffets, exactly as you wish." },
              { icon: Target, title: "Our Mission", desc: "To provide all kinds of catering services for personal & corporate events with the assurance of best quality." },
              { icon: Lightbulb, title: "Our Vision", desc: "To become the NO 1 catering service provider in Chennai, by means of absolute professionalism and reliability." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-100 p-6 md:p-10 rounded-[1.5rem] md:rounded-[3rem] shadow-sm transition-all"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={22} className="text-[#EC2290]" />
                </div>
                <h3 className="text-lg md:text-2xl font-extrabold text-gray-900 uppercase tracking-tight mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[13px] md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}