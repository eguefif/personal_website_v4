import { styled } from 'styled-components';

import type { Project } from './FakeData';

export default function ProjectCard({project} : { project: Project }) {
  return (
    <ProjectCardWrapper>
      <ProjectImage src={project.image} />
      <ProjectContent>
        <ProjectTitle>
          {project.title}
        </ProjectTitle>
        <ProjectDescription>
          {project.description}
        </ProjectDescription>
      </ProjectContent>
    </ProjectCardWrapper>
  );
}

const ProjectCardWrapper = styled.div`
  display: flex;
  justify-content: start;
  background-color: var(--color-gray-400-transparent);
  border-radius: 0 16px 16px 0;
  gap: 16px;
`;


const ProjectImage = styled.img`
  width: 100%;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 12px;
`;

const ProjectTitle = styled.div`
  text-align: center;
  font-size: 1.4rem;
`;

const ProjectDescription = styled.div`
`;
