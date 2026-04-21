import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    title: 'Timely Delivery',
    description: 'We respect your time. Our streamlined processes ensure your project is completed precisely on schedule without compromising quality.',
    icon: 'TD'
  },
  {
    title: 'Premium Materials',
    description: 'We source only the finest, sustainable materials from trusted global suppliers to ensure longevity and elegance in every detail.',
    icon: 'PM'
  },
  {
    title: 'Personalized Designs',
    description: 'Your space should reflect you. Our bespoke designs are custom-tailored to align with your personal aesthetic and functional needs.',
    icon: 'PD'
  },
  {
    title: 'End-to-End Execution',
    description: 'From concept to final handover, we manage every aspect. Experience a stress-free transformation with our turnkey solutions.',
    icon: 'EE'
  },
  {
    title: 'Experienced Team',
    description: 'Our team of seasoned architects, designers, and craftsmen bring decades of collective expertise to realize your vision flawlessly.',
    icon: 'ET'
  },
  {
    title: 'Affordable Pricing',
    description: 'Luxury does not have to be inaccessible. We provide transparent, competitive pricing to deliver superior value for your investment.',
    icon: 'AP'
  }
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-28 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center mb-[60px] space-y-4">
          <h2 className="text-xs uppercase tracking-[0.15em] text-[#d4af37] font-[300]">
            OUR VALUES
          </h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-heading font-[100] tracking-[0.05em] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            Why Choose Aura
          </motion.h3>
        </div>

        {/* 3-Column, 2-Row Grid with substantial vertical gaps */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: index * 0.15 }}
              className="flex relative items-start group p-6 rounded-lg bg-white/[0.03] backdrop-blur-[20px] border border-white/10 hover:bg-white/[0.05] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            >
              {/* Circular Icon with Hover Glow */}
              <div className="flex-shrink-0 w-[44px] h-[44px] bg-transparent border border-white/20 rounded-full flex items-center justify-center text-[#d4af37] font-[300] tracking-wider text-sm mr-[30px] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:shadow-[0px_0px_25px_rgba(212,175,55,0.4)] group-hover:border-[#d4af37]/50">
                {feature.icon}
              </div>
              
              {/* Text Block */}
              <div>
                <h4 className="text-xl font-heading font-[400] mb-3 leading-tight text-white">
                  {feature.title}
                </h4>
                <p className="text-gray-300 font-[200] leading-[1.8] text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
