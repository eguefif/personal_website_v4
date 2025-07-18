import { styled } from 'styled-components';

import ExperienceCard from './ExperienceCard';

import type { Experience } from './data.tsx';
import EXPERIENCES from './data.tsx';

export default function Experience() {
  const experienceCards = EXPERIENCES.map( experience =>
    <ExperienceCard key={experience.id} experience={experience} />
  );

  return (
    <ExperienceWrapper>
      {experienceCards}
    </ExperienceWrapper>
  );
}

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;
`;
