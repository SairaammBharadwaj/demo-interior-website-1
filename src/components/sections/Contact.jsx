import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-primary text-white border-t border-gray-800">
      {/* Immersive Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80")' }}
      ></div>

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary pointer-events-none"></div>

      {/* Decorative Luxury Glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={containerRef}>

        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs uppercase tracking-[0.15em] text-[#d4af37] font-[300] mb-3">Get in Touch</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-[100] tracking-[0.1em] text-white">
            Start Your Project
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <motion.div
            className="p-8 rounded-lg backdrop-blur-[20px] bg-white/[0.02] border border-white/10"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-2xl font-heading font-[400] text-white mb-6">Send Us a Message</h4>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-[200] text-gray-300 mb-2">Name</label>
                  <input type="text" className="w-full px-2 py-2 bg-transparent border-0 border-b border-white/30 focus:outline-none focus:ring-0 focus:border-[#d4af37] focus:shadow-[0_2px_10px_rgba(212,175,55,0.3)] text-white placeholder-gray-600 transition-all duration-300 rounded-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-[200] text-gray-300 mb-2">Phone</label>
                  <input type="tel" className="w-full px-2 py-2 bg-transparent border-0 border-b border-white/30 focus:outline-none focus:ring-0 focus:border-[#d4af37] focus:shadow-[0_2px_10px_rgba(212,175,55,0.3)] text-white placeholder-gray-600 transition-all duration-300 rounded-none" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-[200] text-gray-300 mb-2">Email</label>
                  <input type="email" className="w-full px-2 py-2 bg-transparent border-0 border-b border-white/30 focus:outline-none focus:ring-0 focus:border-[#d4af37] focus:shadow-[0_2px_10px_rgba(212,175,55,0.3)] text-white placeholder-gray-600 transition-all duration-300 rounded-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-[200] text-gray-300 mb-2">Project Type</label>
                  <select className="w-full px-2 py-2 bg-transparent border-0 border-b border-white/30 focus:outline-none focus:ring-0 focus:border-[#d4af37] focus:shadow-[0_2px_10px_rgba(212,175,55,0.3)] text-gray-300 transition-all duration-300 rounded-none [&>option]:bg-primary">
                    <option>Residential Interior</option>
                    <option>Commercial/Office</option>
                    <option>Kitchen Remodel</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-[200] text-gray-300 mb-2">Message</label>
                <textarea rows="4" className="w-full px-2 py-2 bg-transparent border-0 border-b border-white/30 focus:outline-none focus:ring-0 focus:border-[#d4af37] focus:shadow-[0_2px_10px_rgba(212,175,55,0.3)] text-white placeholder-gray-600 resize-none transition-all duration-300 rounded-none" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 mt-4 bg-transparent border border-[#d4af37] text-white tracking-[0.1em] uppercase text-[13px] hover:bg-[#d4af37]/20 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 transform active:scale-95 font-[300]">
                Send Request
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Map */}
          <motion.div
            className="flex flex-col h-full"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" strokeWidth={1} />
                <div>
                  <h5 className="font-heading font-[400] text-white mb-2">Visit Studio</h5>
                  <p className="text-gray-300 font-[200] text-sm leading-relaxed">
                    123 Design Boulevard<br />
                    Suite 450<br />
                    Metropolis, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" strokeWidth={1} />
                  <div>
                    <h5 className="font-heading font-[400] text-white mb-1">Call Us</h5>
                    <p className="text-gray-300 font-[200] text-sm hover:text-[#d4af37] transition-colors cursor-pointer">+1 (800) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0" strokeWidth={1} />
                  <div>
                    <h5 className="font-heading font-[400] text-white mb-1">Email Us</h5>
                    <p className="text-gray-300 font-[200] text-sm hover:text-[#d4af37] transition-colors cursor-pointer">hello@dsinteriors.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mb-8 flex space-x-4">
              {['IG', 'FB', 'IN'].map((social, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-full bg-transparent border border-white/30 flex items-center justify-center text-gray-300 font-[300] text-sm hover:text-white hover:bg-[#d4af37]/20 hover:border-[#d4af37] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500">
                  {social}
                </a>
              ))}
            </div>

            {/* Embedded Map Dummy */}
            <div className="flex-1 w-full min-h-[250px] bg-transparent rounded-[20px] relative overflow-hidden flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] group border border-white/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d240.41983192957045!2d78.59357795719!3d17.4088872897761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1775908312027!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 transition-opacity duration-700 opacity-90 group-hover:opacity-100"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/18001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 z-50 group"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute right-16 bg-[#111111] border border-gray-800 text-white text-xs px-3 py-1.5 rounded-sm shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 delay-100">
          Chat with us!
        </span>
      </a>
    </section>
  );
};

export default Contact;
