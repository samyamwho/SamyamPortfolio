import React from 'react';
import { Project, Service } from '../types';
import { ArrowUpRight, Code2, Palette, Database, Smartphone } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Healthy Heart Blood Bank',
    category: 'PHP / MySQL',
    description: 'A dedicated donor-recipient bridge application featuring a comprehensive blood bank management system and database optimization.',
    imageUrl: './assets/services/heaalthy.png',
    link: 'https://github.com/samyamwho/HealthyHeart'
  },
  {
    id: '2',
    title: 'Rescue Route',
    category: 'Flutter / Mobile App',
    description: 'An Uber-like ambulance service application designed to streamline emergency booking and real-time tracking for rapid response.',
    imageUrl: './assets/services/image.png',
    link: 'https://github.com/samyamwho/Rescue_Route' // Placeholder if no specific link
  },
  {
    id: '3',
    title: 'School Management Portal',
    category: 'React / Frontend',
    description: 'A responsive academic platform featuring event management, resource sharing, and accessible interfaces for students and staff.',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2600&auto=format&fit=crop',
    link: 'https://github.com/samyamwho'
  },
  {
    id: '4',
    title: 'Hospital Management System',
    category: 'Python / OOP',
    description: 'Desktop application for managing patient records, doctor schedules, and billing history to increase operational efficiency.',
    imageUrl: './assets/services/Hospitalmgmt.jpg',
    link: 'https://github.com/samyamwho'
  },
  {
    id: '5',
    title: 'Blue Pixels Wedsite development',
    category: 'React / Frontend',
    description: 'Developed visual concepts and social media graphics for diverse clients, ensuring consistent brand impact and engagement.',
    imageUrl: './assets/services/BluePixels.png',
    link: 'https://bluepixelsdesign.com/'
  }
];

const services: (Service & { icon: any })[] = [
  {
    id: 'web',
    title: 'Web Application Development',
    description: 'Building scalable, responsive web solutions using React, TypeScript, and the MERN stack. I focus on clean architecture and seamless user experiences.',
    icon: Code2
  },
  {
    id: 'data',
    title: 'Data Science & Analysis',
    description: 'Transforming raw data into actionable insights through EDA, visualization, and predictive modeling using Python, Pandas, and R.',
    icon: Database
  },
  {
    id: 'design',
    title: 'Graphic & UI/UX Design',
    description: 'Creating intuitive interfaces and compelling brand visuals using Figma and Adobe Creative Suite. Bridging the gap between function and aesthetics.',
    icon: Palette
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'Designing cross-platform mobile experiences with Flutter. Focusing on performance, native feel, and efficient state management.',
    icon: Smartphone
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white text-black py-24 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Selected Works</h1>
          <p className="text-xl text-gray-500 max-w-2xl font-light leading-relaxed">
             A curation of engineering projects and creative works that demonstrate a passion for performance, data logic, and minimalist design.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block cursor-pointer"
            >
              {/* Image Wrapper */}
              <div className="overflow-hidden bg-gray-50 mb-8 relative aspect-[16/10] rounded-sm">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                
                {/* Hover Button */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    View Project <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex justify-between items-start">
                <div className="flex-1 pr-6">
                  <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:underline decoration-1 underline-offset-4 decoration-gray-300">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                    {project.category}
                  </p>
                  <p className="text-gray-600 leading-relaxed font-light text-lg">
                    {project.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section className="bg-gray-50 py-32 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Technical Services</h2>
            <p className="text-gray-500 font-light text-lg">Comprehensive solutions for digital transformation.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-sm border border-gray-100 hover:border-black/20 hover:shadow-xl transition-all duration-300 group">
                <div className="mb-6 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
