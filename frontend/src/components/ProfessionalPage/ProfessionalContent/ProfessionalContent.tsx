import { styled } from 'styled-components';
import Biopic from './Biopic';
import PortFolio from './PortFolio/PortFolio';
import Experience from './Experience/Experience';

export default function ProfessionalContent() {
  return (
    <Wrapper>
      <Experience />
      <Biopic />
      <PortFolio />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;
