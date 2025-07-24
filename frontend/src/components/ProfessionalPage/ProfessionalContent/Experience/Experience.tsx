import { styled } from 'styled-components';

import ExperienceCard from './ExperienceCard';
import { H1 } from 'components/Commons/Titles';
import type { Experience } from './data.tsx';
import EXPERIENCES from './data.tsx';

export default function Experience() {
  const experienceCards = EXPERIENCES.map( experience =>
    <ExperienceCard key={experience.id} experience={experience} />
  );

  return (
    <Wrapper>
      <H1>Resume</H1>
      <ExperienceWrapper>
        {experienceCards}
      </ExperienceWrapper>
    </Wrapper>
  );
}

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;

