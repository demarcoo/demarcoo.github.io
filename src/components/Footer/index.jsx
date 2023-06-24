import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import github from '../../assets/icons/github-mark-white.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__text">
        {'If you\'re interested in engaging a digital agency, or would like to chat about a potential collaboration, please get in touch.'}
      </div>
      <div className="footer__end">
        <div className="footer__end__copyright">
          © 2023 | Marco
          <br />
          Inspired by&nbsp;
          <Link to="https://carlbeaverson.com/">
            Carl Beaverson
          </Link>
        </div>
        <div className="footer__end__contact">
          <Link to="https://github.com/demarcoo">
            <img className="github-icon" src={github} alt="github logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
