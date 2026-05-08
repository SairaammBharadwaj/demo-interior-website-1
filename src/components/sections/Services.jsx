import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

const servicesList = [
  {
    title: 'Residential Interiors',
    description: 'Bespoke designs tailored to reflect your personality and elevate your everyday lifestyle.',
    icon: 'RI'
  },
  {
    title: 'Modular Kitchen Design',
    description: 'Ergonomic, modern, and space-saving kitchen layouts that make cooking a delight.',
    icon: 'KD'
  },
  {
    title: 'Bedroom Design',
    description: 'Tranquil and luxurious bedroom sanctuaries designed for optimal rest and relaxation.',
    icon: 'BD'
  },
  {
    title: 'Living Room Design',
    description: 'Statement living spaces harmonizing aesthetics with comfort for family and guests.',
    icon: 'LR'
  },
  {
    title: 'Office Interiors',
    description: 'Inspiring commercial spaces designed to boost productivity and reflect your brand ethos.',
    icon: 'OI'
  },
  {
    title: 'Turnkey Projects',
    description: 'Comprehensive end-to-end execution, transforming bare shells into fully furnished spaces.',
    icon: 'TP'
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.15em] text-[#d4af37] font-[300] mb-3">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-[100] tracking-[0.05em] text-primary transition-all duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)] transform">
            Comprehensive Design Services
          </h3>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className={`group p-8 border border-[#d4af37]/20 rounded-lg hover:shadow-2xl hover:border-[#d4af37]/50 bg-white/40 backdrop-blur-md transition-all duration-[1000ms] ease-[cubic-bezier(0.23,1,0.32,1)] transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-[56px] h-[56px] bg-transparent border border-gray-200 rounded-full flex items-center justify-center text-[#d4af37] shadow-sm mb-6 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] font-[300] tracking-wider group-hover:scale-110 group-hover:shadow-[0px_0px_25px_rgba(212,175,55,0.3)] group-hover:border-[#d4af37]/50">
                {service.icon}
              </div>
              <h4 className="text-xl font-heading font-[400] text-primary mb-3">
                {service.title}
              </h4>
              <p className="text-gray-800 font-[200] leading-[1.8] text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
