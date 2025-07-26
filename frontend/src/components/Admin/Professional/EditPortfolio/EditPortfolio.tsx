import { styled } from 'styled-components';
import PROJECTS from './FakeData';

import TriggerButton from 'components/Commons/Buttons/TriggerButton';
import ProjectFormDialog from './ProjectFormDialog';
import ProjectCard from './ProjectCard';

interface Project {
  id: number,
  title: string,
  description: string,
  tech: string[]
  image: {
    src: string,
    alt: string
  },
}

export default function EditPortfolio() {
  const projects = PROJECTS.map( project =>
    <ProjectCard key={project.id} project={project} />
  );
  return (
    <Wrapper>
      <h1>Edit Portfolio</h1>
      <ProjectFormDialog trigger={<TriggerButton>Add Project</TriggerButton>} />
      <ProjectList>
        {projects}
      </ProjectList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 32px;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
`;

const Project = styled.div`
  padding: 8px;
  width: 264px;
  background-color: var(--color-primary);
  border-radius: 8px;
  gap: 32px;
`;
