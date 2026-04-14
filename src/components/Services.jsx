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
          <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary">
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
              className={`group p-8 border border-gray-100 rounded-sm hover:shadow-xl transition-all duration-700 bg-secondary/30 hover:-translate-y-2 hover:bg-white transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent shadow-sm mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300 font-bold tracking-wider">
                {service.icon}
              </div>
              <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 font-light leading-relaxed">
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
