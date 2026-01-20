import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: "BSc (Hons) Computer and Data Science",
    school: "Sunway College Kathmandu",
    period: "Jul, 2022 - Present",
    location: "Kathmandu",
    description: "Currently pursuing 4th Year. Gaining in-depth knowledge in algorithms, data analysis, and software engineering principles.",
    gpa: "Ongoing"
  },
  {
    id: 2,
    degree: "+2 Science",
    school: "Global School of Science",
    period: "Jul, 2020 - Jun, 2022",
    location: "Kathmandu",
    description: "Completed higher secondary education with a focus on science and mathematics.",
    gpa: "3.28 GPA"
  },
  {
    id: 3,
    degree: "SEE",
    school: "Siddhartha Vidhyapeeth",
    period: "Completed",
    location: "Bhaktapur",
    description: "Achieved exemplary academic performance in secondary education.",
    gpa: "3.95 GPA"
  }
];

const Education: React.FC = () => {
  return (
    <section className="bg-white py-32 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2 hidden md:block"></div>
          
          {/* Mobile Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 md:hidden"></div>

          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div 
                key={item.id} 
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 relative group perspective-[1000px] ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Date/Period (Desktop) */}
                <div className={`hidden md:block w-1/2 px-12 text-gray-400 font-medium tracking-widest uppercase text-sm ${
                  index % 2 === 0 ? 'text-left' : 'text-right'
                }`}>
                  {item.period}
                </div>

                {/* Timeline Dot (Center) */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-black rounded-full z-10 transform -translate-x-1/2 shadow-[0_0_0_4px_rgba(255,255,255,1)] group-hover:scale-125 transition-transform duration-300"></div>

                {/* Content Card */}
                <div className="w-full pl-20 md:pl-0 md:w-1/2 px-0 md:px-12">
                  <div className="relative bg-gray-50 p-8 rounded-2xl border border-gray-100 transition-all duration-500 transform-style-3d group-hover:rotate-x-2 group-hover:rotate-y-2 group-hover:shadow-2xl group-hover:bg-white group-hover:-translate-y-2">
                    
                    {/* Period (Mobile) */}
                    <div className="md:hidden flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                      <Calendar size={14} />
                      {item.period}
                    </div>

                    <h3 className="text-xl font-bold text-black mb-2">{item.school}</h3>
                    <div className="text-lg font-medium text-gray-700 mb-4">{item.degree}</div>
                    
                    <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-gray-200 pt-4 mt-auto">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={16} />
                        {item.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold text-black bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                        <Award size={16} className="text-yellow-500" />
                        {item.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;