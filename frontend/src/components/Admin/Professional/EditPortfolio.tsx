import { styled } from 'styled-components';
import PROJECTS from './FakeData';

interface Project {
  id: number,
  title: string,
  description: string,
  tech: string[]
  picture: {
    src: string,
    alt: string
  },
}

export default function EditPortfolio() {
  const projects = PROJECTS.map( project =>
    <Project key={project.id}>
      {project.title}
    </Project>
  );
  return (
    <Wrapper>
      <h1>Edit Portfolio</h1>
      <ProjectList>
        {projects}
      </ProjectList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  
`;
