import { useParams, Navigate, Link } from 'react-router';
import { styled } from 'styled-components';
import { ArrowLeft } from 'react-feather';
import { H1 } from 'components/Commons/Titles';
import { TechList, TechEntry } from 'components/Commons/TechTags';
import ProjectDescription, { ImagePosition } from 'components/Commons/ProjectDescription';
import { QUERIES } from 'components/constants';
import PROJECTS from './PortFolioData';
import type { Project } from './PortFolioData';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p: Project) => p.id === parseInt(id || ''));

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const techEntries = project.tech.map((tech, index) =>
    <TechEntry key={index}>{tech}</TechEntry>
  );

  return (
    <Wrapper>
      <BackLink to="/">
        <ArrowLeft size={32} strokeWidth={3} />
      </BackLink>
      
      <Header>
        <ProjectTitle>{project.title}</ProjectTitle>
        <TechWrapper>
          <TechList>
            {techEntries}
          </TechList>
        </TechWrapper>
      </Header>
      
      <ProjectDescription
        title="Introduction"
        description={project.description.introduction.text}
        image={project.description.introduction.image}
        imagePosition={ImagePosition.Left}
      />
      
      <ProjectDescription
        title="Purpose and Goal"
        description={project.description.purpose.text}
        image={project.description.purpose.image}
        imagePosition={ImagePosition.Right}
      />
      
      <ProjectDescription
        title="Spotlight"
        description={project.description.spotlight.text}
        image={project.description.spotlight.image}
        imagePosition={ImagePosition.Left}
      />
      
      <ProjectDescription
        title="Lessons Learned"
        description={project.description.lessons.text}
        image={project.description.lessons.image}
        imagePosition={ImagePosition.Right}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 16px;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const ProjectTitle = styled(H1)`
  text-align: center;
`;

const TechWrapper = styled.div``;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 16px;
  margin: 0 auto;
  display: block;
`;


const BackLink = styled(Link)`
  color: var(--color-white);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  transition: transform 0.3s ease;
  align-self: center;
  
  &:hover {
    transform: scale(1.3);
  }
  
  @media ${QUERIES.tabletAndUp} {
    position: fixed;
    top: 24px;
    left: 24px;
    z-index: 100;
    align-self: unset;
  }
`;
