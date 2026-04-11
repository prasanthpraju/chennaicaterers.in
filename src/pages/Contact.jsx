import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, CalendarHeart } from 'lucide-react';
import contact from "../assets/CateringSection/contact.png";

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#EC2290]/10">
      
      {/* 1. TALL HERO SECTION (Matching SubMenuDetails) */}
      <div className="relative h-[55vh] md:h-[65vh] w-full bg-gray-950 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }} 
          animate={{ opacity: 0.6, scale: 1 }} 
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('${contact}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black text-[#EC2290] uppercase tracking-[0.5em] mb-4"
          >
            Reach Out
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl"
          >
            Get In Touch
          </motion.h1>
        </div>
      </div>

      {/* 2. OVERLAPPING ACTION BAR / INFO AREA */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-12 py-10">
            <div>
              <span className="text-[10px] font-black text-[#EC2290] uppercase tracking-[0.4em] block mb-4">Inquiry</span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-6">
                Let's Plan Your <br /> Next Celebration
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium max-w-md">
                Whether you have a question about our curated menus, pricing, or want to reserve a date, our concierge team is ready to assist.
              </p>
            </div>

            <div className="space-y-4">
              {/* Contact Blocks - Clean White Theme */}
              {[
                { icon: CalendarHeart, label: "Direct Line", val: "Coming Soon...", title: "Reservations" },
                { icon: Mail, label: "Email", val: "Coming Soon...", title: "Inquiries" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50/50 border border-gray-100 rounded-[2rem] p-6 flex items-center gap-6 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#EC2290] border border-gray-50">
                    <item.icon size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">{item.title}</p>
                    <p className="text-[11px] font-black text-[#EC2290] uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-base font-black text-gray-900 uppercase tracking-tight">{item.val}</p>
                  </div>
                </div>
              ))}

              {/* Address Block */}
              <div className="bg-gray-50/50 border border-gray-100 rounded-[2rem] p-8 mt-4">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#EC2290] shrink-0 border border-gray-50">
                    <MapPin size={24} strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-[#EC2290] uppercase tracking-[0.3em] mb-2">Location</p>
                    <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-2">The Central Kitchen</h3>
                    <p className="text-gray-500 font-bold leading-relaxed text-[11px] uppercase tracking-wider">
                      Chennai, Tamil Nadu <br /> Service across the city
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[3rem] border border-gray-100 p-8 md:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.06)]">
              
              <div className="flex justify-between items-end mb-12">
                <div>
                  <span className="text-[10px] font-black text-[#EC2290] uppercase tracking-[0.4em] block mb-2">Messaging</span>
                  <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Send Message</h2>
                </div>
                <MessageSquare className="text-gray-100 w-12 h-12" />
              </div>

              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    className="mb-10 p-6 bg-green-50 border border-green-100 rounded-[2rem] flex items-center gap-4"
                  >
                    <CheckCircle2 className="text-green-500" size={28} />
                    <div>
                      <h4 className="text-green-900 font-black uppercase text-xs tracking-widest">Sent Successfully</h4>
                      <p className="text-green-600 text-[11px] font-bold uppercase mt-1">We will contact you shortly.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Full Name</span>
                    <input 
                      type="text" name="name" value={formData.name} onChange={handleInputChange} required
                      placeholder="ENTER NAME" 
                      className="w-full bg-gray-50 border border-gray-100 p-5 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest outline-none focus:ring-2 focus:ring-[#EC2290]/10 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Phone Number</span>
                    <input 
                      type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                      placeholder="CONTACT NO" 
                      className="w-full bg-gray-50 border border-gray-100 p-5 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest outline-none focus:ring-2 focus:ring-[#EC2290]/10 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Email Address</span>
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleInputChange} required
                    placeholder="EMAIL@DOMAIN.COM" 
                    className="w-full bg-gray-50 border border-gray-100 p-5 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest outline-none focus:ring-2 focus:ring-[#EC2290]/10 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Event Details</span>
                  <textarea 
                    rows="4" name="message" value={formData.message} onChange={handleInputChange} required
                    placeholder="TELL US ABOUT YOUR EVENT..." 
                    className="w-full bg-gray-50 border border-gray-100 p-6 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest outline-none focus:ring-2 focus:ring-[#EC2290]/10 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={submitStatus === 'submitting'}
                  className="w-full bg-[#EC2290] text-white py-6 rounded-[2rem] font-black uppercase text-[12px] tracking-[0.3em] shadow-2xl shadow-[#EC2290]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
                >
                  {submitStatus === 'submitting' ? 'Processing...' : 'Send Message'}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Footer-like Visual Spacer */}
      <div className="h-24 md:h-40" />
    </div>
  );
}