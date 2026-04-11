import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Play, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

const BASE_URL = "https://api.chennaicaterers.in";
const ITEMS_PER_PAGE = 12; 

// =========================================================================
// Helper: Safely grabs the best available resolution
// =========================================================================
const getOptimizedUrl = (mediaObj, preferLarge = false) => {
  if (!mediaObj) return null;
  const endpoint = preferLarge 
    ? (mediaObj.formats?.large?.url || mediaObj.url)
    : (mediaObj.formats?.medium?.url || mediaObj.formats?.small?.url || mediaObj.url);
  return endpoint ? `${BASE_URL}${endpoint}` : null;
};

// =========================================================================
// Animation Variants for Staggered Layout
// =========================================================================
const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "tween", ease: "easeOut", duration: 0.3 } },
  exit: { opacity: 0, y: 15, transition: { duration: 0.2 } }
};

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(true);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  // Lightbox State
  const [selectedIndex, setSelectedIndex] = useState(null);

  const tabs = ["All", "Photos", "Videos"];

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/api/galleries?populate=*&pagination[pageSize]=100`);
      const rawData = res.data?.data || [];

      const formattedItems = rawData.flatMap((item) => {
        const mediaEntries = [];
        const baseId = item.id || item.documentId;

        // 1. Process Photo entry
        if (item.image) {
          const safeImageUrl = getOptimizedUrl(item.image);
          const highResUrl = getOptimizedUrl(item.image, true);
          if (safeImageUrl) {
            mediaEntries.push({
              id: `${baseId}-photo`,
              type: "photo",
              category: "Photos",
              src: safeImageUrl,
              highResSrc: highResUrl, 
              title: item.title || "Photo Gallery",
            });
          }
        }

        // 2. Process Video entry
        if (item.video) {
          mediaEntries.push({
            id: `${baseId}-video`,
            type: "video",
            category: "Videos",
            src: `${BASE_URL}${item.video.url}`,
            poster: getOptimizedUrl(item.image),
            title: item.title || "Video Gallery",
          });
        }

        return mediaEntries;
      });

      setItems(formattedItems);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    } finally {
      setLoading(false);
    }
  };

  // =========================================================================
  // Filtering & Pagination Logic
  // =========================================================================
  const filteredItems = items.filter((item) => {
    if (activeTab === "All") return true; 
    if (activeTab === "Photos") return item.type === "photo";
    if (activeTab === "Videos") return item.type === "video";
    return true;
  });

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
    setSelectedIndex(null);
  }, [activeTab]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // =========================================================================
  // Lightbox Navigation Handlers
  // =========================================================================
  const openLightbox = (id) => {
    const index = filteredItems.findIndex(item => item.id === id);
    setSelectedIndex(index);
  };
  const closeLightbox = () => setSelectedIndex(null);

  const showNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    }
  }, [selectedIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [selectedIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);


  // Loading Spinner
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 pt-28">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="relative w-20 h-20"
        >
          <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#EC2290] rounded-full border-t-transparent shadow-[0_0_20px_rgba(236,34,144,0.3)]"></div>
        </motion.div>
        <motion.p 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-8 text-gray-500 font-bold tracking-widest uppercase text-xs"
        >
          Curating Portfolio...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-24 font-sans selection:bg-[#EC2290]/10 selection:text-[#EC2290]">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1.5 px-4 bg-[#EC2290]/10 text-[#EC2290] font-extrabold tracking-widest uppercase text-xs mb-4 rounded-full">
            Our Memories
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
            Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC2290] to-[#c81978]">Gallery</span>
          </h1>
          <p className="text-gray-500 font-medium text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A modern showcase of our finest catering setups, delicious food presentations, and moments from our events.
          </p>
        </motion.div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-full font-bold uppercase tracking-wide text-sm transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#EC2290] text-white shadow-lg shadow-[#EC2290]/30"
                : "bg-white text-gray-600 hover:bg-[#EC2290]/10 hover:text-[#EC2290] border border-gray-200 shadow-sm active:scale-95"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          layout
          variants={gridContainerVariants}
          initial="hidden"
          animate="show"
          key={`gallery-grid-${currentPage}-${activeTab}`}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8" 
        >
          <AnimatePresence mode="popLayout">
            {paginatedItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                onClick={() => openLightbox(item.id)} 
                className="group relative aspect-square md:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-900 shadow hover:shadow-2xl hover:shadow-[#EC2290]/15 transition-all duration-500 border border-gray-100/10 cursor-pointer"
              >
                {item.type === "photo" ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                  />
                ) : (
                  <div className="relative w-full h-full pointer-events-none">
                    <video
                      src={item.src}
                      poster={item.poster}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      muted
                      playsInline
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#EC2290]/90 transition-colors duration-300">
                        <Play className="w-5 h-5 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}

                {item.type === "photo" && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 pointer-events-none">
                    <h3 className="text-white text-base md:text-lg font-bold line-clamp-1 drop-shadow-md capitalize">
                      {item.title}
                    </h3>
                  </div>
                )}
                
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100 px-6"
          >
            <div className="w-20 h-20 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <ImageIcon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">Gallery under curation</h3>
            <p className="text-gray-500 font-medium max-w-sm mx-auto">Our chefs and setup team are busy documenting their finest work.</p>
          </motion.div>
        )}

        {/* Pagination UI */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-full border transition-all ${
                currentPage === 1 
                  ? "border-gray-200 text-gray-300 cursor-not-allowed" 
                  : "border-gray-300 text-gray-600 hover:border-[#EC2290] hover:text-[#EC2290] hover:bg-[#EC2290]/10"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-sm transition-all ${
                      currentPage === pageNum
                        ? "bg-[#EC2290] text-white shadow-md shadow-[#EC2290]/30"
                        : "bg-white border border-gray-200 text-gray-600 hover:border-[#EC2290] hover:text-[#EC2290]"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full border transition-all ${
                currentPage === totalPages 
                  ? "border-gray-200 text-gray-300 cursor-not-allowed" 
                  : "border-gray-300 text-gray-600 hover:border-[#EC2290] hover:text-[#EC2290] hover:bg-[#EC2290]/10"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Viewer */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-[#EC2290] p-3 rounded-full transition-all z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {filteredItems.length > 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); showPrev(); }}
                className="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-white/20 p-3 sm:p-4 rounded-full transition-all z-50"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            )}

            {filteredItems.length > 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); showNext(); }}
                className="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 hover:bg-white/20 p-3 sm:p-4 rounded-full transition-all z-50"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            )}

            <div 
              className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  {filteredItems[selectedIndex].type === "photo" ? (
                    <img
                      src={filteredItems[selectedIndex].highResSrc || filteredItems[selectedIndex].src}
                      alt={filteredItems[selectedIndex].title}
                      className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
                    />
                  ) : (
                    <video
                      src={filteredItems[selectedIndex].src}
                      className="max-h-[80vh] w-auto max-w-full rounded-lg shadow-2xl bg-black"
                      controls
                      autoPlay
                      playsInline
                    />
                  )}
                  
                  <div className="mt-4 text-center">
                    <h3 className="text-white text-lg sm:text-xl font-bold tracking-wide capitalize">
                      {filteredItems[selectedIndex].title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {selectedIndex + 1} of {filteredItems.length}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Gallery;