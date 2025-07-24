import { styled } from 'styled-components';

import type { Project } from './FakeData';
import { H2 } from 'components/Commons/Titles';

export default function ProjectCard({project} : { project: Project }) {
  return (
    <ProjectCardWrapper>
      <ImageWrapper>
        <ProjectImage src={project.image.src} alt={project.image.alt} />
      </ImageWrapper>
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
  background-color: var(--color-gray-400-transparent);
  border-radius: 16px;
  gap: 16px;
`;

const ImageWrapper = styled.div`
  max-width: 224px;
  max-height: 224px;
`;

const ProjectImage = styled.img`
  border-radius: 16px 0px 0px 16px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 12px;
`;

const ProjectTitle = styled(H2)`
  text-align: center;
  font-size: 1.4rem;
`;

const ProjectDescription = styled.div`
`;
