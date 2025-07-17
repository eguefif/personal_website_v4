import { styled } from 'styled-components';

import type { Experience } from './data';

export default function Experience({experience} : {experience: Experience}) {

  const techEntries = experience.tech.map((tech, index) =>
    <TechEntry key={index}>{tech}</TechEntry>
  );

  return (
    <Wrapper>
      <Years>
        <Year>{experience.start}</Year>
        -
        <Year>{experience.end}</Year>
      </Years>

      <Main>
        <JobTitle>{experience.title} </JobTitle>
        <JobDescription>{experience.description} </JobDescription>
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
  flex: 1;
`;

const Year = styled.span``;

const Main = styled.div`
  flex: 2
`;

const JobTitle = styled.h1``;

const JobDescription = styled.div``;

const TechList = styled.ul``;

const TechEntry = styled.li``;
