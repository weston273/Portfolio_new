import React from 'react';
import { GraduationCap, Code, Wrench, Briefcase, Award, Users } from 'lucide-react';

const Skills = () => {
  const skillsData = [
    {
      icon: GraduationCap,
      title: 'Education',
      className: 'skill-card-education',
      items: [
        { name: 'UNCOMMON', detail: 'Tech Foundation Program', level: 'Advanced', progress: 90 },
        { name: 'SCRATCH', detail: 'Programming Basics', level: 'Intermediate', progress: 70 },
        { name: 'HTML, CSS, JavaScript', detail: 'Web Development', level: 'Advanced', progress: 90 },
        { name: 'UI/UX Design', detail: 'Design Principles', level: 'Intermediate', progress: 70 }
      ]
    },
    {
      icon: Wrench,
      title: 'Software Skills',
      className: 'skill-card-software',
      items: [
        { name: 'Figma', detail: 'Design & Prototyping', level: 'Advanced', progress: 90 },
        { name: 'Adobe Creative Suite', detail: 'Graphics & Media', level: 'Intermediate', progress: 70 },
        { name: 'VS Code', detail: 'Development Environment', level: 'Advanced', progress: 90 },
        { name: 'Git & GitHub', detail: 'Version Control', level: 'Intermediate', progress: 70 }
      ]
    },
    {
      icon: Code,
      title: 'Languages',
      className: 'skill-card-languages',
      items: [
        { name: 'HTML', detail: 'Markup Language', level: 'Advanced', progress: 90 },
        { name: 'CSS', detail: 'Styling & Animation', level: 'Advanced', progress: 90 },
        { name: 'JavaScript', detail: 'Programming Logic', level: 'Intermediate', progress: 70 },
        { name: 'React', detail: 'Frontend Framework', level: 'Intermediate', progress: 70 }
      ]
    },
    {
      icon: Briefcase,
      title: 'Experience',
      className: 'skill-card-experience',
      items: [
        { name: '2025 - Present', detail: 'Freelance Designer', level: 'Current', progress: 85 },
        { name: 'Web Development', detail: 'Custom Websites', level: 'Active', progress: 85 },
        { name: 'Brand Design', detail: 'Logos & Identity', level: 'Active', progress: 85 },
        { name: 'UI/UX Projects', detail: 'Mobile & Web Apps', level: 'Active', progress: 85 }
      ]
    }
  ];

  const getLevelClass = (level) => {
    switch (level) {
      case 'Advanced': return 'skill-level-advanced';
      case 'Intermediate': return 'skill-level-intermediate';
      case 'Current': return 'skill-level-current';
      case 'Active': return 'skill-level-active';
      default: return 'skill-level-intermediate';
    }
  };

  return (
    <section className="skills-section">
      <div className="skills-header">
        <div className="skills-title-container">
          <Award className="skills-title-icon" size={36} />
          <h2 className="skills-title">
            Skills & <span className="skills-title-accent">Experience</span>
          </h2>
        </div>
        <p className="skills-description">
          A comprehensive overview of my technical skills, educational background, and professional experience in software development and graphic design
        </p>
        <div className="skills-divider"></div>
      </div>

      <div className="skills-grid">
        {skillsData.map((section, index) => {
          const Icon = section.icon;
          return (
            <div key={index} className={`skill-card ${section.className}`}>
              <div className="skill-card-header">
                <div className="skill-card-icon-container">
                  <Icon size={32} className="skill-card-icon" />
                </div>
                <h3 className="skill-card-title">{section.title}</h3>
                <div className="skill-card-divider"></div>
              </div>
              
              <div className="skill-items">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="skill-item">
                    <div className="skill-item-header">
                      <div className="skill-item-content">
                        <div className="skill-item-name">{item.name}</div>
                        <div className="skill-item-detail">{item.detail}</div>
                      </div>
                      <span className={`skill-level-badge ${getLevelClass(item.level)}`}>
                        {item.level}
                      </span>
                    </div>
                    <div className="skill-progress-bar">
                      <div 
                        className="skill-progress-fill"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="skills-footer">
        <div className="skills-footer-card">
          <div className="skills-footer-header">
            <Users className="skills-footer-icon" size={24} />
            <h3 className="skills-footer-title">Ready to Collaborate</h3>
          </div>
          <p className="skills-footer-text">
            I'm passionate about creating meaningful digital experiences through code and design. 
            Whether it's building responsive websites, crafting user interfaces, or developing brand identities, 
            I bring creativity and technical expertise to every project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;