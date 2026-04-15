import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Parallax } from "swiper/modules";
import { Sparkles, Flame, Star, Leaf, UtensilsCrossed } from "lucide-react";

import hero1 from "../assets/hero/hero1.png";
import hero2 from "../assets/hero/hero2.png";
import hero3 from "../assets/hero/hero3.png";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: hero1,
      title: "Authentic Biryani",
      subtitle: "Cooked slowly with traditional spices over wood fire.",
      offer: "20% OFF TODAY",
      rating: "4.9",
      prepMethod: "12-Hour Dum Cooked",
      prepIcon: <Flame size={24} />,
    },
    {
      id: 2,
      image: hero2,
      title: "Authentic South Meals",
      subtitle: "Homely curries, rice, and sides served on a fresh banana leaf.",
      offer: "WEEKEND SPECIAL",
      rating: "4.8",
      prepMethod: "Farm to Banana Leaf",
      prepIcon: <Leaf size={24} />,
    },
    {
      id: 3,
      image: hero3,
      title: "Premium Catering",
      subtitle: "From intimate functions to grand weddings, we deliver elegance.",
      offer: "BOOK FOR EVENTS",
      rating: "5.0",
      prepMethod: "Curated Custom Menus",
      prepIcon: <UtensilsCrossed size={24} />,
    },
  ];

  return (
    <div className="w-full h-[100dvh] lg:h-screen font-sans bg-black overflow-hidden relative group">
      <div
        className="absolute inset-0 z-20 opacity-[0.12] pointer-events-none mix-blend-overlay"
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
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover scale-110"
                style={{ animation: "zoomInOut 25s ease-in-out infinite alternate" }}
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 z-0" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 z-0" />

              <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-5xl mx-auto w-full h-full pb-16 md:pb-0">
                {/* Monochromatic Pink Badge */}
                <div className="hero-animate delay-100 mb-6 md:mb-8 flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-2xl border border-white/20 p-1.5 rounded-full shadow-[0_0_40px_rgba(236,34,144,0.3)]">
                  <div className="bg-[#EC2290] text-white px-3 md:px-4 py-1.5 rounded-full text-[8px] md:text-[9px] font-black tracking-[0.2em] flex items-center gap-1.5 md:gap-2">
                    <Sparkles size={12} className="animate-pulse" /> EXCLUSIVE
                  </div>
                  <span className="text-white text-[9px] md:text-[10px] font-bold pr-4 md:pr-5 tracking-widest uppercase opacity-90">
                    {slide.offer}
                  </span>
                </div>

                <h2
                  className="hero-animate delay-200 text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-[0.9] drop-shadow-2xl px-2"
                  data-swiper-parallax="-300"
                >
                  {slide.title}
                </h2>

                <p
                  className="hero-animate delay-300 text-white/80 text-sm sm:text-base md:text-lg font-medium mb-8 md:mb-12 max-w-xl md:max-w-2xl drop-shadow-lg leading-relaxed tracking-tight px-4"
                  data-swiper-parallax="-150"
                >
                  {slide.subtitle}
                </p>
              </div>

              {/* Prep Method Card */}
              <div className="hero-animate delay-500 absolute bottom-16 left-12 z-20 hidden lg:flex items-center gap-5 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-[2rem] shadow-2xl transition-all duration-500 hover:bg-white/15 hover:border-[#EC2290]/50 group/card">
                <div className="bg-gradient-to-br from-[#FCE4EC]/20 to-[#EC2290]/30 p-4 rounded-2xl text-[#F48FB1] shadow-inner group-hover/card:text-white transition-colors">
                  {slide.prepIcon}
                </div>
                <div className="text-left pr-4">
                  <p className="text-[9px] text-white/50 font-black uppercase tracking-[0.2em] mb-1">Craftsmanship</p>
                  <p className="text-white font-bold text-lg tracking-tight">{slide.prepMethod}</p>
                </div>
              </div>

              {/* Rating Card */}
              <div className="hero-animate delay-500 absolute bottom-16 right-12 z-20 hidden lg:flex items-center gap-5 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-[2rem] shadow-2xl transition-all duration-500 hover:bg-white/15">
                <div className="text-right pl-4">
                  <p className="text-[9px] text-white/50 font-black uppercase tracking-[0.2em] mb-1">Customer Rating</p>
                  <div className="flex items-center justify-end gap-1.5 text-white font-bold text-lg">
                    {slide.rating} <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
                <div className="bg-yellow-500/20 p-4 rounded-2xl text-yellow-400">
                  <Star size={24} fill="currentColor" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style dangerouslySetInnerHTML={{
          __html: `
        @keyframes zoomInOut { 0% { transform: scale(1); } 100% { transform: scale(1.18); } }
        .hero-animate { opacity: 0; transform: translateY(30px) scale(0.98); filter: blur(10px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .swiper-slide-active .hero-animate { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        .swiper-slide-active .delay-100 { transition-delay: 150ms; }
        .swiper-slide-active .delay-200 { transition-delay: 300ms; }
        .swiper-slide-active .delay-300 { transition-delay: 450ms; }
        .swiper-slide-active .delay-500 { transition-delay: 600ms; }

        .swiper-progress-bullet {
          display: inline-block; width: 30px; height: 3px; background: rgba(255, 255, 255, 0.2);
          border-radius: 4px; margin: 0 6px !important; cursor: pointer; position: relative; overflow: hidden;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @media (min-width: 768px) {
          .swiper-progress-bullet { width: 40px; margin: 0 8px !important; }
          .swiper-progress-bullet-active { width: 70px; }
        }

        .swiper-progress-bullet::after {
          content: ''; position: absolute; top: 0; left: 0; height: 100%; width: 0%;
          background: linear-gradient(90deg, #FCE4EC, #F48FB1, #EC2290); border-radius: 4px;
        }
        
        .swiper-progress-bullet-active { width: 50px; }
        .swiper-progress-bullet-active::after { animation: fillBar 6s linear forwards; }
        @keyframes fillBar { 0% { width: 0%; } 100% { width: 100%; } }
        
        .hero-swiper .swiper-pagination { bottom: 30px !important; z-index: 40; }
        @media (min-width: 768px) {
          .hero-swiper .swiper-pagination { bottom: 60px !important; }
        }
      `,
        }}
      />
    </div>
  );
}