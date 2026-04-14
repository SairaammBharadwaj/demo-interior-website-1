import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Eleanor Vance',
    location: 'Hillside Manor',
    review: 'Aura transformed our outdated house into a modern sanctuary. Their attention to detail and commitment to our vision was truly unparalleled. The entire process was seamless from start to finish.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    name: 'Marcus Sterling',
    location: 'Downtown Penthouse',
    review: 'The team at Aura has an impeccable eye for design. They struck the perfect balance between luxury and comfort. Coming home is now my favorite part of the day.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    name: 'Sophia Laurent',
    location: 'Oceanside Villa',
    review: 'Working with Aura was an absolute delight. They listened, conceptualized, and executed brilliantly. Our coastal home is stunning, combining minimalism with warmth effortlessly.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  },
  {
    name: 'David Chen',
    location: 'Tech Hub Offices',
    review: 'Aura revamped our corporate office, and the impact on our team’s morale and productivity was immediate. The space is functional, inspiring, and incredibly stylish.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary -z-10 block"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">Client Stories</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary">
            What They Say
          </h3>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -left-6 w-20 h-20 text-gray-100 -z-10 rotate-180 flex items-center justify-center text-7xl font-serif">"</div>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {testimonials.map((testimony, index) => (
              <SwiperSlide key={index}>
                <div className="h-full p-8 rounded-sm bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow glass relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent/50 to-accent"></div>
                  
                  <p className="text-gray-600 italic font-light leading-relaxed mb-8 relative z-10">
                    "{testimony.review}"
                  </p>
                  
                  <div className="flex items-center space-x-4 mt-auto">
                    <img 
                      src={testimony.image} 
                      alt={testimony.name} 
                      className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                    />
                    <div>
                      <h5 className="font-heading font-semibold text-primary">{testimony.name}</h5>
                      <span className="text-xs text-accent uppercase tracking-wider">{testimony.location}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
