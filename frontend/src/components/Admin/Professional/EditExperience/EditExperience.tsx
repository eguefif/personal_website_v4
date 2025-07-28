import { styled } from 'styled-components';
import EXPERIENCES from 'components/ProfessionalPage/ProfessionalContent/Experience/data';

import TriggerButton from 'components/Commons/Buttons/TriggerButton';
import ExperienceFormDialog from './ExperienceFormDialog';
import ExperienceCard from './ExperienceCard';

export default function EditExperience() {
  const experiences = EXPERIENCES.map( experience =>
    <ExperienceCard key={experience.id} experience={experience} />
  );
  return (
    <Wrapper>
      <h1>Edit Experience</h1>
      <ExperienceFormDialog trigger={<TriggerButton>Add Experience</TriggerButton>} />
      <ExperienceList>
        {experiences}
      </ExperienceList>
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

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
`;
