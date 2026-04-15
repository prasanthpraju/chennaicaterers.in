import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isOpen) setMobileMenuExpanded(false);
  }, [isOpen]);

  const handleNavigation = (path) => {
    setIsOpen(false);
    setMobileMenuExpanded(false);
    
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Menu",
      subLinks: [
        { name: "Morning", path: "/menu/breakfast" },
        { name: "Lunch", path: "/menu/lunch" },
        { name: "Dinner", path: "/menu/dinner" },
      ],
    },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-[#EC2290] backdrop-blur-lg shadow-md py-3"
          : "bg-[#EC2290] backdrop-blur-md shadow-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full relative">
        {/* Left: Logo */}
        <div className="flex-1 flex justify-start z-50">
          <button 
            onClick={() => handleNavigation("/")} 
            className="flex items-center px-1 focus:outline-none cursor-pointer"
          >
            <img
              src="/logo1.png"
              alt="Chennai Caters Logo"
              className="h-10 md:h-12 w-auto object-contain mix-blend-multiply"
            />
          </button>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-10 lg:gap-12">
          {navLinks.map((link) => {
            const isMainActive = link.path && location.pathname === link.path;
            const isSubActive = link.subLinks?.some(
              (sub) => location.pathname === sub.path,
            );
            const isActive = isMainActive || isSubActive;

            return (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <div
                    className={`flex items-center gap-1.5 relative font-bold text-[15px] uppercase tracking-wide transition-colors duration-300 py-2 cursor-pointer rounded-md px-1 ${
                      isActive
                        ? "text-white" 
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      strokeWidth={3}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                    <span
                      className={`absolute left-0 bottom-0 h-[3px] bg-white transition-all duration-300 rounded-full ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className={`flex items-center gap-1 relative font-bold text-[15px] uppercase tracking-wide transition-colors duration-300 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md px-1 cursor-pointer ${
                      isActive
                        ? "text-white"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 h-[3px] bg-white transition-all duration-300 rounded-full ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                )}

                {/* Desktop Dropdown */}
                {link.subLinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-2 flex flex-col">
                      {link.subLinks.map((subLink) => (
                        <button
                          key={subLink.name}
                          onClick={() => handleNavigation(subLink.path)}
                          className={`px-4 py-3 text-sm font-bold uppercase tracking-wider transition-colors text-left cursor-pointer ${
                            location.pathname === subLink.path
                              ? "bg-pink-50 text-[#EC2290]"
                              : "text-gray-700 hover:bg-pink-50 hover:text-[#EC2290]"
                          }`}
                        >
                          {subLink.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex flex-1 justify-end"></div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-1 focus:outline-none rounded-lg transition-transform duration-300 hover:bg-white/20 cursor-pointer"
          >
            {isOpen ? (
              <X size={28} strokeWidth={2.5} />
            ) : (
              <Menu size={28} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-2">
          {navLinks.map((link) => {
            const isMainActive = link.path && location.pathname === link.path;
            const isSubActive = link.subLinks?.some(
              (sub) => location.pathname === sub.path,
            );
            const isActive = isMainActive || isSubActive;

            return (
              <div key={link.name} className="flex flex-col">
                <div className="flex items-center justify-between border-b border-gray-100 pr-2">
                  {link.subLinks ? (
                    <button
                      onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
                      className={`text-lg font-bold uppercase tracking-wide transition-colors py-3 px-2 rounded-lg flex-1 text-left flex justify-between items-center cursor-pointer ${
                        isActive
                          ? "text-[#EC2290] bg-pink-50"
                          : "text-black hover:text-[#EC2290]" 
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={20}
                        strokeWidth={2.5}
                        className={`transition-transform duration-300 ${
                          mobileMenuExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className={`text-lg font-bold uppercase tracking-wide transition-colors py-3 px-2 rounded-lg flex-1 text-left cursor-pointer ${
                        isActive
                          ? "text-[#EC2290] bg-pink-50"
                          : "text-black hover:text-[#EC2290]"
                      }`}
                    >
                      {link.name}
                    </button>
                  )}
                </div>

                {link.subLinks && (
                  <div
                    className={`flex flex-col overflow-hidden transition-all duration-300 bg-gray-50/50 rounded-b-lg ${
                      mobileMenuExpanded
                        ? "max-h-64 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.subLinks.map((subLink) => (
                      <button
                        key={subLink.name}
                        onClick={() => handleNavigation(subLink.path)}
                        className={`pl-6 pr-4 py-3 text-sm font-bold uppercase tracking-wider border-l-4 transition-colors text-left cursor-pointer ${
                          location.pathname === subLink.path
                            ? "border-[#EC2290] text-[#EC2290] bg-white"
                            : "border-transparent text-gray-600 hover:text-[#EC2290]"
                        }`}
                      >
                        {subLink.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}