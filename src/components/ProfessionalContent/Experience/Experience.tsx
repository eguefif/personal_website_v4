import { styled } from 'styled-components';

import ExperienceCard from './ExperienceCard';
import { SectionTitle } from 'components/Commons/Titles';
import type { Experience } from './XPdata';
import EXPERIENCES from './XPdata';

export default function Experience() {
  const experienceCards = EXPERIENCES.map( experience =>
    <ExperienceCard key={experience.id} experience={experience} />
  );

  return (
    <Wrapper id="Experience">
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

