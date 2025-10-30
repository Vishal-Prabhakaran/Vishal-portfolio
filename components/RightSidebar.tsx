
import React from 'react';

const RightSidebar: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col items-center fixed bottom-0 right-12 w-10 z-10">
      <div className="flex flex-col items-center space-y-6">
        <a 
          href="mailto:vishalprabhakaran18@gmail.com"
          className="font-mono text-sm tracking-widest text-dark-text-secondary hover:text-accent transition-all duration-300 hover:-translate-y-1"
          style={{ writingMode: 'vertical-rl' }}
        >
          vishalprabhakaran18@gmail.com
        </a>
      </div>
      <div className="w-px h-24 bg-dark-text-secondary mt-6"></div>
    </div>
  );
};

export default RightSidebar;