import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-primary text-white p-3">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-6">
            <h1 className="mb-0">Kywra Allen</h1>
          </div>
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
