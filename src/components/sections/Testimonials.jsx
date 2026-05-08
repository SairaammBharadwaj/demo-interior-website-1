import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: '3BHK Apartment',
    review: 'Got my interiors done by them recently. The finish on the acrylic kitchen cabinets is really good. There was a slight delay of a few days in handing over, but the final look made up for it. The team is quite responsive on WhatsApp too.',
    image: 'https://ui-avatars.com/api/?name=Sarah+Jenkins&background=e0e7ff&color=3730a3&font-size=0.4'
  },
  {
    name: 'Rajeev Menon',
    location: 'Villa Project',
    review: 'Really loved the false ceiling and lighting work they did in our living room. It completely changed the look of the house. We had a strict budget but they managed to give it a very premium feel. Special thanks to the site supervisor!',
    image: 'https://ui-avatars.com/api/?name=Rajeev+Menon&background=fef08a&color=854d0e&font-size=0.4'
  },
  {
    name: 'Priya Sharma',
    location: 'Living Room Makeover',
    review: 'I live abroad so I had to coordinate the entire project over video calls. They handled everything end-to-end without much supervision from my side. Trustworthy team and the woodwork quality is excellent.',
    image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=fce7f3&color=be185d&font-size=0.4'
  },
  {
    name: 'David Carter',
    location: 'Master Bedroom',
    review: 'Very professional execution. My wife wanted a specific kind of sliding wardrobe and they got it done exactly like the Pinterest reference we showed them. The site was kept clean and overall it was a smooth experience.',
    image: 'https://ui-avatars.com/api/?name=David+Carter&background=dcfce7&color=166534&font-size=0.4'
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
