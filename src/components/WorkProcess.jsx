import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

const steps = [
  { id: '01', title: 'Consultation', description: 'We start by understanding your vision, budget, and fundamental requirements.' },
  { id: '02', title: 'Planning', description: 'Our team develops comprehensive layouts, space optimization strategies, and mood boards.' },
  { id: '03', title: 'Design Approval', description: 'Review 3D renders and material selections. We refine the design until it is perfect.' },
  { id: '04', title: 'Execution', description: 'Our craftsmen and contractors bring the vision to life with rigorous quality control.' },
  { id: '05', title: 'Final Handover', description: 'A final walkthrough to ensure every detail meets our premium standards before handing over.' }
];

const WorkProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">How We Connect</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            Our Work Process
          </h3>
        </div>

        <div 
          ref={ref}
          className="flex flex-col md:flex-row justify-between items-start md:space-x-4 space-y-12 md:space-y-0 relative"
        >
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-8 right-8 h-[2px] bg-gray-200 -z-10"></div>

          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className={`flex-1 relative flex flex-col items-center text-center group transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <span className="font-heading font-bold text-primary group-hover:text-white">{step.id}</span>
              </div>
              <h4 className="text-lg font-heading font-semibold text-primary mb-3">
                {step.title}
              </h4>
              <p className="text-gray-500 font-light text-sm px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorkProcess;
