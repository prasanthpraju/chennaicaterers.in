import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";
import { UtensilsCrossed } from "lucide-react";
import { useEffect } from "react";

export default function Footer() {
  const navigate = useNavigate();

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Catering Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Function to handle navigation with scroll to top
  const handleNavigation = (path) => {
    // Check if we're already on the same page
    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  // Optional: Scroll to top when component mounts (for initial render)
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <footer className="bg-black pt-24 pb-8 border-t-[4px] border-[#EC2290] font-sans text-slate-300 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <UtensilsCrossed size={500} className="absolute -top-20 -right-20 text-white rotate-12" />
        <UtensilsCrossed size={400} className="absolute -bottom-20 -left-20 text-white -rotate-12" />
        {/* Subtle radial gradient for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EC2290] rounded-full blur-[150px] opacity-[0.15]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Refined 2-Column Layout for Premium Minimalist Look */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-20">
          
          {/* 1. Brand Section */}
          <div className="flex flex-col lg:max-w-2xl">
            <button 
              onClick={() => handleNavigation("/")}
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 inline-block text-left hover:opacity-90 transition-opacity cursor-pointer"
            >
              Chennai <span className="text-[#EC2290]">Caterers</span>
            </button>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10 font-medium">
              Delivering hot, fresh, and authentic meals straight to your door. We blend traditional recipes with modern hygiene to be your trusted partner for every occasion.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-5">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="bg-white/5 p-4 rounded-2xl text-white/70 backdrop-blur-md border border-white/10 hover:-translate-y-1.5 hover:text-white hover:bg-[#EC2290] hover:border-[#EC2290] hover:shadow-[0_10px_20px_rgba(236,34,144,0.3)] transition-all duration-300 cursor-pointer"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:min-w-[250px]">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-8 flex items-center gap-3">
              <span className="w-1.5 h-7 rounded-full bg-gradient-to-b from-[#EC2290] to-[#ff4eb1] inline-block"></span>
              Explore
            </h3>
            <ul className="flex flex-col gap-5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="group flex items-center gap-3 text-white/60 font-medium text-base hover:text-white transition-colors duration-300 w-fit cursor-pointer"
                  >
                    <span className="w-0 h-[2px] bg-[#EC2290] transition-all duration-300 group-hover:w-6 rounded-full"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300 uppercase tracking-widest text-sm font-bold">
                      {link.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Developer Link */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm font-medium">
            © {new Date().getFullYear()} Chennai Caters. All rights reserved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm font-medium">
            <div className="flex gap-6 text-white/40">
              <button 
                onClick={() => handleNavigation("/privacy")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavigation("/terms")}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
            
            {/* Divider visible only on larger screens */}
            <span className="hidden sm:block text-white/20">|</span>
            
            {/* Developer Tag */}
            <p className="flex items-center gap-1.5 text-white/40">
              Developed with <FaHeart className="text-[#EC2290] text-xs animate-pulse" /> by 
              <a 
                href="https://www.jgntechnologies.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#EC2290] font-bold transition-colors ml-1 cursor-pointer"
              >
                JGN Technologies
              </a>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}