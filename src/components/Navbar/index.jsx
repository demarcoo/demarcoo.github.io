/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import sphinx from '../../assets/animation/sphinx.gif';
import ContactModal from '../ContactModal';
import './styles.scss';

function Navbar() {
  const [isShow, setIsShow] = useState(false);
  const modalRef = useRef(null);
  const handleContactClick = () => {
    setIsShow(true);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex mb-4 web-header">
        <img className="w-1/2 pokemon" src={sphinx} alt="sphinx" />
        <div className="w-1/2 contact" onClick={handleContactClick}>Contact</div>
      </div>
      <ContactModal isShow={isShow} handleSubmit={handleSubmitClick} modalRef={modalRef} />
      {isShow ? <div className="overlay" /> : <div className="overlay hide" />}
    </>
  );
}

export default Navbar;
