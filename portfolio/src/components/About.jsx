import React from 'react';
import { Mail, Instagram, Phone, MapPin } from 'lucide-react';
import '../../src/index.css'

const About = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'sululuweston@gmail.com',
      href: 'mailto:sululuweston@gmail.com',
      className: 'contact-link-email'
    },
    {
      icon: Instagram,
      label: '@wesy5748',
      href: 'https://www.instagram.com/wesy5748?utm_source=qr&igsh=MWhreWNqOGh4M2VqbQ==',
      className: 'contact-link-instagram'
    },
    {
      icon: Phone,
      label: '(+263) 771 840 862',
      href: 'tel:+263771840862',
      className: 'contact-link-phone'
    }
  ];

  return (
    <>
      <section className="intro-section">
        <div className="intro-content">
          <h2 className="intro-title">Weston N Sululu</h2>
          <div className="intro-divider"></div>
          
          <div className="intro-text-container">
            <p className="intro-text">
              I began my creative and tech journey this year at <span className="intro-highlight">Uncommon</span>, where I explored the foundations of tech and design. I started with Scratch, then expanded into UX/UI Design, Digital Marketing, and Software Development.
            </p>
            <p className="intro-text">
              Along the way, I've learned to build and design using <span className="intro-tech">HTML, CSS, JavaScript, React</span>, and more — combining design thinking with code to create meaningful, user-focused experiences.
            </p>
            <p className="intro-conclusion">
              This portfolio contains some of my work and assignments.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-grid">
          <div className="about-image-container">
            <div className="about-image-bg"></div>
            <img 
              src="/Weston/images/PROFILEPIC.webp" 
              alt="Weston N Sululu Profile" 
              className="about-image"
            />
            <div className="about-decorative-element"></div>
            <div className="about-decorative-element"></div>
          </div>
          
          <div className="about-content">
            <div className="about-header">
              <h2 className="about-hello">
                <span className="about-hello-text">HELLO</span>
                <span className="about-hello-accent">!</span>
              </h2>
              <div className="about-divider-small"></div>
            </div>
            
            <div className="about-text">
              <p>
                My Name is <span className="about-name">Weston N Sululu</span>.
              </p>
              <p>
                I'm a software developer and graphic designer based in <span className="about-location">Mufakose, Harare, Zimbabwe</span>. I've been working as a freelance designer for about a year. I love art and visual things. I work on websites, branding, logos, social media content, posters, and layouts.
              </p>
            </div>
            
            <div className="contact-section">
              <h3 className="contact-title">
                <MapPin size={20} className="contact-icon" />
                Get In Touch
              </h3>
              <div className="contact-links">
                {contactLinks.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`contact-link ${contact.className}`}
                    >
                      <div className="contact-link-icon-container">
                        <Icon size={20} />
                      </div>
                      <span className="contact-link-text">{contact.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;