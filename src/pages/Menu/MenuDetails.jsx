import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const BASE_URL = "https://api.chennaicaterers.in";

const MenuDetails = () => {
  const { type } = useParams();
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, [type]);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      // Depending on your Strapi setup, you might need to append ?populate=* // to ensure 'foods' array is fetched if it stops showing up.
      const res = await axios.get(`${BASE_URL}/api/menus/${type}`);
      setMenu(res.data?.data || []);
    } catch (err) {
      console.error("Error fetching menu:", err);
      setMenu([]);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (imageObj) => {
    if (!imageObj) return null;
    const url = imageObj.formats?.medium?.url || imageObj.url;
    return url ? `${BASE_URL}${url}` : null;
  };

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 90, damping: 15 }
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 pt-28">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="relative w-20 h-20"
        >
          <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-red-600 rounded-full border-t-transparent shadow-[0_0_20px_rgba(220,38,38,0.3)]"></div>
        </motion.div>
        <motion.p 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-8 text-gray-500 font-bold tracking-widest uppercase text-sm"
        >
          Curating Flavors...
        </motion.p>
      </div>
    );
  }

  if (menu.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 relative px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 text-center max-w-md w-full relative overflow-hidden"
        >
          {/* Strict Red Gradient Top Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 to-red-700"></div>
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl drop-shadow-sm">🍽️</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">No {type} Menu</h2>
          <p className="text-gray-500 font-medium text-base">Our chefs are currently updating this section. Please check back soon!</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] relative overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-red-50/60 to-transparent pointer-events-none"></div>
      <div className="absolute top-20 -left-40 w-96 h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 -right-40 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 pt-32 px-4 md:px-8 pb-24 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1.5 px-4 bg-red-50 text-red-600 font-extrabold tracking-widest uppercase text-xs mb-4 rounded-full">
            Discover Our
          </span>
          <h1 className="text-4xl md:text-6xl font-black capitalize text-gray-900 tracking-tight mb-6">
            {type} <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Menu</span>
          </h1>
          <p className="text-gray-500 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our carefully curated selection of authentic and exquisite catering options designed for your perfect event.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {menu.map((item) => {
            // Calculate total package price from foods array
            const packagePrice = item.foods?.reduce((total, food) => total + (food.price || 0), 0) || 0;

            return (
              <motion.div key={item.id} variants={itemVariants} className="group h-full">
                <Link 
                  to={`/menu-item/${item.documentId}`}
                  state={{ itemData: item }}
                  className="flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:shadow-red-900/5 border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 h-full relative cursor-pointer"
                >
                  {/* Image Section */}
                  <div className="h-56 w-full relative overflow-hidden bg-gray-50">
                    {item.image ? (
                      <>
                        <img
                          src={getImageUrl(item.image)}
                          alt={item.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-300 bg-gray-50">
                        <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                    )}
                    
                    {/* Floating Action Button inside Image */}
                    <div className="absolute bottom-4 right-4 bg-white w-11 h-11 rounded-full flex items-center justify-center text-red-600 shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 z-10">
                      <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </div>

                    {/* Price Badge on Image overlay */}
                    {packagePrice > 0 && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm z-10 border border-white/20">
                        <span className="text-red-600 font-black text-sm">₹{packagePrice}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-grow bg-white z-10 relative">
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-xl font-bold text-gray-900 capitalize group-hover:text-red-600 transition-colors duration-300 line-clamp-1">
                        {item.title}
                      </h2>
                    </div>
                    
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6 flex-grow">
                      {item.description || "A delicious, chef-crafted selection perfect for your special occasion."}
                    </p>
                    
                    {/* Package Highlight */}
                    <div className="mt-auto mb-4 bg-gray-50 rounded-xl p-3 flex justify-between items-center border border-gray-100">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Package Price</span>
                        <span className="text-lg font-black text-gray-900">₹{packagePrice}</span>
                      </div>
                      <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-md">
                        {item.foods?.length || 0} Items
                      </span>
                    </div>

                    {/* Footer Line */}
                    <div className="w-full h-1 bg-gray-100 mt-2 rounded-full overflow-hidden">
                      <div className="w-0 h-full bg-red-600 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default MenuDetails;