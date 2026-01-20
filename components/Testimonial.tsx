import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonialData = [
  {
   id: 1,
    text: "Samyam has a unique ability to bridge the gap between complex data logic and beautiful user interfaces. His work on our web platforms has consistently delivered both high performance and aesthetic excellence. A truly talented engineer.",
    author: "Ragav",
    role: "Senior Software Architect"
  },
  {
    id: 2,
    text: "Samyam Shrestha is a talented young designer/ my friend  whose creativity honestly feels unlimited sometimes I wonder if he even sleeps. In his 20s, he already brings a rare mix of design maturity, clean aesthetics, and that typical Nepali ‘hard-work-gardiney’ energy. He turns ideas into visuals that look purposeful, modern, and genuinely impressive. With his originality and attention to detail, Samyam is the kind of creator who makes you say, ‘Yo manche ta future ma dherai thau pugcha.",
    author: "Solomon Silwal",
    role: "Product Manager"
  },
  {
    id: 3,
    text: "Exceptional creative vision. Whether it's video editing or UI design, I found Samyam's attention to detail to be second to none. He brings a level of professionalism and technical skill that is rare to find in a junior engineer.",
    author: "Nischal Basnet",
    role: "Ceo, Blue Pixels Design"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
      setIsAnimating(false);
    }, 300); // Wait for fade out
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
      setIsAnimating(false);
    }, 300);
  };

  // Auto-advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonialData[currentIndex];

  return (
    <section className="bg-white py-32 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 lg:px-12">
        
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-4xl font-semibold tracking-tighter">Client Stories</h2>
          <div className="hidden md:flex gap-4">
             <button 
               onClick={prevTestimonial}
               className="p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
               aria-label="Previous testimonial"
             >
               <ChevronLeft size={20} />
             </button>
             <button 
               onClick={nextTestimonial}
               className="p-3 rounded-full border border-gray-200 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
               aria-label="Next testimonial"
             >
               <ChevronRight size={20} />
             </button>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto bg-gray-50 border border-gray-100 p-8 md:p-16 rounded-2xl">
          
          {/* Decorative Quote Icon */}
          <div className="absolute top-8 left-8 md:top-12 md:left-12 opacity-10">
            <Quote size={80} className="text-black fill-black transform -scale-x-100" />
          </div>

          <div className={`relative z-10 transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
             <p className="text-xl md:text-xl lg:text-xl font-light leading-relaxed text-gray-500 mb-12">
               "{current.text}"
             </p>
             
             <div className="flex flex-col md:flex-row justify-between items-end border-t border-gray-200 pt-8 gap-6">
               <div>
                 <h4 className="font-bold text-xl text-black">{current.author}</h4>
                 <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mt-2">{current.role}</p>
               </div>

               {/* Mobile Controls */}
               <div className="flex md:hidden gap-4">
                 <button 
                   onClick={prevTestimonial}
                   className="p-3 rounded-full bg-white border border-gray-200 hover:bg-black hover:text-white transition-all duration-300"
                 >
                   <ChevronLeft size={20} />
                 </button>
                 <button 
                   onClick={nextTestimonial}
                   className="p-3 rounded-full bg-white border border-gray-200 hover:bg-black hover:text-white transition-all duration-300"
                 >
                   <ChevronRight size={20} />
                 </button>
               </div>
             </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-black' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;