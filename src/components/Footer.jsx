import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-heading font-bold tracking-wider text-white mb-4">AURA</h2>
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-xs">
              Crafting timeless, minimalist, and functional luxury interiors for the discerning few.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/60 hover:text-accent font-light text-sm transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/60 hover:text-accent font-light text-sm transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/60 hover:text-accent font-light text-sm transition-colors">Services</a></li>
              <li><a href="#projects" className="text-white/60 hover:text-accent font-light text-sm transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#testimonials" className="text-white/60 hover:text-accent font-light text-sm transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent font-light text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-accent font-light text-sm transition-colors">Terms of Service</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-accent font-light text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Studio</h4>
            <p className="text-white/60 font-light text-sm mb-2">123 Design Boulevard, Suite 450</p>
            <p className="text-white/60 font-light text-sm mb-2">Metropolis, NY 10001</p>
            <p className="text-white/60 font-light text-sm mb-2">+1 (800) 123-4567</p>
            <p className="text-white/60 font-light text-sm">hello@auradesign.com</p>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Aura Interior Design. All rights reserved.
          </p>
          <div className="text-white/40 text-xs font-light">
            Designed for Modern Living.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
