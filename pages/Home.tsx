import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ProjectSlider from '../components/ProjectSlider';
import Skills from '../components/Skills';
import Education from '../components/Education';  
import Testimonials from '../components/Testimonial';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <ProjectSlider />
      <Skills />
      <Education />
      <Testimonials />
    </div>
  );
};

export default Home;