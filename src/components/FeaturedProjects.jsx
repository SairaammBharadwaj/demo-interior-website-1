import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  { id: 1, title: 'The Minimalist Loft', location: 'Downtown Avenue', category: 'Living Room', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Serene Sanctuary', location: 'Pine Hills', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Modern Culinary Space', location: 'West End', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Executive Workspace', location: 'Tech Park', category: 'Office', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Classic Elegance', location: 'Heritage Block', category: 'Living Room', image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Open Concept Haven', location: 'Marina Bay', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
];

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office'];

const FeaturedProjects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary">
              Featured Projects
            </h3>
          </div>
          
          {/* Filters */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-primary border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer shadow-sm hover:shadow-xl"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-accent text-sm uppercase tracking-wider mb-2">{project.category}</p>
                    <h4 className="text-white text-2xl font-heading font-semibold mb-1">{project.title}</h4>
                    <p className="text-white/80 font-light mb-6">{project.location}</p>
                    <span className="inline-block border-b border-white text-white uppercase text-xs tracking-widest pb-1 hover:text-accent hover:border-accent transition-colors">
                      View Project
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
