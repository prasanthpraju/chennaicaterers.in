import { useNavigate } from "react-router-dom";
import { FaInstagram, FaHeart } from "react-icons/fa";
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
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  // Optional: Scroll to top when component mounts (for initial render)
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <footer className="bg-black pt-20 pb-8 border-t-[4px] border-[#EC2290] font-sans text-slate-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <UtensilsCrossed size={500} className="absolute -top-20 -right-20 text-white rotate-12" />
        <UtensilsCrossed size={400} className="absolute -bottom-20 -left-20 text-white -rotate-12" />
        {/* Subtle radial gradient for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EC2290] rounded-full blur-[150px] opacity-[0.15]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* 1. Brand & Social Section (Takes up more space on large screens) */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col items-center md:items-start text-center md:text-left">
            <button
              onClick={() => handleNavigation("/")}
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 inline-block hover:opacity-90 transition-opacity cursor-pointer"
            >
              Chennai <span className="text-[#EC2290]">Caterers</span>
            </button>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 font-medium max-w-xl">
              Delivering hot, fresh, and authentic meals straight to your door. We blend traditional recipes with modern hygiene to be your trusted partner for every occasion.
            </p>
            
            {/* Instagram Icon - Isolated & Highlighted */}
            <a
              href="https://www.instagram.com/chennaicaterers_india?igsh=ZjJkNjl1Nmt5eGdu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="inline-flex items-center justify-center gap-3 bg-white/5 px-6 py-3.5 rounded-2xl text-white/80 backdrop-blur-md border border-white/10 hover:-translate-y-1 hover:text-white hover:bg-[#EC2290] hover:border-[#EC2290] hover:shadow-[0_10px_20px_rgba(236,34,144,0.3)] transition-all duration-300 cursor-pointer"
            >
              <FaInstagram size={22} />
              <span className="font-semibold tracking-wide">Follow our journey</span>
            </a>
          </div>

          {/* 2. Quick Links Section */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white mb-8 flex items-center gap-3">
              <span className="w-1.5 h-7 rounded-full bg-gradient-to-b from-[#EC2290] to-[#ff4eb1] inline-block"></span>
              Explore
            </h3>
            <ul className="flex flex-col gap-4 w-full items-center md:items-start">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="group flex items-center gap-3 text-white/60 font-medium text-base hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    <span className="w-0 h-[2px] bg-[#EC2290] transition-all duration-300 group-hover:w-6 rounded-full hidden md:inline-block"></span>
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
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
          <p className="text-white/40 text-sm font-medium">
            © {new Date().getFullYear()} Chennai Caterers. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm font-medium">
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
            <p className="flex items-center gap-1.5 text-white/40 mt-2 sm:mt-0">
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