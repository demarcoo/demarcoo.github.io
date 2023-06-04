import './styles.scss';
import React from 'react';
// import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <section className="intro">
        <p className="intro__text">
          {'Hi, I\'m Marco.'}
          <br />
          <span className="intro__details">
            I help take your business online
            <br />
            and making it available to everyone.
            <br />
            {/* Currently working as a Site Reliability Engineer &nbsp;
            <Link className="intro__text__place" to="https://shopee.com/">
              @ Shopee
            </Link> */}
          </span>
        </p>
      </section>
    </div>
  );
}

export default Dashboard;
