import { styled } from 'styled-components';
import Biopic from './Biopic';
import PortFolio from './PortFolio/PortFolio';

export default function ProfessionalContent() {
  return (
    <Wrapper>
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
