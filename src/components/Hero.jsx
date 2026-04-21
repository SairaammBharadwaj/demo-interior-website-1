import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with slight zoom animation */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl text-white font-heading font-[200] mb-6 tracking-[0.05em] drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Luxury Interiors Crafted <br className="hidden md:block"/> for Modern Living
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl drop-shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We transform ordinary spaces into breathtaking, functional environments that reflect your unique style and elevate your lifestyle.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#projects" className="px-[30px] py-[12px] bg-[#c4a233] text-white font-medium rounded-sm hover:bg-[#c4a233]/90 transition-all transform active:scale-95 shadow-lg tracking-[0.1em] uppercase text-[13px]">
            View Projects
          </a>
          <a href="#contact" className="px-[30px] py-[12px] bg-white/10 backdrop-blur-sm text-white font-medium border border-white/30 rounded-sm hover:bg-white hover:text-primary transition-all transform active:scale-95 tracking-[0.1em] uppercase text-[13px]">
            Book Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
