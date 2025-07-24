import { styled } from 'styled-components';
import ProjectCard from './ProjectCard';

import { H1 } from 'components/Commons/Titles';
import PROJECTS from './FakeData';
import type { Project } from './FakeData';


export default function PortFolio() {
  const projects = PROJECTS.map((project: Project) => 
    <ProjectCard key={project.id} project={project} />
  );
  return (
    <Wrapper>
      <H1>Portfolio</H1>
      <ProjectCardWrapper>
        { projects }
      </ProjectCardWrapper>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 200px
  background-color: var(--color-gray-400-transparent);
`;
