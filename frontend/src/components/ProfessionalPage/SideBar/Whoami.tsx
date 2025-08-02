import { styled } from 'styled-components';

import { H1, H2, H3 } from 'components/Commons/Titles';

export default function Whoami() {
  return (
    <Wrapper>
      <Name>Emmanuel Guefif</Name>
      <Title>Mid-level developer</Title>
      <FormerTitle>Former elementary school teacher</FormerTitle>
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

const FormerTitle = styled(H3)`
  text-align: center;
  font-weight: 400;
`;
