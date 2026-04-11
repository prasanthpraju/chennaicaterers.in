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
      setLoading(false); // Simulated/API logic
      const res = await axios.get(`${BASE_URL}/api/menus/${type}`);
      setMenu(res.data?.data || []);
    } catch (err) {
      setMenu([]);
    } finally {
      setLoading(false);
    }
  };

  const getImageUrl = (imageObj) => {
    if (!imageObj) return null;
    const url = imageObj.formats?.small?.url || imageObj.url;
    return url ? `${BASE_URL}${url}` : null;
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-12 h-12 border-4 border-[#EC2290] border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#EC2290]/10">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        
        {/* Header: Reduced Font Sizes */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <span className="text-[9px] font-black tracking-[0.3em] text-[#EC2290] uppercase mb-3 block">Boutique Collection</span>
          <h1 className="text-3xl md:text-5xl font-black uppercase text-gray-900 tracking-tighter mb-4">
            {type} <span className="text-[#EC2290]">Selection</span>
          </h1>
          <p className="text-gray-500 text-xs md:text-sm max-w-xl mx-auto font-medium leading-relaxed">
            A curated anthology of authentic flavors designed for your distinguished events.
          </p>
        </motion.div>

        {/* Grid: Optimized Card Typography */}
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.05 }}}} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menu.map((item) => {
            const packagePrice = item.foods?.reduce((total, food) => total + (food.price || 0), 0) || 0;
            return (
              <motion.div key={item.id} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 }}}>
                <Link to={`/menu-item/${item.documentId}`} state={{ itemData: item }} className="group block bg-white rounded-[1.5rem] border border-gray-100 overflow-hidden hover:shadow-[0_20px_40px_rgba(236,34,144,0.08)] transition-all duration-500">
                  <div className="h-48 overflow-hidden relative">
                    <img src={getImageUrl(item.image)} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2 py-1 rounded-lg shadow-sm border border-white/20">
                      <span className="text-[#EC2290] font-black text-xs">₹{packagePrice}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h2 className="text-sm font-black text-gray-900 uppercase tracking-tight group-hover:text-[#EC2290] transition-colors mb-2">{item.title}</h2>
                    <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-2 mb-4 font-medium">{item.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                       <span className="text-[9px] font-black text-[#EC2290] uppercase tracking-widest bg-[#EC2290]/5 px-2 py-1 rounded-md">
                        {item.foods?.length || 0} Items
                      </span>
                      <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#EC2290] group-hover:text-white transition-all">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
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