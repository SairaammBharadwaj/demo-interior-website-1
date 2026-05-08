import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isMobileMenuOpen ? 'bg-transparent py-6' : (isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6')}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 relative z-50">
              <a href="#home" className={`text-3xl font-heading font-black tracking-widest transition-all duration-300 ${isMobileMenuOpen ? 'text-[#F4EFE6] [text-shadow:0_0_15px_rgba(244,239,230,0.8)]' : (isScrolled ? 'text-primary [text-shadow:0_0_10px_rgba(0,0,0,0.2)]' : 'text-[#F4EFE6] [text-shadow:0_0_20px_rgba(244,239,230,0.8)] hover:[text-shadow:0_0_30px_rgba(244,239,230,1)]')}`}>
                DS INTERIORS
              </a>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-[25px]">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={`text-[12px] uppercase tracking-[0.2em] font-medium transition-colors hover:text-accent ${isScrolled ? 'text-gray-800' : 'text-[#E0DACE]'}`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className={`px-6 py-2.5 rounded-lg text-[12px] uppercase tracking-[0.15em] font-medium transition-colors duration-300 border ${isScrolled ? 'border-primary text-primary hover:bg-primary hover:text-[#F4EFE6]' : 'border-[#F4EFE6] text-[#F4EFE6] hover:bg-[#F4EFE6] hover:text-primary'}`}
              >
                Book Consultation
              </a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center relative z-50">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-full focus:outline-none transition-all duration-300 ${isMobileMenuOpen ? 'text-[#F4EFE6] hover:bg-[#F4EFE6]/10' : (isScrolled ? 'text-primary hover:bg-gray-100' : 'text-[#F4EFE6] hover:bg-[#F4EFE6]/10')}`}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-8 h-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <motion.path 
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    variants={{
                      closed: { d: "M4 7h16" },
                      open: { d: "M6 18L18 6" }
                    }}
                    initial={false}
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.path 
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    d="M4 12h16"
                    variants={{
                      closed: { opacity: 1, scale: 1 },
                      open: { opacity: 0, scale: 0.5 }
                    }}
                    initial={false}
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.path 
                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                    variants={{
                      closed: { d: "M4 17h16" },
                      open: { d: "M6 6l12 12" }
                    }}
                    initial={false}
                    animate={isMobileMenuOpen ? "open" : "closed"}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen Futuristic Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-black/85 flex flex-col items-center justify-center min-h-screen"
          >
            {/* Subtle glowing orb background effect */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col items-center space-y-6 w-full px-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="text-3xl font-heading font-light tracking-widest text-white hover:text-accent transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-accent group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-10 w-full max-w-[260px] text-center block px-8 py-4 rounded-full border border-white/20 bg-white/5 text-lg font-medium text-white hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] backdrop-blur-md transform active:scale-95"
              >
                Book Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
