import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import your local images
import breakfastImg from "../../assets/CateringSection/breakfast.png";
import lunchImg from "../../assets/CateringSection/lunch.png";
import dinnerImg from "../../assets/CateringSection/dinner.png";

const BASE_URL = "https://api.chennaicaterers.in";

const SubMenuDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const itemData = location.state?.itemData;

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(50);
  
  // Logic to strip numbers for a clean look, or add "1" if you prefer
  const cleanTitle = itemData?.title?.replace(/\d+/g, '').trim() || 'Menu';

  const packagePrice = itemData?.foods?.reduce((total, food) => total + (food.price || 0), 0) || 0;
  const totalBookingPrice = packagePrice * (guestCount || 0);

  useEffect(() => {
    if (isBookingModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isBookingModalOpen]);

  const getImageUrl = (imageObj, size = 'medium') => {
    if (!imageObj) return null;
    const url = imageObj.formats?.[size]?.url || imageObj.url;
    return url ? `${BASE_URL}${url}` : null;
  };

  if (!itemData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h2 className="text-2xl font-black uppercase tracking-tighter text-gray-900">Menu Not Found</h2>
        <button onClick={() => navigate(-1)} className="mt-6 text-[#EC2290] font-black uppercase text-[10px] tracking-widest border-b-2 border-[#EC2290] pb-1">Return</button>
      </div>
    );
  }

  const heroImage = (() => {
    const title = (itemData.title || '').toLowerCase();
    if (title.includes('breakfast')) return breakfastImg;
    if (title.includes('dinner')) return dinnerImg;
    if (title.includes('lunch')) return lunchImg;
    return lunchImg;
  })();

  const handleIncrement = () => setGuestCount(prev => (prev === "" ? 1 : prev + 1));
  const handleDecrement = () => setGuestCount(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#EC2290]/10">
      
      {/* Tall Hero Section */}
      <div className="relative h-[55vh] md:h-[75vh] w-full bg-gray-950 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 0.9, scale: 1 }} transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        
        {/* Fixed Font Action Bar */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
          
          <div className="flex-1 hidden md:block">
            <button onClick={() => navigate(-1)} className="group flex items-center text-gray-400 hover:text-black font-black uppercase tracking-[0.2em] text-[10px] transition-all">
              <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeWidth="3" /></svg>
              Collection
            </button>
          </div>

          <div className="flex-1 text-center mb-6 md:mb-0">
            <span className="text-[9px] font-black text-[#EC2290] uppercase tracking-[0.4em] block mb-1">Detailed Selection</span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter leading-none">
               {cleanTitle} 1
            </h2>
          </div>

          <div className="flex-1 flex items-center justify-center md:justify-end gap-10">
            <div className="text-right">
              <p className="text-[9px] font-black text-[#EC2290] uppercase tracking-widest mb-1">Price Per Plate</p>
              <p className="text-3xl font-black text-gray-900 tracking-tighter">₹{packagePrice}</p>
            </div>
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-[#EC2290] text-white px-10 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.2em] hover:shadow-[0_15px_40px_rgba(236,34,144,0.3)] transition-all active:scale-95"
            >
              Reserve Menu
            </button>
          </div>
        </div>

        {/* About & Inclusions - Description is fetched here */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20 mb-20">
          <div className="lg:col-span-5">
            <span className="text-[10px] font-black text-[#EC2290] uppercase tracking-widest block mb-4">About</span>
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter mb-6 leading-tight">
              Culinary <br /> {cleanTitle} Composition
            </h3>
            {/* Fetched Description */}
            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
              {itemData.description || `Experience our premium ${cleanTitle} selection, meticulously prepared to deliver authentic flavors and a sophisticated dining experience for your event.`}
            </p>
          </div>

          <div className="lg:col-span-7">
            <span className="text-[10px] font-black text-[#EC2290] uppercase tracking-widest block mb-4">Inclusions</span>
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3">
              {itemData.foods?.map((food, index) => (
                <div key={food.id} className="bg-gray-50/50 border border-gray-100 rounded-xl px-4 py-4 flex items-center justify-between md:justify-start hover:bg-white hover:shadow-md transition-all group">
                  <div className="flex items-center">
                    <span className="text-[10px] font-black text-[#EC2290] mr-2">{(index + 1).toString().padStart(2, '0')}</span>
                    <span className="text-[11px] font-black text-gray-800 uppercase tracking-tight mr-4">{food.name}</span>
                  </div>
                  <span className="text-[9px] font-black text-gray-400">₹{food.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[10px] font-black text-[#EC2290] uppercase tracking-widest block mb-2">Visuals</span>
              <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">Platter Preview</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {itemData.foods?.map((food) => (
              <div key={food.id} className="group bg-white rounded-2xl md:rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-[0_25px_50px_rgba(236,34,144,0.08)] transition-all">
                <div className="h-40 md:h-64 overflow-hidden bg-gray-50 relative">
                  <img src={getImageUrl(food.image) || heroImage} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20 shadow-sm">
                    <span className="text-[#EC2290] font-black text-[10px]">₹{food.price}</span>
                  </div>
                </div>
                <div className="p-5 md:p-6 text-center md:text-left">
                  <h3 className="text-[11px] md:text-xs font-black text-gray-900 uppercase tracking-tight group-hover:text-[#EC2290] transition-colors">{food.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Improved Reservation Modal with Sidebar */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsBookingModalOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              exit={{ opacity: 0, y: 50, scale: 0.95 }} 
              className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]"
            >
              {/* Sidebar Image */}
              <div className="hidden md:block w-2/5 relative">
                <img src={heroImage} className="absolute inset-0 w-full h-full object-cover" alt="Reservation" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="text-[9px] font-black text-[#EC2290] uppercase tracking-[0.3em] mb-2 block">Premium Catering</span>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{cleanTitle} Selection</h2>
                  <p className="text-white/60 text-[10px] mt-4 font-medium leading-relaxed">Secure your date for an unparalleled culinary journey.</p>
                </div>
              </div>

              {/* Reservation Content */}
              <div className="flex-1 p-8 md:p-14 overflow-y-auto">
                <div className="flex justify-between items-start mb-10">
                  <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Reservation</h3>
                  <button onClick={() => setIsBookingModalOpen(false)} className="text-gray-300 hover:text-black transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeWidth="3"/></svg>
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Guest Counter */}
                  <div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Guests Count</span>
                      <div className="flex items-center bg-white border border-gray-200 rounded-full p-1.5 shadow-sm">
                        <button onClick={handleDecrement} className="w-10 h-10 flex items-center justify-center font-black text-lg hover:text-[#EC2290] transition-colors">—</button>
                        <span className="font-black text-xl w-14 text-center text-gray-900">{guestCount}</span>
                        <button onClick={handleIncrement} className="w-10 h-10 flex items-center justify-center font-black text-lg hover:text-[#EC2290] transition-colors">+</button>
                      </div>
                    </div>
                    
                    <div className="flex items-end justify-between border-t border-gray-200 pt-8">
                      <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Total Value</span>
                      <span className="text-4xl font-black text-gray-900 tracking-tighter">₹{totalBookingPrice.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="YOUR FULL NAME" className="w-full bg-gray-50 border border-gray-100 p-5 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest outline-none focus:ring-2 focus:ring-[#EC2290]/20" />
                    <input type="tel" placeholder="CONTACT NUMBER" className="w-full bg-gray-50 border border-gray-100 p-5 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest outline-none focus:ring-2 focus:ring-[#EC2290]/20" />
                  </div>

                  <button className="w-full bg-[#EC2290] text-white py-6 rounded-[2rem] font-black uppercase text-[12px] tracking-[0.3em] shadow-2xl shadow-[#EC2290]/30 hover:scale-[1.02] transition-all">
                    Confirm Booking Request
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubMenuDetails;