import './styles.scss';
import React from 'react';
// import { Link } from 'react-router-dom'
import PastProjects from '../../data/pastProjects';

function Dashboard() {
  return (
    <div className="dashboard">
      <section className="intro">
        <div className="intro-container">
          <p className="intro__text">
            {'Hi, it\'s me Marco.'}
            <br />
            <span className="intro__details">
              I help take your business online and making it available to everyone.
              <br />
            </span>
          </p>
        </div>
      </section>
      <section className="projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-4 projects__list">
          {PastProjects.map((project) => (
            <div className="projects__item rounded">
              <div className="projects__item__thumbnail">
                <img className="thumbnail__image rounded" src={project.thumbnail} alt={project.description} />
              </div>
              <div className="projects__item__caption">
                <div className="projects__item__caption__title">
                  {project.title}
                </div>
                <div className="projects__item__caption__author">
                  Website by
                  {' '}
                  {project.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
