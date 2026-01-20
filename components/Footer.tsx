import React from 'react';
import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com/samyamwho" className="text-gray-400 hover:text-black transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.instagram.com/samyamventures/" className="text-gray-400 hover:text-black transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://www.linkedin.com/in/samyam-shrestha-130991224/" className="text-gray-400 hover:text-black transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:samyamshr@example.com" className="text-gray-400 hover:text-black transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;