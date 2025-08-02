import { styled } from 'styled-components';
import Biopic from './Biopic';
import PortFolio from './PortFolio/PortFolio';
import Experience from './Experience/Experience';

export default function ProfessionalContent() {
  return (
    <Wrapper>
      <Biopic />
      <Experience />
      <PortFolio />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 104px;
`;

