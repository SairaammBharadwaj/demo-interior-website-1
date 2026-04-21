import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projectsData = [
  { 
    id: 1, 
    title: 'The Minimalist Loft', 
    location: 'Downtown Avenue', 
    category: 'Living Room', 
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687989-ce87920ab718?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607688267-33f7215c3258?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  { 
    id: 2, 
    title: 'Serene Sanctuary', 
    location: 'Pine Hills', 
    category: 'Bedroom', 
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616593876020-f4722881775a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616594191393-0131461cc4f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  { 
    id: 3, 
    title: 'Modern Culinary Space', 
    location: 'West End', 
    category: 'Kitchen', 
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  { 
    id: 4, 
    title: 'Executive Workspace', 
    location: 'Tech Park', 
    category: 'Office', 
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  { 
    id: 5, 
    title: 'Classic Elegance', 
    location: 'Heritage Block', 
    category: 'Living Room', 
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210491369-0268ec3b7bdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  },
  { 
    id: 6, 
    title: 'Open Concept Haven', 
    location: 'Marina Bay', 
    category: 'Kitchen', 
    image: 'https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556910110-4c49dff4dd62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Office'];

const FeaturedProjects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProject]);

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
                onClick={() => setSelectedProject(project)}
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

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-[60] bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Content Container */}
            <div className="w-full max-w-5xl h-[80vh] flex flex-col">
              <div className="mb-6 text-center">
                <h3 className="text-3xl font-heading font-light text-white">{selectedProject.title}</h3>
                <p className="text-accent text-sm tracking-widest uppercase mt-2">{selectedProject.location} • {selectedProject.category}</p>
              </div>
              
              <div className="w-full h-full flex-grow relative overflow-hidden rounded-lg shadow-2xl">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  loop={true}
                  className="w-full h-full"
                >
                  {selectedProject.gallery.map((imgUrl, index) => (
                    <SwiperSlide key={index}>
                      <img 
                        src={imgUrl} 
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProjects;
