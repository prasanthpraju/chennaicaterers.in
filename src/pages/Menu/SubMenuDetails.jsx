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

  // --- Booking Modal State ---
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(50); // Default to 50 people
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    date: "",
    eventType: ""
  });

  // Calculate Total Package Price (per person)
  const packagePrice = itemData?.foods?.reduce((total, food) => total + (food.price || 0), 0) || 0;
  
  // Calculate Grand Total (safely handle if guestCount is empty string)
  const totalBookingPrice = packagePrice * (guestCount || 0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isBookingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isBookingModalOpen]);

  const getImageUrl = (imageObj, size = 'medium') => {
    if (!imageObj) return null;
    const url = imageObj.formats?.[size]?.url || imageObj.url;
    return url ? `${BASE_URL}${url}` : null;
  };

  if (!itemData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 text-center max-w-md w-full"
        >
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Menu Not Found</h2>
          <p className="text-gray-500 mb-8 text-base">We couldn't load the details for this menu.</p>
          <button 
            onClick={() => navigate(-1)} 
            className="w-full py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold uppercase tracking-wide transition-all shadow-lg hover:shadow-red-600/30 cursor-pointer"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  // --- LOCAL IMAGES FOR HERO ---
  const getHeroImage = (title) => {
    const lowerTitle = (title || '').toLowerCase();
    if (lowerTitle.includes('breakfast')) return breakfastImg;
    if (lowerTitle.includes('dinner')) return dinnerImg;
    if (lowerTitle.includes('lunch')) return lunchImg;
    return lunchImg; 
  };

  const heroImage = getHeroImage(itemData.title);

  // --- Guest Count Handlers (Updated to step by 1) ---
  const handleIncrement = () => setGuestCount(prev => (prev === "" ? 1 : prev + 1));
  const handleDecrement = () => setGuestCount(prev => (prev > 1 ? prev - 1 : 1));
  
  const handleGuestChange = (e) => {
    const val = parseInt(e.target.value, 10);
    // Allow valid numbers greater than 0, or empty string to allow backspacing
    if (!isNaN(val) && val > 0) {
      setGuestCount(val);
    } else if (e.target.value === "") {
      setGuestCount("");
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!guestCount || guestCount < 1) {
      alert("Please enter a valid number of guests.");
      return;
    }
    // Here you would typically send the data to your API
    console.log("Booking Details:", { ...bookingForm, guestCount, totalBookingPrice, menu: itemData.title });
    alert("Booking Request Sent! We will contact you shortly.");
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      
      {/* Modern Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full bg-gray-900 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center opacity-70" 
          style={{ backgroundImage: `url('${heroImage}')` }}
        ></motion.div>
        
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white capitalize leading-tight tracking-tight drop-shadow-md">
              {itemData.title} Menu
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-2rem] relative z-20">
        
        {/* Floating Action Bar with Price Highlight */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center gap-6 mb-12 border border-gray-100">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-500 hover:text-red-600 font-bold uppercase tracking-wide text-sm transition-colors w-full sm:w-auto group cursor-pointer"
          >
            <div className="bg-gray-100 group-hover:bg-red-50 p-2 rounded-full mr-3 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </div>
            Back to Menus
          </button>

          {/* Highlighted Price Details Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <div className="text-center sm:text-right w-full sm:w-auto bg-gray-50 sm:bg-transparent p-3 sm:p-0 rounded-xl">
              <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Per Plate Price</p>
              <p className="text-3xl font-black text-gray-900">
                ₹<span className="text-red-600">{packagePrice}</span>
              </p>
            </div>
            <button 
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wide transition-all shadow-lg hover:shadow-red-600/40 w-full sm:w-auto active:scale-95 cursor-pointer"
            >
              Book This Menu
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
          {/* Description */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">About the Menu</h3>
            </div>
            <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
              {itemData.description || `Experience the finest selection of our ${itemData.title} menu, crafted to provide a truly memorable dining experience.`}
            </p>
          </div>

          {/* Included Items List */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Included Items</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {itemData.foods?.map((food, index) => (
                <div key={`tag-${food.id}`} className="bg-red-50 border border-red-100 rounded-full px-5 py-2.5 flex items-center hover:bg-red-100 transition-colors cursor-default">
                  <span className="text-red-600 font-extrabold text-sm mr-2">{index + 1}.</span>
                  <span className="text-red-900 font-semibold text-sm mr-3">{food.name}</span>
                  <span className="text-red-500/70 text-xs font-bold bg-white px-2 py-0.5 rounded-full shadow-sm">₹{food.price || 0}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-red-600 rounded-full"></div>
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">Menu Gallery</h3>
            </div>
            <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-bold uppercase tracking-wide">
              {itemData.foods?.length || 0} Items
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {itemData.foods?.map((food, index) => (
              <motion.div
                key={`card-${food.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 cursor-pointer"
              >
                <div className="h-56 relative overflow-hidden bg-gray-50 w-full">
                  {food.image ? (
                    <>
                      <img
                        src={getImageUrl(food.image)}
                        alt={food.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                      <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-xs font-bold uppercase tracking-widest mt-2">No Image</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg shadow-sm">
                    <span className="text-gray-900 font-black text-sm">₹{food.price || 0}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow items-start bg-white z-10">
                  <h3 className="text-lg font-bold text-gray-900 capitalize group-hover:text-red-600 transition-colors line-clamp-2">
                    {food.name}
                  </h3>
                  {food.description && (
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{food.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* ===================================================================== */}
      {/* ADVANCED BOOKING MODAL */}
      {/* ===================================================================== */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]"
            >
              
              {/* Close Button (Mobile/Desktop) */}
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="absolute top-4 right-4 z-20 bg-white/50 hover:bg-red-50 text-gray-800 hover:text-red-600 p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>

              {/* Left Side: Summary & Image */}
              <div className="hidden md:flex w-2/5 relative bg-gray-900 flex-col justify-end">
                <img 
                  src={heroImage} 
                  alt="Menu Overview" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                <div className="relative z-10 p-10">
                  <span className="inline-block py-1 px-3 bg-red-600 text-white font-bold tracking-widest uppercase text-[10px] mb-3 rounded-full">
                    Selected Menu
                  </span>
                  <h2 className="text-3xl font-black text-white capitalize leading-tight mb-2">
                    {itemData.title}
                  </h2>
                  <p className="text-gray-300 font-medium mb-6">
                    {itemData.foods?.length || 0} Premium Items Included
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1">Base Price</p>
                    <p className="text-2xl font-black text-white">₹{packagePrice} <span className="text-sm font-medium text-gray-400">/ plate</span></p>
                  </div>
                </div>
              </div>

              {/* Right Side: Interactive Form */}
              <div className="w-full md:w-3/5 bg-white p-6 md:p-10 overflow-y-auto">
                
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">Complete Booking</h3>
                  <p className="text-gray-500 text-sm mt-1">Customize your guest count and finalize details.</p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  
                  {/* --- Guest Counter & Total Calculation --- */}
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-6">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-200">
                      <div>
                        <label className="block text-sm font-extrabold text-gray-900 uppercase tracking-wide">Number of Guests</label>
                        <p className="text-xs text-gray-500 mt-0.5">Minimum 1 person</p>
                      </div>
                      
                      {/* Counter Controls */}
                      <div className="flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                        <button 
                          type="button" 
                          onClick={handleDecrement}
                          className="px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4"/></svg>
                        </button>
                        
                        <input 
                          type="number" 
                          value={guestCount}
                          onChange={handleGuestChange}
                          min="1"
                          className="w-16 text-center font-black text-lg text-gray-900 bg-transparent border-x border-gray-100 focus:outline-none appearance-none"
                        />
                        
                        <button 
                          type="button" 
                          onClick={handleIncrement}
                          className="px-4 py-3 text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"/></svg>
                        </button>
                      </div>
                    </div>

                    {/* Dynamic Total Display */}
                    <div className="flex items-end justify-between">
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Estimated Total</span>
                      <div className="text-right">
                        <span className="text-4xl font-black text-gray-900">
                          ₹{totalBookingPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* --- Personal Details Inputs --- */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-red-500 focus:border-red-500 block p-3.5 transition-colors" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-red-500 focus:border-red-500 block p-3.5 transition-colors" 
                        placeholder="+91 98765 43210" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Event Date</label>
                      <input 
                        type="date" 
                        required
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-red-500 focus:border-red-500 block p-3.5 transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">Event Type</label>
                      <select 
                        required
                        value={bookingForm.eventType}
                        onChange={(e) => setBookingForm({...bookingForm, eventType: e.target.value})}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-red-500 focus:border-red-500 block p-3.5 transition-colors"
                      >
                        <option value="">Select Event...</option>
                        <option value="wedding">Wedding / Reception</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="housewarming">Housewarming</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Action */}
                  <div className="pt-4 mt-2 border-t border-gray-100">
                    <button 
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-sm uppercase tracking-widest py-4 rounded-xl shadow-lg hover:shadow-red-600/30 transition-all active:scale-[0.98]"
                    >
                      Confirm Request
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-4">
                      No payment is required right now. Our team will contact you to finalize details.
                    </p>
                  </div>

                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default SubMenuDetails;