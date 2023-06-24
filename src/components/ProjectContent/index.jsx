import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectContent() {
  const { slug } = useParams();
  const contentMap = {
    kedai:
  <>
    <p>This is the content of project 1.</p>
    aaa
  </>,
    'digi-lab': <p>This is the content of project 2.</p>,
  };

  const content = contentMap[slug] || (
  <p>Details of this project is under construction.</p>
  );

  return (
    <section className="project__content">
      {content}
    </section>
  );
}

export default ProjectContent;
