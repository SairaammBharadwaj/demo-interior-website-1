// Import the React library, which is necessary for creating React components
import React from 'react';
// Import the motion component from framer-motion to enable animations
import { motion } from 'framer-motion';

// Define the Hero functional component
const Hero = () => {
  // Return the JSX to be rendered for the Hero section
  return (
    // Create a section element with an ID 'home' and styling for full height, full width, and flexbox centering
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image container with slight zoom animation using framer-motion */}
      <motion.div 
        // Position the background div absolutely to fill the entire section
        className="absolute inset-0 w-full h-full"
        // Set the initial scale for the animation to 1 (normal size)
        initial={{ scale: 1 }}
        // Define the target animation state to scale up slightly to 1.05
        animate={{ scale: 1.05 }}
        // Configure the animation transition to take 10 seconds, move linearly, and repeat infinitely back and forth
        transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        {/* Inner div to hold the actual background image */}
        <div 
          // Style the inner div to fill the container and use background-cover and centering
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          // Set the background image URL directly via inline styles
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        // Close the inner div
        />
      {/* Close the motion.div wrapper */}
      </motion.div>

      {/* Dark Overlay div to improve text readability */}
      {/* Positioned absolutely over the background with black color at 50% opacity and a slight backdrop blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      {/* Content wrapper div */}
      {/* Positioned relative to appear above absolute elements (z-10), centered with max width and flexbox column layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Animated heading element (H1) using framer-motion */}
        <motion.h1 
          // Apply responsive text sizing, white color, custom fonts, spacing, and a drop shadow
          className="text-4xl md:text-6xl lg:text-7xl text-[#F4EFE6] font-heading font-[200] mb-6 tracking-[0.05em] drop-shadow-md"
          // Set the initial animation state: fully transparent and shifted 30px down
          initial={{ opacity: 0, y: 30 }}
          // Set the target animation state: fully opaque and at its original vertical position
          animate={{ opacity: 1, y: 0 }}
          // Configure the animation to last 0.8 seconds with a 0.2-second delay
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main heading text */}
          Luxury Interiors Crafted 
          {/* Line break that is hidden on small screens and shown on medium screens and up */}
          <br className="hidden md:block"/> 
          {/* Continuation of heading text */}
          for Modern Living
        {/* Close the animated heading */}
        </motion.h1>
        
        {/* Animated paragraph element for the subheading/description */}
        <motion.p 
          // Apply responsive text sizing, slight transparency, light font weight, margins, and drop shadow
          className="text-lg md:text-xl text-[#E0DACE] font-light mb-10 max-w-2xl drop-shadow-sm"
          // Set the initial animation state (transparent and shifted down)
          initial={{ opacity: 0, y: 30 }}
          // Set the target animation state (opaque and original position)
          animate={{ opacity: 1, y: 0 }}
          // Configure the animation with duration 0.8s and a 0.4s delay (to appear after the heading)
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Paragraph text content */}
          We transform ordinary spaces into breathtaking, functional environments that reflect your unique style and elevate your lifestyle.
        {/* Close the animated paragraph */}
        </motion.p>
        
        {/* Animated container for the call-to-action buttons */}
        <motion.div 
          // Use flexbox to stack buttons on mobile and place them side-by-side on larger screens
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
          // Set the initial animation state
          initial={{ opacity: 0, y: 30 }}
          // Set the target animation state
          animate={{ opacity: 1, y: 0 }}
          // Configure the animation with duration 0.8s and a 0.6s delay (to appear after the paragraph)
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* First call-to-action link pointing to the projects section */}
          <a href="#projects" className="px-[35px] py-[14px] bg-[#d4af37] text-white font-[400] rounded-lg hover:bg-transparent hover:text-[#d4af37] border border-[#d4af37] transition-colors duration-300 tracking-[0.15em] uppercase text-[12px]">
            View Projects
          </a>
          {/* Second call-to-action link pointing to the contact section */}
          <a href="#contact" className="px-[35px] py-[14px] bg-transparent text-[#F4EFE6] font-[400] rounded-lg border border-[#F4EFE6] hover:bg-[#F4EFE6] hover:text-primary transition-colors duration-300 tracking-[0.15em] uppercase text-[12px]">
            Book Consultation
          </a>
        {/* Close the animated buttons container */}
        </motion.div>
      {/* Close the main content wrapper div */}
      </div>
    {/* Close the section element */}
    </section>
  // Close the return statement
  );
// Close the Hero component definition
};

// Export the Hero component as the default export of this module
export default Hero;
