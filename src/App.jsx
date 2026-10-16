// Import the React library plus the hook used to track the opening reveal
import React, { useCallback, useEffect, useState } from 'react';
import { LayoutGroup, MotionConfig } from 'framer-motion';
import './brand.css';
import './studio.css';
import './refinements.css';
// Import the opening brand-reveal overlay
import BrandIntro from './components/common/BrandIntro';
// Import the Navbar component from the local layout directory
import Navbar from './components/layout/Navbar';
// Import the Hero component from the local sections directory
import Hero from './components/sections/Hero';
// Import the About component from the local sections directory
import About from './components/sections/About';
// Import the Services component from the local sections directory
import Services from './components/sections/Services';
// Import the FeaturedProjects component from the local sections directory
import FeaturedProjects from './components/sections/FeaturedProjects';
// Import the WhyChooseUs component from the local sections directory
import WhyChooseUs from './components/sections/WhyChooseUs';
// Import the Contact component from the local sections directory
import Contact from './components/sections/Contact';
// Import the Footer component from the local layout directory
import Footer from './components/layout/Footer';
// Import the ErrorBoundary component from the local common directory to catch and handle errors in child components
import ErrorBoundary from './components/common/ErrorBoundary';
// Import the Testimonials component from the local sections directory
import Testimonials from './components/sections/Testimonials';
// Import the WorkProcess component from the local sections directory
import WorkProcess from './components/sections/WorkProcess';

// Define the main App functional component that serves as the root of the application's component tree
function App() {
  // Whether the opening reveal has handed the brand letters to the navbar.
  // Flipping this true mounts the navbar's shared-layout logo pieces in the
  // same commit the centered ones unmount, which is what triggers the FLIP.
  const [logoRevealed, setLogoRevealed] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  // Whether the opening curtain overlay is still on screen.
  const [introDone, setIntroDone] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const revealLogo = useCallback(() => setLogoRevealed(true), []);
  const finishIntro = useCallback(() => { setLogoRevealed(true); setIntroDone(true); }, []);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => { if (preference.matches) finishIntro(); };
    preference.addEventListener('change', handleChange);
    return () => preference.removeEventListener('change', handleChange);
  }, [finishIntro]);

  useEffect(() => {
    if (introDone) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Reserve the scrollbar width to keep the logo's target stable during handoff.
    document.documentElement.classList.add('intro-playing');
    return () => {
      document.body.style.overflow = previous;
      document.documentElement.classList.remove('intro-playing');
    };
  }, [introDone]);

  // Return the JSX (UI structure) that will be rendered by this component
  return (
    // Render a main container div with Tailwind CSS classes for width, height, text color, overflow, positioning, and font family
    <MotionConfig reducedMotion="user"><LayoutGroup id="studio-opening">
    <div className="w-full min-h-screen text-primary overflow-x-hidden relative font-sans">
      {/* Opening "Dream Space Interiors" reveal that morphs into the navbar logo */}
      {!introDone && (
        <ErrorBoundary>
          <BrandIntro
            onReveal={revealLogo}
            onExited={finishIntro}
          />
        </ErrorBoundary>
      )}
      {/* Wrap the Navbar component in an ErrorBoundary to catch and isolate any errors that occur within it */}
      <ErrorBoundary><Navbar logoRevealed={logoRevealed} introDone={introDone} /></ErrorBoundary>
      {/* Render the main semantic HTML element to group the primary content of the page */}
      <main inert={!introDone}>
        {/* Wrap the Hero component in an ErrorBoundary */}
        <ErrorBoundary><Hero ready={introDone} /></ErrorBoundary>
        {/* Wrap the About component in an ErrorBoundary */}
        <ErrorBoundary><About /></ErrorBoundary>
        {/* Wrap the Services component in an ErrorBoundary */}
        <ErrorBoundary><Services /></ErrorBoundary>
        {/* Wrap the FeaturedProjects component in an ErrorBoundary */}
        <ErrorBoundary><FeaturedProjects /></ErrorBoundary>
        {/* Wrap the WhyChooseUs component in an ErrorBoundary */}
        <ErrorBoundary><WhyChooseUs /></ErrorBoundary>
        {/* Wrap the Testimonials component in an ErrorBoundary */}
        <ErrorBoundary><Testimonials /></ErrorBoundary>
        {/* Wrap the WorkProcess component in an ErrorBoundary */}
        <ErrorBoundary><WorkProcess /></ErrorBoundary>
        {/* Wrap the Contact component in an ErrorBoundary */}
        <ErrorBoundary><Contact /></ErrorBoundary>
      {/* Close the main semantic HTML element */}
      </main>
      {/* Wrap the Footer component in an ErrorBoundary */}
      <div inert={!introDone}><ErrorBoundary><Footer /></ErrorBoundary></div>
    {/* Close the main container div */}
    </div>
    </LayoutGroup></MotionConfig>
  // Close the return statement
  );
// Close the App component function definition
}

// Export the App component as the default export of this module, allowing it to be imported in other files (like main.jsx)
export default App;
