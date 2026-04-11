import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Parallax } from "swiper/modules";
import {
  Sparkles,
  Flame,
  Star,
  ChefHat,
  Leaf,
  UtensilsCrossed,
} from "lucide-react";

// Assuming these are your image paths
import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: hero1,
      //   bgText: "BIRYANI",
      title: "Authentic Biryani",
      subtitle: "Cooked slowly with traditional spices over wood fire.",
      // offer: "20% OFF TODAY",
      rating: "4.9",
      prepMethod: "12-Hour Dum Cooked",
      prepIcon: <Flame size={24} />,
      //   tags: ["🔥 Signature Spice", "✨ Aromatic", "👑 Premium Basmati"],
    },
    {
      id: 2,
      image: hero2,
      //   bgText: "MEALS",
      title: "Authentic South Meals",
      subtitle:
        "Homely curries, rice, and sides served on a fresh banana leaf.",
      offer: "WEEKEND SPECIAL",
      rating: "4.8",
      prepMethod: "Farm to Banana Leaf",
      prepIcon: <Leaf size={24} />,
      //   tags: ["🌿 100% Organic", "🍛 Traditional", "🌱 Vegetarian"],
    },
    {
      id: 3,
      image: hero3,
      //   bgText: "CATERING",
      title: "Premium Catering",
      subtitle:
        "From intimate functions to grand weddings, we deliver elegance.",
      offer: "BOOK FOR EVENTS",
      rating: "5.0",
      prepMethod: "Curated Custom Menus",
      prepIcon: <UtensilsCrossed size={24} />,
      //   tags: ["👨‍🍳 Master Chefs", "🎉 Event Ready", "💎 Luxury Service"],
    },
  ];

  return (
    // FIX: Replaced lg:h-[90vh] with lg:h-screen to eliminate the bottom white gap
    <div className="w-full h-[600px] md:h-[700px] lg:h-screen min-h-[600px] pt-[72px] font-sans bg-black overflow-hidden relative group">
      
      {/* Subtle Cinematic Noise Texture Overlay */}
      <div
        className="absolute inset-0 z-20 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Parallax]}
        effect="fade"
        parallax={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-progress-bullet",
          bulletActiveClass: "swiper-progress-bullet-active",
        }}
        className="w-full h-full cursor-grab active:cursor-grabbing hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* 1. Background Image with continuous slow zoom */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover scale-110"
                style={{
                  animation: "zoomInOut 25s ease-in-out infinite alternate",
                }}
              />

              {/* 2. Advanced Multi-layer Gradient for perfect depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-0" />

              {/* 3. GIANT Stroked Background Text */}
              <div
                className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none select-none"
                data-swiper-parallax="-300"
                data-swiper-parallax-opacity="0"
              >
                <h1
                  className="text-[12vw] font-black uppercase tracking-tighter text-transparent"
                  style={{ WebkitTextStroke: "2px rgba(255,255,255,0.07)" }}
                >
                  {slide.bgText}
                </h1>
              </div>

              {/* 4. Main Content Container */}
              <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto w-full -mt-10 md:mt-0">
                {/* Promo Pill */}
                <div className="hero-animate delay-100 mb-6 flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-black tracking-widest flex items-center gap-1">
                    <Sparkles size={14} className="animate-pulse" /> EXCLUSIVE
                  </div>
                  <span className="text-gray-200 text-sm font-semibold pr-4 tracking-wide uppercase">
                    {slide.offer}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className="hero-animate delay-200 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-5 leading-tight"
                  data-swiper-parallax="-200"
                >
                  {slide.title}
                </h2>

                {/* Subtitle */}
                <p
                  className="hero-animate delay-300 text-gray-300 text-lg md:text-2xl font-light mb-10 max-w-2xl drop-shadow-lg leading-relaxed"
                  data-swiper-parallax="-100"
                >
                  {slide.subtitle}
                </p>
              </div>

              {/* 5. FLOATING WIDGETS */}

              {/* Bottom Left: Craftsmanship/Prep Method Widget */}
              <div className="hero-animate delay-500 absolute bottom-12 left-6 md:left-12 z-20 hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-3xl shadow-2xl hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
                <div className="bg-red-500/20 p-3 rounded-2xl text-red-500">
                  {slide.prepIcon}
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-0.5">
                    Craftsmanship
                  </p>
                  <p className="text-white font-black text-lg">
                    {slide.prepMethod}
                  </p>
                </div>
              </div>

              {/* Bottom Right: Rating Widget */}
              <div className="hero-animate delay-500 absolute bottom-12 right-6 md:right-12 z-20 hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-3xl shadow-2xl hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-0.5">
                    Customer Rating
                  </p>
                  <div className="flex items-center justify-end gap-1 text-white font-black text-lg">
                    {slide.rating}{" "}
                    <Star
                      size={18}
                      className="text-yellow-400 fill-yellow-400 -mt-0.5"
                    />
                  </div>
                </div>
                <div className="bg-yellow-500/20 p-3 rounded-2xl text-yellow-400">
                  <Star size={24} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* --- ULTRA ADVANCED CSS --- */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Continuous Zoom */
        @keyframes zoomInOut {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }

        /* Initial state for staggered elements */
        .hero-animate {
          opacity: 0;
          transform: translateY(50px) scale(0.95);
          filter: blur(10px);
          transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
        }

        /* Active slide triggers the reveal */
        .swiper-slide-active .hero-animate {
          opacity: 1;
          transform: translateY(0) scale(1);
          filter: blur(0);
        }

        /* Staggered Delays */
        .swiper-slide-active .delay-100 { transition-delay: 100ms; }
        .swiper-slide-active .delay-200 { transition-delay: 250ms; }
        .swiper-slide-active .delay-300 { transition-delay: 400ms; }
        .swiper-slide-active .delay-400 { transition-delay: 550ms; }
        .swiper-slide-active .delay-500 { transition-delay: 700ms; }

        /* PROGRESS BAR PAGINATION */
        .swiper-progress-bullet {
          display: inline-block;
          width: 50px;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          margin: 0 6px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: width 0.3s ease;
        }
        
        .swiper-progress-bullet::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 0%;
          background: #dc2626; /* Red 600 */
          border-radius: 4px;
        }

        .swiper-progress-bullet-active {
          width: 80px;
        }
        .swiper-progress-bullet-active::after {
          animation: fillBar 6s linear forwards;
        }

        @keyframes fillBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        /* Pagination Container positioning */
        .hero-swiper .swiper-pagination {
          bottom: 40px !important;
          z-index: 30;
        }
      `,
        }}
      />
    </div>
  );
}