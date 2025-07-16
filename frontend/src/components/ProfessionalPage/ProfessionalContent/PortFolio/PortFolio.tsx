import { styled } from 'styled-components';
import ProjectCard from './ProjectCard';

import PROJECTS from './FakeData';
import type { Project } from './FakeData';


export default function PortFolio() {
  const projects = PROJECTS.map((project: Project) => 
    <ProjectCard key={project.id} project={project} />
  );
  return (
    <ProjectCardWrapper>
      { projects }
    </ProjectCardWrapper>
  );
}

const ProjectCardWrapper = styled.div`
  height: 200px
  background-color: var(--color-gray-400-transparent);
`;
