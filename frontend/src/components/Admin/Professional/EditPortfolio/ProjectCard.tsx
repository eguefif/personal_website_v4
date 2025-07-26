import { styled } from 'styled-components';

import { H3 } from 'components/Commons/Titles';
import DeleteButton from 'components/Commons/Buttons/DeleteButton';
import Project from './EditPorfolio';
import EditButton from 'components/Commons/Buttons/EditButton';
import ProjectFormDialog from './ProjectFormDialog';

export default function ProjectCard({project} : { project: Project | undefined}) {
  const triggerButton = <EditButton aria-label="Edit Project" size={19}/>

  return(
  <Wrapper>
      <Title>{project.title}</Title>
      <DeleteButton aria-label="Delete project"/>
      <ProjectFormDialog project={project} trigger={triggerButton} />
  </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  width: 400px;
  background-color: var(--color-gray-400-alpha-50);
  border-radius: 4px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Title = styled(H3)`
  margin-right: auto;
`
