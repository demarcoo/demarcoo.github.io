/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react';
import sphinx from '../../assets/animation/sphinx.gif';
import ContactModal from '../ContactModal';
import './styles.scss';
import Alert from '../Alert';

function Navbar() {
  const [isShow, setIsShow] = useState(false);
  const [isSendingMail, setIsSendingMail] = useState(false);
  const [mailRequest, setMailRequest] = useState({
    fullname: '',
    email: '',
    content: '',
  });
  const modalRef = useRef(null);
  const handleContactClick = () => {
    setIsShow(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMailRequest({ ...mailRequest, [name]: value });
  };

  const handleSubmitClick = (e) => {
    try {
      e.preventDefault();
      const body = `Hello, I am ${mailRequest.fullname}! ${mailRequest.content}`; // Predefined body content
      const subject = 'Regarding your inquiry'; // Optional subject

      const mailtoUrl = `mailto:marcoolunn@gmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;

      setIsSendingMail(true);
      window.location.href = mailtoUrl;
    } catch (error) {
      alert('Something went wrong, please try again!');
    } finally {
      setIsShow(false);
    }
  };

  useEffect(() => {
    if (isSendingMail) {
      setTimeout(() => {
        setIsSendingMail(false);
      }, 3000);
    }
  }, [isSendingMail]);

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

  console.log(isSendingMail);

  return (
    <>
      <div className="flex mb-4 web-header">
        <img className="w-1/2 pokemon" src={sphinx} alt="sphinx" />
        <div className="w-1/2 contact" onClick={handleContactClick}>Contact</div>
      </div>
      <Alert isShow={isSendingMail} />
      <ContactModal
        isShow={isShow}
        handleSubmit={handleSubmitClick}
        modalRef={modalRef}
        handleChange={handleInputChange}
      />
      {isShow ? <div className="overlay" /> : <div className="overlay hide" />}
    </>
  );
}

export default Navbar;
