import { styled } from 'styled-components';

import { H1, H2, H3 } from 'components/Commons/Titles';
import type { User } from 'components/ProfessionalPage/useFetchUser';

export default function Whoami({ user }: { user: User}) {
  return (
    <Wrapper>
      <Name>Emmanuel Guefif</Name>
      <Title>Mid-Level developer</Title>
      <CatchPhrase>Former Elementary School Teacher</CatchPhrase>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Name = styled(H1)` `;

const Title = styled(H2)`
  font-weight: 400;
`;

const CatchPhrase = styled(H3)`
  text-align: center;
  font-weight: 400;
`;
