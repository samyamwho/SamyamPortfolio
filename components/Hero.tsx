import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavigationLink } from '../types';
import myphoto from '../assets/me2.jpg';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-20">
      <div className="max-w-8xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="animate-in slide-in-from-bottom-10 duration-1000">
          <h2 className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-[0.2em] mb-8 fade-in-delay-1">
            Junior Frontend Engineer
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-12 fade-in-delay-2">
            Building digital <br />
            experiences that <br />
            <span className="text-gray-300">matter.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed font-light fade-in-delay-3">
            Specializing in React, TypeScript, and high-performance UI/UX.
            I create minimalist, functional, and aesthetically pleasing web applications. I specialize in creating eye-catching graphics for social media and developing engaging content for businesses. In addition to my design work, I also edit videos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 fade-in-delay-4">
            <Link
              to={NavigationLink.SERVICES}
              className="group flex items-center justify-center sm:justify-start gap-3 bg-black text-white px-8 py-4 font-medium hover:bg-gray-800 transition-all duration-300 rounded-full"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={NavigationLink.CONTACT}
              className="flex items-center justify-center gap-3 px-8 py-4 font-medium hover:bg-red-600 transition-all duration-300 bg-red-500 text-white rounded-full"
            >
              Book a meeting
            </Link>
          </div>
        </div>
        <div className="hidden md:flex justify-end animate-in slide-in-from-right-10 duration-1000 fade-in-delay-5">
          <img
            src={myphoto}
            alt="Developer portrait"
            className="w-full max-w-xs lg:max-w-sm xl:max-w-md rounded-xl shadow-2xl object-cover aspect-[3/4]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;