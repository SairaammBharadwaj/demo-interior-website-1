import React from 'react';


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
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-accent font-semibold mb-3">Our Values</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Why Choose Aura
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 group">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-xl font-heading font-semibold mb-2">{feature.title}</h4>
                <p className="text-white/70 font-light leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
