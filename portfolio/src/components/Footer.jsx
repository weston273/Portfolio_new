import React from 'react';
import { Heart, Github, Mail, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Mail,
      href: 'mailto:sululuweston@gmail.com',
      label: 'Email',
      className: 'footer-social-link-email'
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/wesy5748?utm_source=qr&igsh=MWhreWNqOGh4M2VqbQ==',
      label: 'Instagram',
      className: 'footer-social-link-instagram'
    },
    {
      icon: Github,
      href: 'https://github.com/weston273',
      label: 'GitHub',
      className: 'footer-social-link-github'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-bg-element"></div>
      <div className="footer-bg-element"></div>
      
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-brand-title">Weston N Sululu</h3>
            <p className="footer-brand-description">
              Software Developer & Graphic Designer passionate about creating meaningful digital experiences through code and design.
            </p>
            <div className="footer-social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`footer-social-link ${social.className}`}
                    aria-label={social.label}
                  >
                    <Icon size={20} className="footer-social-icon" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <div className="footer-links-list">
              {['About', 'Skills', 'Portfolio', 'Contact'].map((link, index) => (
                <a
                  key={index}
                  href={`${link.toLowerCase()}`}
                  className="footer-link"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-contact">
            <h4 className="footer-contact-title">Get In Touch</h4>
            <div className="footer-contact-list">
              <p className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" />
                sululuweston@gmail.com
              </p>
              <p className="footer-contact-item">
                <Instagram size={16} className="footer-contact-icon" />
                @wesy5748
              </p>
              <p>Mufakose, Harare, Zimbabwe</p>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>&copy; 2025 Weston N Sululu. All rights reserved.</span>
            <span className="footer-copyright-separator">•</span>
            <span className="footer-copyright-made">
              Made with <Heart size={16} className="footer-heart" /> and React
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="back-to-top"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="back-to-top-icon" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;