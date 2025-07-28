import { styled } from 'styled-components';

import { H3 } from 'components/Commons/Titles';
import DeleteButton from 'components/Commons/Buttons/DeleteButton';
import EditButton from 'components/Commons/Buttons/EditButton';
import ExperienceFormDialog from './ExperienceFormDialog';
import type { Experience } from 'components/ProfessionalPage/ProfessionalContent/Experience/data';

export default function ExperienceCard({experience} : { experience: Experience | undefined}) {
  const triggerButton = <EditButton aria-label="Edit Experience" size={19}/>

  return(
  <Wrapper>
      <Title>{experience?.title}</Title>
      <DeleteButton aria-label="Delete experience"/>
      <ExperienceFormDialog experience={experience} trigger={triggerButton} />
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