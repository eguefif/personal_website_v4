import { styled } from 'styled-components';

import type { Project } from './FakeData';

export default function ProjectCard({project} : { project: Project }) {
  return (
    <ProjectCardWrapper>
      <ProjectTitle>
        {project.title}
      </ProjectTitle>
      <ProjectDescription>
        {project.description}
      </ProjectDescription>
    </ProjectCardWrapper>
  );
}

const ProjectCardWrapper = styled.div`
  border: solid 1px var(--color-gray-400);
  border-radius: 16px;
  background-color: var(--color-gray-400-transparent);
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 16px;
  padding: 24px;
  margin: 24px auto;
`;

const ProjectTitle = styled.div`
  text-align: center;
  font-size: 1.4rem;
`;

const ProjectDescription = styled.div`
`;
