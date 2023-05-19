import React from 'react';

function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="container flex flex-wrap items-center justify-end">
        

        <div className="nav-icons flex items-center lg_992:order-2 ml-auto md:ml-8">
          {/* Navbar Button */}
          
          {/* Navbar Collapse Menu Button */}
          <button data-collapse="menu-collapse" type="button" className="collapse-btn inline-flex items-center ml-3 text-dark dark:text-white lg_992:hidden" aria-controls="menu-collapse" aria-expanded="false">
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        {/* Navbar Menu */}
        <div className="navigation lg_992:order-1 lg_992:flex hidden ml-auto" id="menu-collapse">
          <ul className="navbar-nav nav-light" id="navbar-navlist">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testi">Review</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
