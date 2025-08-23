import { useParams, Navigate, Link } from 'react-router';
import { styled } from 'styled-components';
import { ArrowLeft } from 'react-feather';
import { H1, H2 } from 'components/Commons/Titles';
import { TechList, TechEntry } from 'components/Commons/TechTags';
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
      
      <ProjectImage src={project.image.src} alt={project.image.alt} />
      
      <DescriptionSection>
        <SectionTitle>Introduction</SectionTitle>
        <SectionContent>{project.description.introduction}</SectionContent>
      </DescriptionSection>
      
      <DescriptionSection>
        <SectionTitle>Purpose and Goal</SectionTitle>
        <SectionContent>{project.description.purpose}</SectionContent>
      </DescriptionSection>
      
      <DescriptionSection>
        <SectionTitle>Spotlight</SectionTitle>
        <SectionContent>{project.description.spotlight}</SectionContent>
      </DescriptionSection>
      
      <DescriptionSection>
        <SectionTitle>Lessons Learned</SectionTitle>
        <SectionContent>{project.description.lessons}</SectionContent>
      </DescriptionSection>
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

const DescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled(H2)``;

const SectionContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  white-space: pre-wrap;
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
