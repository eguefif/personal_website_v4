import ProfessionalContent from './Content/Content';
import Bio from './Bio/Bio';
import { QUERIES } from 'components/constants';

import { styled } from 'styled-components';

export default function ProfessionalPage() {
  return (
    <Wrapper>
      <Bio />
      <ProfessionalContent />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  @media ${QUERIES.laptopAndUp} {
    margin: 128px;
    flex-direction: row;
    align-items: start;
    gap: 264px;
  }
`;
