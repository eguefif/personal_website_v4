import { styled } from 'styled-components';

import { QUERIES } from 'components/constants';
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
  width: 676px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    align-items: start;
    gap: 24px;
  }
`;

const Years = styled.div`
  flex-shrink: 999;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;

  @media ${QUERIES.laptopAndUp} {
    padding-top: 6px;
  }
`;

const Year = styled.span`
  font-weight: 700;
  line-height: 1.5;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const JobTitle = styled(H2)`
  text-align: center;
  padding: 0;
  margin: 0;
  line-height: 1.5;

  @media ${QUERIES.laptopAndUp} {
    text-align: left;
  }
`;
