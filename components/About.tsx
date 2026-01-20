import React from 'react';
import {
    Layout,
    Code,
    Database,
    Video,
    PenTool,
    TrendingUp,
    Smartphone,
    ShoppingCart,
    Monitor,
    Share2,
    Palette
} from 'lucide-react';

const expertiseItems = [
    { icon: Monitor, label: "Web Development" },
    { icon: ShoppingCart, label: "E-commerce Solutions" },
    { icon: Smartphone, label: "App Development" },
    { icon: Share2, label: "Social Media Mgmt" },
    { icon: Palette, label: "UI/UX Design" },
    { icon: Database, label: "Data Science" },
    { icon: Video, label: "Video Editing" },
    { icon: PenTool, label: "Content Creation" },
    { icon: Code, label: "Custom Software" },
    { icon: TrendingUp, label: "SEO Strategy" },
];
import video from "../assets/Top view final.mp4";

const About: React.FC = () => {
    return (
        <section className="bg-white overflow-hidden">
            {/* Bio, Cards & Video Section */}
            <div className="max-w-8xl mx-auto px-6 lg:px-12 pt-24 pb-8">

                {/* Responsive Grid: 1 col mobile, 2 cols tablet, 12 cols desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Column 1: Text Bio (Span 5 on Desktop) */}
                    <div className="lg:col-span-5">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">About Me</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-lg font-light">
                            I am a multidisciplinary developer and creator with a unique blend of technical precision and artistic vision. Currently pursuing a Bachelor's in <strong>Data Science</strong>, I bridge the gap between analytical logic and creative storytelling.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                            With over <strong>4 years of experience</strong> in marketing, design, and content creation, I don't just build code, I build brands. From short-form video editing to full-stack web applications, I bring a holistic approach to every project.
                        </p>
                    </div>

                    {/* Column 2: Skill Cards Grid (Span 4 on Desktop) */}
                    <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full ">
                        {/* Card 1 */}
                        <div className="bg-gray-50 p-6 border border-gray-100 hover:border-black transition-colors duration-300 group rounded-sm">
                            <Code size={28} className="mb-4 text-gray-400 group-hover:text-black transition-colors" />
                            <h3 className="font-semibold mb-2">Full Stack</h3>
                            <p className="text-sm text-gray-500">React, Node.js, TS</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-gray-50 p-6 border border-gray-100 hover:border-black transition-colors duration-300 group rounded-sm">
                            <Database size={28} className="mb-4 text-gray-400 group-hover:text-black transition-colors" />
                            <h3 className="font-semibold mb-2">Data Science</h3>
                            <p className="text-sm text-gray-500">Python, Analysis, ML</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-gray-50 p-6 border border-gray-100 hover:border-black transition-colors duration-300 group rounded-sm">
                            <Video size={28} className="mb-4 text-gray-400 group-hover:text-black transition-colors" />
                            <h3 className="font-semibold mb-2">Creative</h3>
                            <p className="text-sm text-gray-500">Video Editing, Graphics</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-gray-50 p-6 border border-gray-100 hover:border-black transition-colors duration-300 group rounded-sm">
                            <TrendingUp size={28} className="mb-4 text-gray-400 group-hover:text-black transition-colors" />
                            <h3 className="font-semibold mb-2">Marketing</h3>
                            <p className="text-sm text-gray-500">Content Strategy, SEO</p>
                        </div>
                    </div>

                    {/* Column 3: Portrait Video (Span 3 on Desktop) */}
                    <div className="lg:col-span-3 w-full h-full flex items-center justify-center">
                        <div className="relative w-[250px] rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group bg-black">
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />

                            {/* Portrait Video */}
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-opacity duration-700"
                                poster="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
                            >
                                {/* Replace this source with your actual portrait video file */}
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                </div>
                <div className="w-full pt-16 pb-6 overflow-hidden relative">
                    <div
                        className="marquee-container flex gap-6 overflow-hidden select-none w-full"
                        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                    >
                        {/* Loop 1 */}
                        <div className="flex animate-marquee shrink-0 items-center gap-6 min-w-full w-max py-2">
                            {expertiseItems.map((item, index) => (
                                <div
                                    key={`loop1-${index}`}
                                    className="marquee-item inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-gray-600 transition-all duration-300 cursor-default hover:bg-gray-50 hover:border-gray-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:text-black hover:scale-105"
                                >
                                    <item.icon size={18} />
                                    <span className="text-sm font-medium tracking-wide whitespace-nowrap">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Loop 2 (Duplicate for seamless effect) */}
                        <div className="flex animate-marquee shrink-0 items-center gap-6 min-w-full w-max py-2" aria-hidden="true">
                            {expertiseItems.map((item, index) => (
                                <div
                                    key={`loop2-${index}`}
                                    className="marquee-item inline-flex items-center gap-3 px-6 py-3 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-gray-600 transition-all duration-300 cursor-default hover:bg-gray-50 hover:border-gray-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.05)] hover:text-black hover:scale-105"
                                >
                                    <item.icon size={18} />
                                    <span className="text-sm font-medium tracking-wide whitespace-nowrap">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;