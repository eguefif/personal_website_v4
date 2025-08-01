import { styled } from 'styled-components';

import { H2 } from 'components/Commons/Titles';
import type { Experience } from './data';
import AchievementsContainer from './AchievementsContainer';

export default function Experience({experience} : {experience: Experience}) {

  const techEntries = experience.tech.map((tech, index) =>
    <TechEntry key={index}>{tech}</TechEntry>
  );

  return (
    <Wrapper>
      <Years>
        <Year>{experience.start}</Year>
        <span>-</span>
        <Year>{experience.end}</Year>
      </Years>

      <Main>
        <JobTitle>{experience.title} </JobTitle>
        <AchievementsContainer achievements={experience.achievements} />
        <TechList>
          {techEntries}
        </TechList>
      </Main>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const Years = styled.div`
  flex-shrink: 999;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0px;
  padding-right: 24px;
  padding-top: 4px;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Year = styled.span`
  font-weight: 700;
  line-height: 1.5;
`;


const JobTitle = styled(H2)`
  padding: 0;
  margin: 0;
  line-height: 1.5;
`;
