import { styled } from 'styled-components';

import { H2 } from 'components/Commons/Titles';
import type { Experience } from './data';
import { TechList, TechEntry } from 'components/Commons/TechTags';
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
  align-items: center;
  padding: 24px;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Year = styled.span`
  font-weight: 700;
`;


const JobTitle = styled(H2)`
`;

const TechList = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;

const TechEntry = styled.li`
  padding: 8px;
  list-style-type: none;
  border-radius: 15px;
  border: 1px solid var(--color-primary);
  background-color: var(--color-primary);
  text-align: center;
  height: 100%;
  width: 100%;
`;
