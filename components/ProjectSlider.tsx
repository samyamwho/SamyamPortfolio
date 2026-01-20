import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { NavigationLink } from '../types';

// Import each image
import CanWeTalkImg from '../assets/can we talk.png';
import InstagramGraphicsImg from '../assets/instagram graphics.png';
import JumexPosterImg from '../assets/Jumex poster.png';
import MomohouseImg from '../assets/momohouse.png';
import PerfumeImg from '../assets/perfume.png';
import PosterImg from '../assets/poster.png';

// content from Services.tsx for consistency
const projects = [
  {
    id: '1',
    title: 'Social media poster',
    category: 'Graphic Design',
    imageUrl: CanWeTalkImg,
  },
  {
    id: '2',
    title: 'Instagram graphics',
    category: 'Graphic Design',
    imageUrl: InstagramGraphicsImg,
  },
  {
    id: '3',
    title: 'Ad Design',
    category: 'Graphics Design',
    imageUrl: JumexPosterImg,
  },
  {
    id: '4',
    title: 'Social media poster',
    category: 'Graphic Design',
    imageUrl: MomohouseImg,
  },
  {
    id: '5',
    title: 'Social media Ad',
    category: 'Graphic Design',
    imageUrl: PerfumeImg,
  },
  {
    id: '6',
    title: 'Flyer Design',
    category: 'Graphic Design',
    imageUrl: PosterImg,
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Link
    to={NavigationLink.SERVICES}
    className="marquee-item block w-[280px] md:w-[320px] group relative shrink-0 transition-transform duration-500 hover:-translate-y-2"
  >
    {/* Image Container with 3D Shadow Effect */}
    <div className="overflow-hidden bg-gray-100 aspect-[4/5] mb-6 relative rounded-sm shadow-sm group-hover:shadow-2xl transition-all duration-500">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay on Hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

      {/* Center Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
          <span className="text-sm font-semibold tracking-wide">View</span>
          <ArrowUpRight size={16} />
        </div>
      </div>
    </div>

    {/* Text Info */}
    <div className="pl-1">
      <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:text-gray-600 transition-colors">
        {project.title}
      </h3>
      <div className="flex items-center gap-2">
        <span className="w-8 h-[1px] bg-gray-300"></span>
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          {project.category}
        </p>
      </div>
    </div>
  </Link>
);

const ProjectSlider: React.FC = () => {
  return (
    <section className="py-24 border-t border-gray-100 overflow-hidden bg-white relative">
      <div className="max-w-8xl mx-auto px-6 lg:px-12 mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Selected Works</h2>
          <p className="text-gray-500 max-w-md font-light">
            A curation of visual stories, brand identities, and digital experiences crafted with precision.
          </p>
        </div>
        <Link
          to={NavigationLink.SERVICES}
          className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium hover:bg-red-600 transition-all duration-300 bg-red-500 text-white rounded-full w-full sm:w-auto whitespace-nowrap"
        >
          View All <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      <div className="relative w-full perspective-[2000px]">
        <div className="marquee-container flex gap-8 overflow-hidden select-none w-full py-12 -my-12 origin-center">
          <div className="flex animate-marquee-reverse shrink-0 items-start gap-8 min-w-full w-max">
            {projects.map((project, index) => (
              <ProjectCard key={`p1-${index}`} project={project} />
            ))}
          </div>
          <div className="flex animate-marquee-reverse shrink-0 items-start gap-8 min-w-full w-max" aria-hidden="true">
            {projects.map((project, index) => (
              <ProjectCard key={`p2-${index}`} project={project} />
            ))}
          </div>
          <div className="flex animate-marquee-reverse shrink-0 items-start gap-8 min-w-full w-max" aria-hidden="true">
            {projects.map((project, index) => (
              <ProjectCard key={`p3-${index}`} project={project} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 px-6 lg:px-12 md:hidden flex justify-center">
        <Link
          to={NavigationLink.SERVICES}
          className="flex items-center gap-2 text-sm font-semibold hover:text-gray-600 transition-colors"
        >
          View All Projects <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default ProjectSlider;
