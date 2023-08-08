import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-3">
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        <p className="mb-0 mr-3">
          <a href="https://github.com/kcarter9789" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <span className="mx-3"></span>
          <a href="www.linkedin.com/in/kywra-allen-181b2b216" target="_blank" rel="noopener noreferrer" className="text-white">
            <i className="fab fa-linkedin fa-2x"></i> 
          </a>
          <span className="mx-3"></span>
          <a href="mailto:kcarter9789@icloud.com" className="text-white">
            <i className="fas fa-envelope fa-2x"></i> 
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
