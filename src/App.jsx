import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import Testimonials from './components/Testimonials';
import WorkProcess from './components/WorkProcess';
function App() {
  return (
    <div className="w-full min-h-screen text-primary overflow-x-hidden relative font-sans">
      <ErrorBoundary><Navbar /></ErrorBoundary>
      <main>
        <ErrorBoundary><Hero /></ErrorBoundary>
        <ErrorBoundary><About /></ErrorBoundary>
        <ErrorBoundary><Services /></ErrorBoundary>
        <ErrorBoundary><FeaturedProjects /></ErrorBoundary>
        <ErrorBoundary><WhyChooseUs /></ErrorBoundary>
        <ErrorBoundary><Testimonials /></ErrorBoundary>
        <ErrorBoundary><WorkProcess /></ErrorBoundary>
        <ErrorBoundary><Contact /></ErrorBoundary>
      </main>
      <ErrorBoundary><Footer /></ErrorBoundary>
    </div>
  );
}

export default App;
