
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} id="hero" className="min-h-screen flex flex-col justify-center">
      <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <p className="text-accent font-mono text-md md:text-lg mb-4" style={{ animationDelay: '100ms' }}>
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-text mb-2">
          Vishal P.
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-text-secondary mb-8">
          I build solutions for the web.
        </h2>
        <p className="max-w-xl text-lg mb-12">
          I'm a passionate Full Stack Web Developer with a solid foundation in front-end and back-end technologies. My goal is to create impactful web solutions by delivering clean, maintainable code.
        </p>
        <a 
          href="#projects"
          className="font-mono text-lg border border-accent text-accent px-8 py-4 rounded hover:bg-accent/10 transition-colors duration-300"
        >
          Check out my work!
        </a>
      </div>
    </section>
  );
};

export default Hero;