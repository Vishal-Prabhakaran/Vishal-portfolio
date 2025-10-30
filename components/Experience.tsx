import React, { useState } from 'react';
import type { Experience } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences: Experience[] = [
   {
    role: 'Web Development Intern',
    company: 'Pencil Walk private limited',
    period: 'Internship',
    description: [
      'Worked with a team to build and maintain web applications using HTML, CSS, JavaScript, and PHP.',
      'Gained hands-on experience in real-time project development cycles and agile methodologies.',
      'Enhanced web development skills by applying them to practical, industry-level tasks.',
      'Contributed to creating responsive and user-friendly web interfaces for various clients.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'E2o technologies',
    period: 'Current',
    description: [
      'Developing and maintaining web applications using Angular, TypeScript, and Bootstrap for the front-end.',
      'Building robust back-end services with C# and the .NET framework.',
      'Managing and querying databases using MySQL.',
      'Deploying and managing applications on cloud platforms like Azure and AWS.',
    ],
  },
 
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  const activeExperience = experiences[activeTab];

  return (
    <section ref={ref} id="experience" className="py-24 md:py-32">
       <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl font-bold text-dark-text mb-8 font-mono flex items-center">
          <span className="text-accent mr-4">02.</span>Where I've Worked
          <span className="ml-6 h-px w-24 md:w-64 bg-dark-text-secondary/30"></span>
        </h2>
        <div className="flex flex-col md:flex-row min-h-[300px]">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b-2 md:border-b-0 md:border-l-2 border-dark-card mb-6 md:mb-0 md:mr-6">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left px-4 py-3 font-mono text-sm whitespace-nowrap transition-all duration-300 
                  ${activeTab === index 
                    ? 'text-accent bg-dark-card/50 border-accent md:border-l-2 -ml-px' 
                    : 'text-dark-text-secondary hover:text-accent hover:bg-dark-card/30 border-dark-card'
                  }`}
              >
                {exp.company}
              </button>
            ))}
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-dark-text">
              {activeExperience.role} <span className="text-accent">@ {activeExperience.company}</span>
            </h3>
            <p className="font-mono text-sm mb-4">{activeExperience.period}</p>
            <ul className="space-y-3">
              {activeExperience.description.map((item, index) => (
                <li key={index} className="flex">
                  <span className="text-accent mr-4">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;