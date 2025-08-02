import { styled } from 'styled-components';

import ExperienceCard from './ExperienceCard';
import { SectionTitle } from 'components/Commons/Titles';
import type { Experience } from './data.tsx';
import EXPERIENCES from './data.tsx';

export default function Experience() {
  const experienceCards = EXPERIENCES.map( experience =>
    <ExperienceCard key={experience.id} experience={experience} />
  );

  return (
    <Wrapper id="Experience">
      <SectionTitle title="Resume" />
      <ExperienceWrapper>
        {experienceCards}
      </ExperienceWrapper>
    </Wrapper>
  );
}

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

