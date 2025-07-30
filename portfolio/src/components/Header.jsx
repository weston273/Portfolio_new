import React from 'react';
import { Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-bg-element"></div>
      <div className="header-bg-element"></div>
      
      <div className="header-content">
        <div className="header-title-container">
          <h1 className="header-title">PORTFOLIO</h1>
          <span className="year-badge">2025</span>
        </div>
        
        <p className="header-subtitle">Software Developer and Graphic Designer</p>
        <p className="header-author">Weston N Sululu</p>
        
        <a href="/CV/CV.pdf" download className="download-btn">
          <Download size={24} />
          Download CV
        </a>
        
        <div className="scroll-indicator">
          <div className="scroll-indicator-inner">
            <div className="scroll-indicator-dot"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;