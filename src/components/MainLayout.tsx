import ProfessionalContent from './ProfessionalContent/ProfessionalContent';
import Bio from './Bio/Bio';
import ThemeToggle from './Commons/ThemeToggle';
import { QUERIES } from 'components/constants';

import { styled } from 'styled-components';

export default function MainLayout() {
  return (
    <Wrapper>
      <ThemeToggle />
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
    margin-left: 128px;
    margin-right: 128px;
    margin-top: 64px;
    flex-direction: row;
    align-items: start;
    gap: 264px;
  }
`;
