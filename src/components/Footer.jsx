import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaHeart } from "react-icons/fa";
import { UtensilsCrossed, ArrowRight } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "Our Menu", path: "/menu" },
    { name: "Catering Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-[#0f172a] pt-24 pb-8 border-t-[4px] border-red-600 font-sans text-slate-300 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <UtensilsCrossed size={500} className="absolute -top-20 -right-20 text-white rotate-12" />
        <UtensilsCrossed size={400} className="absolute -bottom-20 -left-20 text-white -rotate-12" />
        {/* Subtle radial gradient for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600 rounded-full blur-[150px] opacity-[0.08]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Changed to 3 Columns since Contact is removed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12 mb-20">
          
          {/* 1. Brand Section */}
          <div className="flex flex-col">
            <Link to="/" className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6 inline-block">
              Chennai <span className="text-red-500">Caterers</span>
            </Link>
            <p className="text-slate-400 text-[15px] leading-relaxed mb-8 font-medium pr-8">
              Delivering hot, fresh, and authentic meals straight to your door. We blend traditional recipes with modern hygiene to be your trusted partner for every occasion.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="bg-slate-800/80 p-3.5 rounded-xl text-slate-300 shadow-sm border border-slate-700/50 hover:-translate-y-1.5 hover:text-white hover:bg-red-600 hover:border-red-500 hover:shadow-[0_10px_20px_rgba(220,38,38,0.2)] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="lg:pl-8">
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-orange-400 to-orange-600 inline-block"></span>
              Explore
            </h3>
            <ul className="flex flex-col gap-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center gap-2 text-slate-400 font-medium text-base hover:text-white transition-colors duration-300 w-fit"
                  >
                    <span className="w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-4 rounded-full"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Us (COMMENTED OUT) */}
          {/* <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-red-400 to-red-600 inline-block"></span>
              Contact Info
            </h3>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-slate-800 p-2.5 rounded-lg group-hover:bg-red-500/20 transition-colors">
                  <MapPin size={20} className="text-red-500" />
                </div>
                <span className="text-slate-400 text-[15px] font-medium group-hover:text-white transition-colors mt-1">
                  123 Food Street, T. Nagar,<br />
                  Chennai, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-slate-800 p-2.5 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <Phone size={20} className="text-green-500" />
                </div>
                <span className="text-slate-400 text-[15px] font-medium group-hover:text-white transition-colors">
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="bg-slate-800 p-2.5 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                  <Mail size={20} className="text-orange-500" />
                </div>
                <span className="text-slate-400 text-[15px] font-medium group-hover:text-white transition-colors">
                  hello@chennaicaters.in
                </span>
              </li>
            </ul>
          </div>
          */}

          {/* 4. Newsletter / CTA */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-green-400 to-green-600 inline-block"></span>
              Stay Updated
            </h3>
            <p className="text-slate-400 text-[15px] font-medium mb-6 leading-relaxed">
              Subscribe to our newsletter for exclusive catering offers, event tips, and fresh menu updates!
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-5 py-3.5 rounded-xl border border-slate-700/50 bg-slate-800/50 text-white placeholder-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
              />
              <button 
                type="submit" 
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] hover:shadow-[0_6px_20px_rgba(220,38,38,0.23)] hover:-translate-y-0.5 group"
              >
                <span>Subscribe Now</span>
                <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyright & Developer Link */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Chennai Caters. All rights reserved.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm font-medium">
            <div className="flex gap-6 text-slate-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
            
            {/* Divider visible only on larger screens */}
            <span className="hidden sm:block text-slate-700">|</span>
            
            {/* Developer Tag */}
            <p className="flex items-center gap-1.5 text-slate-400">
              Developed with <FaHeart className="text-red-500 text-xs animate-pulse" /> by 
              <a 
                href="https://www.jgntechnologies.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 font-bold transition-colors ml-1"
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