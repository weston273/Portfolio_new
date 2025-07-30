import React, { useState } from 'react';
import { ExternalLink, Palette, Code, ChevronLeft, ChevronRight, Eye, Github } from 'lucide-react';

const Portfolio = () => {
  const [currentGraphicIndex, setCurrentGraphicIndex] = useState(0);
  const [currentSoftwareIndex, setCurrentSoftwareIndex] = useState(0);

  const graphicProjects = [
    {
      title: 'Mobile App Design',
      description: 'Design for a Mobile App - HomeTrade application with modern UI/UX principles',
      image: '/images/Nokia XR211.webp',
      link: 'https://www.figma.com/design/xKx7PqH3NTCTsO95kyMuHS/HomeTrade?node-id=0-1&t=tGgOut0o72tCiFN9-1',
      tags: ['Mobile', 'UI/UX', 'Figma', 'E-commerce'],
      category: 'Mobile Design'
    },
    {
      title: 'SmartScribe Web-app',
      description: 'Home screen for an AI powered note taking app with dark theme and modern interface',
      image: '/images/AI powered note taking App - dark theme desktop_newDesign.webp',
      link: 'https://www.figma.com/design/l9jgFl2iKcFHX0NeX2wG3y/SmartScribe?node-id=0-1&t=U5FtRRbE2IDONjrD-1',
      tags: ['Web Design', 'AI', 'Dark Theme', 'Productivity'],
      category: 'Web Design'
    },
    {
      title: 'Fast Food App Login',
      description: 'Login Screen for a fast food application with intuitive user experience',
      image: '/images/LOGIN.webp',
      link: '#',
      tags: ['Mobile', 'Food App', 'Authentication', 'UX'],
      category: 'Mobile Design'
    },
    {
      title: 'Pamphlet Front Cover',
      description: 'The front cover of a pamphlet for Kufamba Tose Trust with professional layout',
      image: '/images/Kufamba ToseFront Cover.webp',
      link: 'https://www.figma.com/design/YnKuL5xhjICjmpjDG4sZRo/Kufamba-Tose-Trust-pamphlet?node-id=72-13&t=Yo8HTRyJN5rWF6b6-1',
      tags: ['Print Design', 'Branding', 'Non-profit', 'Layout'],
      category: 'Print Design'
    },
    {
      title: 'The Blu Travel Company',
      description: 'The Logo for a travel agency with modern branding approach',
      image: '/images/The Blu Travel Company.webp',
      link: 'https://www.figma.com/design/vqUVP7a2dyvXLrvraOyNa6/Travel-Agency-Logo?node-id=0-1&t=TGMjQcGaPgMftB3b-1',
      tags: ['Logo Design', 'Travel', 'Branding', 'Identity'],
      category: 'Branding'
    },
    {
      title: 'Specialist Flyer',
      description: 'Flyer for a junior school with engaging visual design',
      image: '/images/Specialist Flyer.png',
      link: '#',
      tags: ['Print Design', 'Education', 'Marketing', 'Flyer'],
      category: 'Print Design'
    }
  ];

  const softwareProjects = [
    {
      title: 'NYANZVI Website',
      description: 'Website for a design company built with modern web technologies and responsive design',
      image: '/images/image.png',
      link: 'https://nyanzvi-website-1.vercel.app/',
      github: '#',
      tags: ['React', 'Web Development', 'Business', 'Responsive'],
      category: 'Web Development'
    },
    {
      title: 'RPG Game',
      description: 'RPG game from freecodecamp.org built with vanilla JavaScript and interactive gameplay',
      image: '/images/image copy.png',
      link: 'https://rpg-seven-woad.vercel.app/',
      github: '#',
      tags: ['JavaScript', 'Game Development', 'Interactive', 'Canvas'],
      category: 'Game Development'
    },
    {
      title: 'SmartScribe Web-app',
      description: 'An AI note taking app using React with modern UI and intelligent features',
      image: '/images/smartScribe.png',
      link: 'https://smart-scribe-thz3.vercel.app/',
      github: '#',
      tags: ['React', 'AI', 'Productivity', 'TypeScript'],
      category: 'Web Application'
    }
  ];

  const nextGraphic = () => {
    setCurrentGraphicIndex((prev) => (prev + 1) % graphicProjects.length);
  };

  const prevGraphic = () => {
    setCurrentGraphicIndex((prev) => (prev - 1 + graphicProjects.length) % graphicProjects.length);
  };

  const nextSoftware = () => {
    setCurrentSoftwareIndex((prev) => (prev + 1) % softwareProjects.length);
  };

  const prevSoftware = () => {
    setCurrentSoftwareIndex((prev) => (prev - 1 + softwareProjects.length) % softwareProjects.length);
  };

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-image-container">
        <img 
          src={project.image} 
          alt={project.title}
          className="project-image"
        />
        
        <div className="project-overlay">
          <div className="project-overlay-buttons">
            {project.link !== '#' && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-overlay-button"
              >
                <Eye size={20} className="project-overlay-icon" />
              </a>
            )}
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-overlay-button"
              >
                <Github size={20} className="project-overlay-icon" />
              </a>
            )}
          </div>
          
          <div className="project-category-badge">
            {project.category}
          </div>
          
          <div className="project-tags">
            {project.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-links">
          {project.link !== '#' && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalLink size={18} className="project-link-icon" />
              View Project
            </a>
          )}
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link project-link-github"
            >
              <Github size={18} className="project-link-icon" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const CarouselSection = ({ 
    title, 
    icon: Icon, 
    projects, 
    currentIndex, 
    onNext, 
    onPrev,
    description,
    iconContainerClass
  }) => (
    <div className="portfolio-carousel-section">
      <div className="carousel-header">
        <div className="carousel-title-container">
          <div className={`carousel-icon-container ${iconContainerClass}`}>
            <Icon className="carousel-icon" size={36} />
          </div>
          <h2 className="carousel-title">
            {title.split(' ').slice(0, -1).join(' ')} <span className="carousel-title-accent">{title.split(' ').slice(-1)}</span>
          </h2>
        </div>
        <p className="carousel-description">{description}</p>
        <div className="carousel-divider"></div>
      </div>

      <div className="carousel-container">
        <div className="carousel-navigation">
          <button
            onClick={onPrev}
            className="carousel-nav-button"
            aria-label="Previous project"
          >
            <ChevronLeft size={28} className="carousel-nav-icon" />
          </button>

          <div className="carousel-content">
            <div className="carousel-project-container">
              <ProjectCard project={projects[currentIndex]} />
            </div>
          </div>

          <button
            onClick={onNext}
            className="carousel-nav-button"
            aria-label="Next project"
          >
            <ChevronRight size={28} className="carousel-nav-icon" />
          </button>
        </div>

        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => title.includes('GRAPHIC') ? setCurrentGraphicIndex(index) : setCurrentSoftwareIndex(index)}
              className={`carousel-dot ${
                index === currentIndex ? 'carousel-dot-active' : 'carousel-dot-inactive'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-counter">
          <div className="carousel-counter-container">
            <span className="carousel-counter-current">{currentIndex + 1}</span>
            <span className="carousel-counter-separator">of</span>
            <span className="carousel-counter-total">{projects.length}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <h1 className="portfolio-main-title">
          My <span className="portfolio-main-title-accent">Portfolio</span>
        </h1>
        <p className="portfolio-main-description">
          Explore my creative journey through design and development projects that showcase my passion for creating meaningful digital experiences.
        </p>
      </div>

      <CarouselSection
        title="GRAPHIC DESIGN PORTFOLIO"
        icon={Palette}
        projects={graphicProjects}
        currentIndex={currentGraphicIndex}
        onNext={nextGraphic}
        onPrev={prevGraphic}
        description="Creative visual solutions spanning mobile apps, web interfaces, branding, and print design. Each project represents a unique challenge solved through thoughtful design thinking and user-centered approach."
        iconContainerClass="carousel-icon-container-graphic"
      />

      <CarouselSection
        title="SOFTWARE DEVELOPMENT PORTFOLIO"
        icon={Code}
        projects={softwareProjects}
        currentIndex={currentSoftwareIndex}
        onNext={nextSoftware}
        onPrev={prevSoftware}
        description="Full-stack web applications and interactive experiences built with modern technologies. These projects demonstrate my ability to transform ideas into functional, user-friendly digital solutions."
        iconContainerClass="carousel-icon-container-software"
      />
    </section>
  );
};

export default Portfolio;