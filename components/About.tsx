import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const technologies = [
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "C# & .NET",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Azure",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  {
  name: "C#",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
},
];

const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <section ref={ref} id="about" className="py-24 md:py-32">
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl font-bold text-dark-text mb-8 font-mono flex items-center">
          <span className="text-accent mr-4">01.</span>About Me
          <span className="ml-6 h-px w-24 md:w-64 bg-dark-text-secondary/30"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Left Section - About Text */}
          <div className="md:col-span-3 text-lg">
            <p className="mb-4">
              I'm a passionate and highly motivated Full Stack Web Developer
              with a solid foundation in front-end and back-end technologies.
              I'm proficient in HTML, CSS, JavaScript, and frameworks like
              Angular,React and Node.js.
            </p>
            <p className="mb-4">
              I am skilled in database management with SQL and NoSQL systems,
              and experienced in building responsive, user-friendly web
              applications. I possess strong problem-solving skills and a keen
              ability to learn new technologies quickly. I have completed my
              Bachelor’s degree in Computer Science at Mannar Thirumalai Naicker
              College, with graduation expected in April 2026.
            </p>

            <p className="mb-6">
              My goal is to create impactful web solutions, focused on
              delivering clean, maintainable code while adhering to industry
              best practices. Here are a few technologies I've been working with
              recently:
            </p>

            {/* Technologies Grid */}
            <div className="grid grid-cols-5 gap-4 mt-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-start p-2 rounded-lg transition-all duration-300 hover:bg-dark-card hover:-translate-y-1 group"
                  title={tech.name}
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="mt-2 text-xs text-center font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:col-span-2 relative group w-full max-w-sm mx-auto">
            <div className="absolute inset-0 bg-accent rounded-lg transform transition duration-500 group-hover:rotate-3 group-hover:scale-105"></div>
            <div className="relative bg-dark-bg rounded-lg overflow-hidden border-2 border-accent/50">
              <img
                src="/components/images/vishal.jpeg"
                alt="Vishal P."
                className="w-full h-full object-cover transition duration-500 group-hover:filter-none filter grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
