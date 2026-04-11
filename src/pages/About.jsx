import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Smile, ChefHat, Target, Lightbulb, 
  Users, Utensils, CalendarCheck, Star, Award
} from 'lucide-react';

// Assuming your image imports remain exactly the same
import Aboutimg from "../assets/CateringSection/about.png";
import Aboutimg1 from "../assets/CateringSection/about1.png";
import Aboutimg2 from "../assets/CateringSection/about2.png";

export default function About() {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] pt-[72px] font-sans selection:bg-red-500 selection:text-white">
      
      {/* 1. ADVANCED HERO BANNER */}
      <div className="relative h-[350px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
        <img 
          src={Aboutimg}
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Clean gradient overlay without the backdrop blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-10">
          <span className="inline-block py-1 px-3 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-sm font-bold tracking-widest uppercase mb-4">
            Discover Our Roots
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-2xl">
            About Our Kitchen
          </h1>
          <div className="flex items-center justify-center gap-3 text-sm md:text-base font-medium text-gray-300 bg-white/10 w-fit mx-auto px-6 py-2 rounded-full border border-white/10">
            <Link to="/" className="hover:text-red-400 transition-colors duration-300">Home</Link>
            <ChevronRight size={16} className="text-red-500" />
            <span className="text-white font-semibold">About Us</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN STORY SECTION (Modern Overlapping Layout) */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 relative z-10">
            <div className="inline-flex items-center gap-2 text-red-600 font-bold uppercase tracking-widest mb-4">
              <Award size={20} />
              <span>The Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
              The Finest Catering <br className="hidden lg:block"/> Experts in Chennai
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-8 shadow-sm"></div>
            
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              <strong className="text-gray-900 font-bold">Chennai Caterers</strong> began with a simple mission: to bring the rich, authentic, and diverse flavors of Indian cuisine to every celebration. We are not just food providers; we are culinary architects dedicated to making your events unforgettable.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              From hand-picking the freshest local ingredients to following centuries-old traditional recipes, our master chefs pour their heart into every dish. Whether it's a traditional banana leaf wedding feast, a corporate buffet, or an intimate family gathering, we handle the stress so you can enjoy the moment.
            </p>

            {/* Premium Signature Box */}
            <div className="flex items-center gap-5 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 inline-flex">
               <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-black text-xl shadow-inner tracking-tighter">
                 CC
               </div>
               <div>
                 <p className="text-gray-900 font-extrabold text-xl tracking-tight">The Chennai Caterers Team</p>
                 <p className="text-red-600 text-sm font-bold uppercase tracking-wide mt-0.5">Serving happiness since 2008</p>
               </div>
            </div>
          </div>

          {/* Advanced Image Grid Display - Removed blur blobs and rotate animations */}
          <div className="order-1 lg:order-2 relative mt-10 lg:mt-0">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              
              <img 
                src={Aboutimg1}
                alt="Chefs Prepping"
                className="absolute top-0 right-8 w-3/4 h-[65%] object-cover rounded-3xl shadow-2xl z-10 border-8 border-white"
              />
              <img 
                src={Aboutimg2}
                alt="Biryani Cooking" 
                className="absolute bottom-0 left-0 w-[65%] h-[60%] object-cover rounded-3xl shadow-2xl z-20 border-8 border-white"
              />
              
              {/* Floating Experience Badge */}
              <div className="absolute top-[45%] -left-6 lg:-left-12 -translate-y-1/2 bg-white/95 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center border border-white z-30 w-36 h-36">
                <div className="text-red-600 mb-2 bg-red-50 p-2 rounded-full">
                  <ChefHat size={28} />
                </div>
                <p className="text-4xl font-black text-gray-900 leading-none">15+</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center mt-2">Years of<br/>Excellence</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* 3. FLOATING STATISTICS ROW (Social Proof) */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 -mt-10 mb-20">
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-10 grid grid-cols-2 md:grid-cols-4 gap-10 divide-y-4 md:divide-y-0 md:divide-x divide-gray-50">
          {[
            { icon: Users, num: "10k+", label: "Happy Guests", color: "text-blue-500", bg: "bg-blue-50" },
            { icon: CalendarCheck, num: "500+", label: "Events Catered", color: "text-green-500", bg: "bg-green-50" },
            { icon: Utensils, num: "120+", label: "Signature Dishes", color: "text-orange-500", bg: "bg-orange-50" },
            { icon: Star, num: "4.9", label: "Average Rating", color: "text-yellow-500", bg: "bg-yellow-50" }
          ].map((stat, index) => (
            <div key={index} className={`flex flex-col items-center pt-8 md:pt-0 ${index < 2 ? 'pt-0' : ''}`}>
              <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4`}>
                <stat.icon size={28} strokeWidth={2.5} />
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-1">{stat.num}</h3>
              <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CORE VALUES GRID - Removed background blur orbs */}
      <div className="relative py-24 md:py-32 overflow-hidden mt-10">
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000&auto=format&fit=crop" 
            alt="Restaurant Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Chennai <span className="text-red-500">Caterers</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-6 rounded-full opacity-50"></div>
            <p className="text-gray-400 mt-6 font-medium text-lg tracking-wide uppercase">Our Core Philosophy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { icon: Smile, color: "text-red-400", bg: "bg-red-500/10", border: "hover:border-red-500/50", title: "Who We Are?", desc: "With years of experience, we master changing taste options to provide a delicious and exciting selection of catering packages to our clients." },
              { icon: ChefHat, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "hover:border-emerald-500/50", title: "What We Do?", desc: "We provide food for events in several ways like traditional banana leaf sit-down meals, and grand buffets, exactly as you wish the food to be served." },
              { icon: Target, color: "text-blue-400", bg: "bg-blue-500/10", border: "hover:border-blue-500/50", title: "Our Mission", desc: "To provide all kinds of catering services for personal & corporate events at a lower cost with the assurance of best quality and prompt service." },
              { icon: Lightbulb, color: "text-amber-400", bg: "bg-amber-500/10", border: "hover:border-amber-500/50", title: "Our Vision", desc: "To become the NO 1 catering service provider in Chennai, by means of absolute professionalism and reliability in the catering industry." }
            ].map((item, idx) => (
              <div key={idx} className={`group relative bg-white/5 border border-white/10 p-10 rounded-3xl overflow-hidden transition-all duration-300 hover:bg-white/10 ${item.border}`}>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-8 border border-white/5`}>
                    <item.icon size={32} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 tracking-wide">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed font-medium text-lg transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. CALL TO ACTION (CTA) SECTION - Removed background blur orb */}
      <div className="relative py-24 overflow-hidden bg-red-600">
        {/* Abstract background pattern for CTA */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Ready to make your event memorable?
          </h2>
          <p className="text-red-100 text-xl mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Let's discuss your menu. Get in touch with our catering experts today to get a custom quote for your upcoming celebration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="bg-white text-red-600 px-10 py-4 rounded-full font-black text-lg transition-colors hover:bg-gray-100 shadow-lg">
              Contact Us Now
            </Link>
            <Link to="/menu" className="bg-transparent text-white border-2 border-white/30 hover:border-white px-10 py-4 rounded-full font-black text-lg transition-colors hover:bg-white/10">
              View Our Menu
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}