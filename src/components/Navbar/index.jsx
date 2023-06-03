import React from 'react';
import sphinx from '../../assets/animation/sphinx.gif';
import './styles.scss';

function Navbar() {
  return (
    <div className="flex mb-4 web-header">
      <img className="w-1/2 pokemon" src={sphinx} alt="sphinx" />
      <div className="w-1/2 contact">Contact</div>
    </div>
  );
}

export default Navbar;
