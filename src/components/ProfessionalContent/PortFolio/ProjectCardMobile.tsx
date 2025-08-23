import { styled } from 'styled-components';

import type { Project } from './PortFolioData';
import { H2 } from 'components/Commons/Titles';
import { QUERIES } from 'components/constants';
import { TechList, TechEntry } from 'components/Commons/TechTags';

export default function ProjectCardMobile({project} : { project: Project }) {

  const techEntries = project.tech.map((tech, index) =>
    <TechEntry key={index}>{tech}</TechEntry>
  );
  return (
    <ProjectCardWrapper>

      <TopWrapper>
        <ProjectContent>
          <ProjectTitle>
            {project.title}
          </ProjectTitle>
        <ImageWrapper>
          <ProjectImage src={project.image.src} alt={project.image.alt} />
        </ImageWrapper>
          <ProjectDescription>
            {project.summary}
          </ProjectDescription>
        </ProjectContent>
      </TopWrapper>

      <TechWrapper>
        <TechList>
          {techEntries}
        </TechList>
      </TechWrapper>
    </ProjectCardWrapper>
  );
}

const ProjectCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-400-alpha-20);
  border-radius: 16px;
  gap: 16px;
  margin: 8px;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  margin: auto;
`;

const ProjectImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
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
`;

const ProjectDescription = styled.div`
`;

const TechWrapper = styled.div`
  padding: 12px;
`;
