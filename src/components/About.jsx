import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ end, duration, title, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      const easeOutQuad = 1 - (1 - progressPercentage) * (1 - progressPercentage);
      
      setCount(Math.floor(easeOutQuad * end));
      
      if (progressPercentage < 1) {
        window.requestAnimationFrame(animateCount);
      }
    };
    
    window.requestAnimationFrame(animateCount);
  }, [end, duration, isInView]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <h3 className="text-4xl font-heading font-bold text-accent mb-2">{count}{suffix}</h3>
      <p className="text-gray-600 text-sm uppercase tracking-wider">{title}</p>
    </div>
  );
};

const About = () => {
  const leftRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: true, margin: "-100px" });
  
  const rightRef = useRef(null);
  const isRightInView = useInView(rightRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div 
            ref={leftRef}
            className={`relative transition-all duration-1000 transform ${isLeftInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Interior Design Team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary -z-10 hidden md:block"></div>
            <div className="absolute top-1/2 -left-6 w-12 h-24 bg-accent -z-10 hidden md:block opacity-50"></div>
          </div>

          <div 
            ref={rightRef}
            className={`transition-all duration-1000 delay-200 transform ${isRightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          >
            <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">About Aura</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Designing Spaces That Tell Your Unique Story
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed font-light">
              At Aura, we believe that an interior should be a natural extension of its inhabitants. Established in 2010...
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <Counter end={15} duration={2000} title="Years Experience" suffix="+" />
              <Counter end={350} duration={2500} title="Projects Completed" suffix="+" />
              <Counter end={100} duration={2000} title="Happy Clients" suffix="%" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
