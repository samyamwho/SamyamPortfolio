import React from 'react';
import { Code2, Database, PenTool, Layout, Terminal, LineChart, Bot, Sparkles, DownloadIcon, GithubIcon } from 'lucide-react';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: Bot,
    description: "Building intelligent systems with predictive modeling, workflow automation, and Exploratory Data Analysis (EDA). Passionate about Generative AI integration.",
    tags: ["Machine Learning", "Automation", "EDA", "GenAI", "Python"]
  },
  {
    title: "Data Analysis & Visualization",
    icon: LineChart,
    description: "Competent in analyzing complex datasets and developing compelling visualizations using R, Python (Pandas/Matplotlib), and D3.js.",
    tags: ["R", "ggplot2", "Matplotlib", "Seaborn", "Data Storytelling"]
  },
  {
    title: "Web Development",
    icon: Code2,
    description: "Proficient in dynamic, responsive web development using React, MERN stack, and modern TypeScript ecosystems.",
    tags: ["React", "TypeScript", "MERN Stack", "Tailwind CSS"]
  },
  {
    title: "Programming Languages",
    icon: Terminal,
    description: "Fluent in Python and C for application development and data processing. Strong foundation in object-oriented programming principles.",
    tags: ["Python", "C", "OOP", "Algorithm Design"]
  },
  {
    title: "UI/UX & Graphic Design",
    icon: PenTool,
    description: "Experienced in designing intuitive interfaces and creating visually appealing graphics for social media and business content.",
    tags: ["Figma", "Photoshop", "UI Design", "Visual Identity"]
  },
  {
    title: "Content & SEO",
    icon: Layout,
    description: "Proficient in writing premium content and utilizing SEO strategies to enhance online presence and brand visibility.",
    tags: ["SEO Strategy", "Content Writing", "Copywriting", "Brand Strategy"]
  }
];

const Skills: React.FC = () => {
  return (
    <section className="bg-white text-black py-32  relative overflow-hidden">
      {/* Background Decorative Elements for 3D depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-gray-200/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-60"></div>
      
      <div className="max-w-8xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-20 md:mb-28 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 text-gray-500 font-medium tracking-widest uppercase text-xs">
              <Sparkles size={14} />
              <span>Technical Proficiency</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              Digital Capabilities
            </h2>
          </div>
          {/* Download CV Button */}
          <div className="mt-8 md:mt-0 flex-shrink-0">
            <a 
              href="./assets/Samyam Shrestha CV.pdf" // Replace with the actual path to your CV file
              download 
          className="flex items-center justify-center gap-3 px-8 py-4 font-medium hover:bg-red-600 transition-all duration-300 bg-red-500 text-white rounded-full"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[1000px]">
          {skillCategories.map((skill, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-gray-200 p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 hover:border-black/10"
            >
              {/* 3D Floating Icon Box */}
              <div className="mb-8 relative">
                 <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:scale-110">
                    <skill.icon size={28} strokeWidth={1.5} />
                 </div>
              </div>
              
              <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-black/80 transition-colors">
                {skill.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-8 font-light min-h-[80px]">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs font-semibold px-3 py-1.5 rounded-md bg-gray-50 text-gray-600 border border-gray-100 group-hover:border-gray-200 group-hover:bg-white transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;