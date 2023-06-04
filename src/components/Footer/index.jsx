import React from 'react';
import './styles.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__text">
        {'If you\'re interested in engaging a digital agency, or would like to chat about a potential collaboration, please get in touch.'}
      </div>
      <div className="footer__end">
        <div className="footer__end__copyright">
          © 2023 | Marco
        </div>
        <div className="footer__end__contact">
          Contact me
        </div>
      </div>
    </footer>
  );
}

export default Footer;
