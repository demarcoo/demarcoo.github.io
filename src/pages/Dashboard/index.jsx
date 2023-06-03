import './styles.scss';
import React from 'react';
import { Link } from 'react-router-dom';
// import sphinx from '../../assets/animation/sphinx.gif';
import Navbar from '../../components/Navbar';

function Dashboard() {
  return (
    <div className="dashboard text-slate-900">
      <Navbar />
      <section className="intro">
        <p className="intro__text">
          Site Reliability Engineer
          {' '}
          <Link className="intro__text__place" to="https://shopee.com/">
            @ Shopee
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Dashboard;
