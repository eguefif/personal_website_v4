import { styled } from 'styled-components';
import { Link } from 'react-router';
import ProjectCardLaptop from './ProjectCardLaptop';
import ProjectCardMobile from './ProjectCardMobile';

import { QUERIES } from 'components/constants';
import { SectionTitle } from 'components/Commons/Titles';
import PROJECTS from './PortFolioData';
import type { Project } from './PortFolioData';


export default function PortFolio() {
  const tabletAndUp = matchMedia(QUERIES.tabletAndUp).matches;
  const ProjectCard = tabletAndUp ? ProjectCardLaptop : ProjectCardMobile;
  const projects = PROJECTS.map((project: Project) => 
    <ProjectCardLink key={project.id} to={`/project/${project.id}`}>
      <ProjectCard project={project} />
    </ProjectCardLink>
  );
  return (
    <Wrapper id="Portfolio">
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

const ProjectCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;
