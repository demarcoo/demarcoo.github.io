import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function ContactModal(props) {
  const {
    isShow = false, handleSubmit, modalRef, handleChange,
  } = props;

  ContactModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    modalRef: PropTypes.shape({}).isRequired,
    handleChange: PropTypes.func.isRequired,
  };

  return (
    <div className={isShow ? 'contact-modal' : 'contact-modal hide'} ref={modalRef}>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-title font-bold">
          Get In Touch
        </h2>
        <div className="form-caption">
          If you'd like to collaborate, please fill out the form below with as much details as possible and I'll be in touch!
        </div>
        <div className="form-inputs grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-4">
          <input name="fullname" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-full-name" type="text" placeholder="Full Name*" required />
          <input name="email" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email-address" type="email" placeholder="Email Address*" required />
        </div>
        <textarea name="content" onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" cols="20" rows="8" placeholder="Message..." />
        <button type="submit" className="rounded rounded-3xl px-8 mt-8 mb-10 form-button">Submit</button>
      </form>
    </div>
  );
}

export default ContactModal;
