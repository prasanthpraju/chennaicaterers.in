import React, { useState, useEffect } from 'react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Replace with your actual WhatsApp business number
  const phoneNumber = "7904431876";
  const defaultMessage = "Hello Chennai Caterers! I would like to inquire about your catering services.";

  // Handle the typing effect sequence when opened
  useEffect(() => {
    if (isOpen && !showMessage) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setShowMessage(true);
      }, 1500); // 1.5 seconds of "typing..."
      return () => clearTimeout(timer);
    }
  }, [isOpen, showMessage]);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end font-sans">
      
      {/* --- Chat Window UI --- */}
      <div 
        className={`bg-white w-[calc(100vw-2rem)] sm:w-80 max-w-[360px] rounded-2xl shadow-2xl mb-4 overflow-hidden border border-gray-200 origin-bottom-right transition-all duration-300 ease-out ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        
        {/* Header (Official WhatsApp Dark Green) */}
        <div className="bg-[#075e54] p-4 flex items-center justify-between text-white shadow-md relative z-10">
          <div className="flex items-center space-x-3">
            
             
            
            <div>
              <h3 className="font-bold text-sm leading-tight">Chennai Caterers</h3>
              <div className="flex items-center space-x-1 mt-0.5">
                {/* <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse shadow-[0_0_4px_rgba(37,211,102,0.8)]"></span>
                <p className="text-[11px] text-green-100 font-medium">Online | Typically replies instantly</p> */}
              </div>
            </div>
          </div>
          
          {/* Close Button */}
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-white/80 hover:text-white cursor-pointer hover:bg-white/10 p-1.5 rounded-full transition-colors focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Chat Body (Official WhatsApp Chat Background Color) */}
        <div className="bg-[#e5ddd5] p-5 min-h-[200px] max-h-[60vh] overflow-y-auto flex flex-col justify-start space-y-3 relative">
          
          {/* Subtle background overlay to mimic WhatsApp pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

          {/* Typing Indicator */}
          {isTyping && (
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm self-start inline-block w-fit relative z-10 animate-fade-in">
               <div className="flex space-x-1.5 items-center h-4 px-1">
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          )}

          {/* Actual Message */}
          {showMessage && (
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm text-sm text-gray-800 shadow-sm inline-block max-w-[90%] relative pb-6 z-10 animate-fade-in transform transition-all duration-300 translate-y-0">
              <span className="font-bold text-[#075e54] mb-1.5 text-xs block">Chennai Caterers Support</span>
              Hi there! 👋 <br/><br/> Welcome to Chennai Caterers. How can we help you make your next event delicious?
              
              {/* Timestamp */}
              <div className="absolute bottom-1.5 right-2 flex items-center space-x-1">
                <span className="text-[10px] text-gray-400">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Footer with Action Button (Official WhatsApp Bright Green) */}
        <div className="p-4 bg-white border-t border-gray-100 flex justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] text-white w-full py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-[#1ebe5d] active:scale-[0.98] transition-all shadow-md group"
          >
            <svg className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.004-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>

      {/* --- Floating Toggle Button (Official WhatsApp Bright Green) --- */}
      <div className="relative group">
        {/* Tooltip (Hidden on small screens, shows on hover on desktop) */}
        {!isOpen && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-sm font-semibold px-4 py-2 rounded-xl shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block pointer-events-none whitespace-nowrap">
            Need help? Chat with us
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-r border-t border-gray-100"></div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#25D366]/30 hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center justify-center focus:outline-none"
          aria-label="Toggle WhatsApp Chat"
        >
          {isOpen ? (
            <svg className="w-7 h-7 sm:w-8 sm:h-8 transition-transform rotate-90 scale-in" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current transition-transform scale-in" viewBox="0 0 16 16">
               <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.004-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          )}
        </button>
      </div>

    </div>
  );
};

export default WhatsAppWidget;