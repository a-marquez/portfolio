import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionPastWork = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Work">
      {projects.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
        />
      ))}
    </Section>
  );
};

export default SectionPastWork;

