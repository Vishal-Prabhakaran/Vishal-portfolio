import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ Use your actual resume file in the public folder
  const resumeFile = "/VishalP_Resume.pdf"; // Put this PDF inside your project's public folder

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", name: "About" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const linkClasses =
    "cursor-pointer text-dark-text-secondary hover:text-accent transition-colors duration-300 px-3 py-2 rounded-md font-mono text-sm";
  const mobileLinkClasses =
    "block cursor-pointer text-dark-text hover:text-accent transition-colors duration-300 py-4 text-center text-lg font-mono";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark-card/80 shadow-lg backdrop-blur-sm" : ""
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-accent font-mono text-2xl font-bold hover:opacity-80 transition-opacity"
        >
          VP
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={linkClasses}
            >
              {link.name}
            </a>
          ))}
          <a
            href={resumeFile}
            download="Vishal_Resume.pdf"
            className="ml-4 font-mono text-sm border border-accent text-accent px-4 py-2 rounded hover:bg-accent/10 transition-colors duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-accent focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-card h-screen w-3/4 fixed top-0 right-0 shadow-2xl flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-6 text-accent"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={mobileLinkClasses}
            >
              {link.name}
            </a>
          ))}
          <a
            href={resumeFile}
            download="Vishal_Resume.pdf"
            className="mt-8 font-mono text-lg border border-accent text-accent px-8 py-3 rounded hover:bg-accent/10 transition-colors duration-300"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
